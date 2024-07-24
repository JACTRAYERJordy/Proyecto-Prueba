import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuertoLopezComponent } from './puerto-lopez.component';

describe('PuertoLopezComponent', () => {
  let component: PuertoLopezComponent;
  let fixture: ComponentFixture<PuertoLopezComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PuertoLopezComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuertoLopezComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
