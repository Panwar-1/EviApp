import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployComponent } from './edit-employ.component';

describe('EditEmployComponent', () => {
  let component: EditEmployComponent;
  let fixture: ComponentFixture<EditEmployComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmployComponent]
    });
    fixture = TestBed.createComponent(EditEmployComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
