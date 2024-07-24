import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalinasComponent } from './salinas.component';

describe('SalinasComponent', () => {
  let component: SalinasComponent;
  let fixture: ComponentFixture<SalinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalinasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
