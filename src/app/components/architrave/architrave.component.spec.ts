import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitraveComponent } from './architrave.component';

describe('ArchitraveComponent', () => {
  let component: ArchitraveComponent;
  let fixture: ComponentFixture<ArchitraveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchitraveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitraveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
