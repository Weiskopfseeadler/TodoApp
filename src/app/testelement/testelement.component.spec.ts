import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestelementComponent } from './testelement.component';

describe('TestelementComponent', () => {
  let component: TestelementComponent;
  let fixture: ComponentFixture<TestelementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestelementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
