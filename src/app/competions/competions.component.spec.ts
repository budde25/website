import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetionsComponent } from './competions.component';

describe('CompetionsComponent', () => {
  let component: CompetionsComponent;
  let fixture: ComponentFixture<CompetionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
