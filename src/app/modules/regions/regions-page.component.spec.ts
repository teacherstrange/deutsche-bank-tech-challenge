import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsPageComponent } from './regions-page.component';

describe('RegionsPageComponent', () => {
  let component: RegionsPageComponent;
  let fixture: ComponentFixture<RegionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
