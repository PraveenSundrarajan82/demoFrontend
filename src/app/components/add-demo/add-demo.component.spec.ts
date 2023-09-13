import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemoComponent } from './add-demo.component';

describe('AddDemoComponent', () => {
  let component: AddDemoComponent;
  let fixture: ComponentFixture<AddDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDemoComponent]
    });
    fixture = TestBed.createComponent(AddDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
