import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeSeiteComponent } from './challenge-seite.component';

describe('ChallengeSeiteComponent', () => {
  let component: ChallengeSeiteComponent;
  let fixture: ComponentFixture<ChallengeSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeSeiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
