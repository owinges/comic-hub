import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsPageComponent } from './comics.page';

describe('ComicsComponent', () => {
  let component: ComicsPageComponent;
  let fixture: ComponentFixture<ComicsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
