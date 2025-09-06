import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentItem } from './instrument-item';

describe('InstrumentItem', () => {
  let component: InstrumentItem;
  let fixture: ComponentFixture<InstrumentItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstrumentItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstrumentItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
