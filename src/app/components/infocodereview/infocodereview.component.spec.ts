import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocodereviewComponent } from './infocodereview.component';

describe('InfocodereviewComponent', () => {
  let component: InfocodereviewComponent;
  let fixture: ComponentFixture<InfocodereviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocodereviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocodereviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
