import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScaffoldComponent } from './scaffold.component';

describe('ScaffoldComponent', () => {
  let component: ScaffoldComponent;
  let fixture: ComponentFixture<ScaffoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScaffoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScaffoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
