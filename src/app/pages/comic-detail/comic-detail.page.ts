import { Component, OnInit } from '@angular/core';
import { Comic } from 'src/app/models/comic';
import { ComicService } from 'src/app/services/comic.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CharacterEditModalComponent } from 'src/app/components/character/character-edit-modal/character-edit-modal.component';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-comic-detail-page',
  templateUrl: './comic-detail.page.html',
  styleUrls: ['./comic-detail.page.scss']
})
export class ComicDetailPageComponent implements OnInit {
  comic: Comic;

  constructor(
    private comicService: ComicService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.comicService.getComics().subscribe(comics => {
      this.comic = comics.find(comic => comic.slug === this.route.snapshot.paramMap.get('slug'));
    });
  }

  openDialog(character: Character, isNew = false): void {
    const dialogRef = this.dialog.open(CharacterEditModalComponent, {
      width: '60%',
      data: {
        character,
        isNew
      }
    });

    dialogRef.afterClosed().subscribe(char => {
      if (char) {
        this.saveNewCharacter(char);
      }
    });
  }

  addCharacter() {
    this.openDialog({
      id: this.comic.characters.length,
      name: null,
      description: null,
      isGood: null,
      image: null,
      numberOfRoles: null
    }, true);
  }

  saveNewCharacter(character: Character) {
    this.comic.characters = [character, ...this.comic.characters];
  }

  deleteCharacter(id: number) {
    this.comic.characters = this.comic.characters.filter(character => character.id !== id);
  }
}
