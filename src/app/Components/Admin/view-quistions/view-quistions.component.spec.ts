import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuistionsComponent } from './view-quistions.component';

describe('ViewQuistionsComponent', () => {
  let component: ViewQuistionsComponent;
  let fixture: ComponentFixture<ViewQuistionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewQuistionsComponent]
    });
    fixture = TestBed.createComponent(ViewQuistionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
