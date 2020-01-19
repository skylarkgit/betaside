import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninPortalComponent } from './signin-portal.component';

describe('SigninPortalComponent', () => {
  let component: SigninPortalComponent;
  let fixture: ComponentFixture<SigninPortalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninPortalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
