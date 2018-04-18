import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmodalsComponent } from './crmodals.component';

describe('CrmodalsComponent', () => {
  let component: CrmodalsComponent;
  let fixture: ComponentFixture<CrmodalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmodalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmodalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
