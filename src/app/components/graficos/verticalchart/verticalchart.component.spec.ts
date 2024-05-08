import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalchartComponent } from './verticalchart.component';

describe('VerticalchartComponent', () => {
  let component: VerticalchartComponent;
  let fixture: ComponentFixture<VerticalchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerticalchartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerticalchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
