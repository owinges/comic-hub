import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterEditModalComponent } from './character-edit-modal.component';

describe('CharacterEditModalComponent', () => {
  let component: CharacterEditModalComponent;
  let fixture: ComponentFixture<CharacterEditModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterEditModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
