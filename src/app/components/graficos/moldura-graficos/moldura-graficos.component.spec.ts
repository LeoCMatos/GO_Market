import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolduraGraficosComponent } from './moldura-graficos.component';

describe('MolduraGraficosComponent', () => {
  let component: MolduraGraficosComponent;
  let fixture: ComponentFixture<MolduraGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MolduraGraficosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MolduraGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
