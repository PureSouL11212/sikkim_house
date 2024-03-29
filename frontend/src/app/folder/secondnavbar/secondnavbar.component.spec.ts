import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondnavbarComponent } from './secondnavbar.component';

describe('SecondnavbarComponent', () => {
  let component: SecondnavbarComponent;
  let fixture: ComponentFixture<SecondnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
