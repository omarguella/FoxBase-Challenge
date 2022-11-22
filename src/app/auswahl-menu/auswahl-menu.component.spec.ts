import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuswahlMenuComponent } from './auswahl-menu.component';

describe('AuswahlMenuComponent', () => {
  let component: AuswahlMenuComponent;
  let fixture: ComponentFixture<AuswahlMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuswahlMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuswahlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
