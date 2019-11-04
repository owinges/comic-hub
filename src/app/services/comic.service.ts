import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  comicsUrl = 'https://propertymecomics.s3.amazonaws.com/comics';
  comics: Comic[];

  constructor(private http: HttpClient) {}

  getComics(): Observable<Comic[]> {
    if (this.comics) {
      console.log('Loaded comics from cache');
      console.table(this.comics);
      return of(this.comics);
    }

    console.log('Loaded comics from server');
    return this.http.get<Comic[]>(this.comicsUrl).pipe(map(comics => this.comics = comics));
  }

  addCharacter(comicId: number, character: Character): void {
    if (this.comics) {
      this.comics = this.comics.map(comic => {
        if (comic.id === comicId) {
          return {
            ...comic,
            characters: [
              ...comic.characters,
              character
            ]
          };
        } else {
          return comic;
        }
      });
    }
  }

  deleteCharacter(comicId: number, characterId: number): void {
    this.comics = this.comics.map(comic => {
      if (comic.id === comicId) {
        return {
          ...comic,
          characters: [
            ...comic.characters.filter(
              character => character.id !== characterId
            )
          ]
        };
      } else {
        return comic;
      }
    });
  }

  editCharacter(
    comicId: number,
    editedCharacter: Character
  ): void {
    this.comics = this.comics.map(comic => {
      if (comic.id === comicId) {
        const updatedCharacters = comic.characters.map(character => {
          if (character.id === editedCharacter.id) {
            return editedCharacter;
          } else {
            return character;
          }
        });

        return {
          ...comic,
          characters: updatedCharacters
        };
      } else {
        return comic;
      }
    });
  }
}
