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

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';

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
    MatCardModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  providers: [],
  entryComponents: [CharacterEditModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
