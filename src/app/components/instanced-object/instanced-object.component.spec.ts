import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstancedObjectComponent } from './instanced-object.component';

describe('InstancedObjectComponent', () => {
  let component: InstancedObjectComponent;
  let fixture: ComponentFixture<InstancedObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstancedObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstancedObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
