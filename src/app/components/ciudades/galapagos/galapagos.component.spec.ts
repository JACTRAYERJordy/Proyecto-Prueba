import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalapagosComponent } from './galapagos.component';

describe('GalapagosComponent', () => {
  let component: GalapagosComponent;
  let fixture: ComponentFixture<GalapagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalapagosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalapagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
