import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationClaimComponent } from './vacation-claim.component';

describe('VacationClaimComponent', () => {
  let component: VacationClaimComponent;
  let fixture: ComponentFixture<VacationClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacationClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
