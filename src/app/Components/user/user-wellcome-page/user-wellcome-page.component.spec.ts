import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWellcomePageComponent } from './user-wellcome-page.component';

describe('UserWellcomePageComponent', () => {
  let component: UserWellcomePageComponent;
  let fixture: ComponentFixture<UserWellcomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserWellcomePageComponent]
    });
    fixture = TestBed.createComponent(UserWellcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
