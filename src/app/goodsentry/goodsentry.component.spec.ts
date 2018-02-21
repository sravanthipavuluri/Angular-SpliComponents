import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsentryComponent } from './goodsentry.component';

describe('GoodsentryComponent', () => {
  let component: GoodsentryComponent;
  let fixture: ComponentFixture<GoodsentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
