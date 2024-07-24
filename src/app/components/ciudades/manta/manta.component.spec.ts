import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantaComponent } from './manta.component';

describe('MantaComponent', () => {
  let component: MantaComponent;
  let fixture: ComponentFixture<MantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MantaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
