import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailPageComponent } from './comic-detail.page';

describe('ComicDetailComponent', () => {
  let component: ComicDetailPageComponent;
  let fixture: ComponentFixture<ComicDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
