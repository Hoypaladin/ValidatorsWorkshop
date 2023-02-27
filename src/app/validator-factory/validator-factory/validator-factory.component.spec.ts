import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorFactoryComponent } from './validator-factory.component';

describe('ValidatorFactoryComponent', () => {
  let component: ValidatorFactoryComponent;
  let fixture: ComponentFixture<ValidatorFactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatorFactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatorFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
