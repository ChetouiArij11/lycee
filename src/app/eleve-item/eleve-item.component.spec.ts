import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EleveItemComponent } from './eleve-item.component';

describe('EleveItemComponent', () => {
  let component: EleveItemComponent;
  let fixture: ComponentFixture<EleveItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EleveItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EleveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
