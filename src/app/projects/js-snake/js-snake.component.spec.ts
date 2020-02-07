import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsSnakeComponent } from './js-snake.component';

describe('JsSnakeComponent', () => {
  let component: JsSnakeComponent;
  let fixture: ComponentFixture<JsSnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsSnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsSnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
