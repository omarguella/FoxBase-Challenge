import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukteListeComponent } from './produkte-liste.component';

describe('ProdukteListeComponent', () => {
  let component: ProdukteListeComponent;
  let fixture: ComponentFixture<ProdukteListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukteListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdukteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
