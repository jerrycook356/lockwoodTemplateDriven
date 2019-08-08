import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoByStockpileComponent } from './info-by-stockpile.component';

describe('InfoByStockpileComponent', () => {
  let component: InfoByStockpileComponent;
  let fixture: ComponentFixture<InfoByStockpileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoByStockpileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoByStockpileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
