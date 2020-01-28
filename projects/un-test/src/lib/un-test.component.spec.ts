import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnTestComponent } from './un-test.component';

describe('UnTestComponent', () => {
  let component: UnTestComponent;
  let fixture: ComponentFixture<UnTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
