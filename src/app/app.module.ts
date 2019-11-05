import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComicListComponent } from './components/comic/comic-list/comic-list.component';
import { ComicListItemComponent } from './components/comic/comic-list-item/comic-list-item.component';
import { CharacterEditModalComponent } from './components/character/character-edit-modal/character-edit-modal.component';
import { ComicsPageComponent } from './pages/comics/comics.page';
import { ComicDetailPageComponent } from './pages/comic-detail/comic-detail.page';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ComicListComponent,
    ComicListItemComponent,
    CharacterEditModalComponent,
    ComicsPageComponent,
    ComicDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  entryComponents: [CharacterEditModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
