import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsSelectorComponent } from './regions-selector.component';

describe('RegionsSelectorComponent', () => {
  let component: RegionsSelectorComponent;
  let fixture: ComponentFixture<RegionsSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
