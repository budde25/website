import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDJPrivacyComponent } from './party-djprivacy.component';

describe('PartyDJPrivacyComponent', () => {
  let component: PartyDJPrivacyComponent;
  let fixture: ComponentFixture<PartyDJPrivacyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartyDJPrivacyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartyDJPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
