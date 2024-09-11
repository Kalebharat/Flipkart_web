import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideImgComponent } from './slide-img.component';

describe('SlideImgComponent', () => {
  let component: SlideImgComponent;
  let fixture: ComponentFixture<SlideImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideImgComponent]
    });
    fixture = TestBed.createComponent(SlideImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
