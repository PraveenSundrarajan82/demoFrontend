import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosListComponent } from './demos-list.component';

describe('DemosListComponent', () => {
  let component: DemosListComponent;
  let fixture: ComponentFixture<DemosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemosListComponent]
    });
    fixture = TestBed.createComponent(DemosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
