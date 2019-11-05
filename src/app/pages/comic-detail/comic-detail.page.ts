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
    public comicService: ComicService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.refreshComic();
  }

  refreshComic() {
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

    dialogRef.afterClosed().subscribe((
      payload: { char: Character, charIsNew: boolean } = null
    ) => {
      if (payload) {
        const { char, charIsNew } = payload;

        if (charIsNew) {
          this.comicService.addCharacter(this.comic.id, char);
        } else {
          this.comicService.editCharacter(this.comic.id, char);
        }

        this.refreshComic();
      }
    });
  }

  createNewCharacter(): void {
    this.openDialog({
      id: this.comic.characters.length,
      name: null,
      description: null,
      isGood: null,
      image: null,
      numberOfRoles: null
    }, true);
  }

  deleteCharacter(character: Character) {
    const confirmation = confirm(`Are you sure you want to delete ${character.name}?`);

    if (confirmation) {
      this.comicService.deleteCharacter(this.comic.id, character.id);
      this.refreshComic();
    }
  }
}
