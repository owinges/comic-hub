import { Component, OnInit, Input } from '@angular/core';
import { Comic } from 'src/app/models/comic';

@Component({
  selector: 'app-comic-list-item',
  templateUrl: './comic-list-item.component.html',
  styleUrls: ['./comic-list-item.component.scss']
})
export class ComicListItemComponent implements OnInit {
  @Input() comic: Comic;

  constructor() { }

  ngOnInit() {
  }

}
