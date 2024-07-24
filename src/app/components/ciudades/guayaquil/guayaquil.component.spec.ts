import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuayaquilComponent } from './guayaquil.component';

describe('GuayaquilComponent', () => {
  let component: GuayaquilComponent;
  let fixture: ComponentFixture<GuayaquilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuayaquilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuayaquilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
