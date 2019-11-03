import { Injectable } from '@angular/core';
import { Comic } from '../models/comic';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ComicService {
  comicsUrl = 'https://propertymecomics.s3.amazonaws.com/comics';

  constructor(private http: HttpClient) {}

  getComics(): Observable<Comic[]> {
    console.log('Loaded comics');
    return this.http.get<Comic[]>(this.comicsUrl);
  }
}
