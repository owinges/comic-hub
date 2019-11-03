import { Component, OnInit } from '@angular/core';
import { ComicService } from 'src/app/services/comic.service';
import { Comic } from 'src/app/models/comic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})
export class ComicListComponent implements OnInit {
  comics: Comic[];

  constructor(private comicService: ComicService) {}

  ngOnInit() {
    this.comicService.getComics().subscribe(results => this.comics = results);
  }
}
