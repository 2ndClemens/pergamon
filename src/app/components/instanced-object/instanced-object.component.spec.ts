import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InstancedObjectComponent } from './instanced-object.component';

describe('InstancedObjectComponent', () => {
  let component: InstancedObjectComponent;
  let fixture: ComponentFixture<InstancedObjectComponent>;

  beforeEach(waitForAsync(() => {
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
