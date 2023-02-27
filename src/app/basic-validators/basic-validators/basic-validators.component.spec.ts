import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicValidatorsComponent } from './basic-validators.component';

describe('BasicValidatorsComponent', () => {
  let component: BasicValidatorsComponent;
  let fixture: ComponentFixture<BasicValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicValidatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
