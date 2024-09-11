import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoooterComponent } from './foooter.component';

describe('FoooterComponent', () => {
  let component: FoooterComponent;
  let fixture: ComponentFixture<FoooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoooterComponent]
    });
    fixture = TestBed.createComponent(FoooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
