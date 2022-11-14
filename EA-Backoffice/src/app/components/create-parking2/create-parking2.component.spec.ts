import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParking2Component } from './create-parking2.component';

describe('CreateParking2Component', () => {
  let component: CreateParking2Component;
  let fixture: ComponentFixture<CreateParking2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParking2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateParking2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
