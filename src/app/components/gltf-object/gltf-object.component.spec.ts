import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GltfObjectComponent } from './gltf-object.component';

describe('GltfObjectComponent', () => {
  let component: GltfObjectComponent;
  let fixture: ComponentFixture<GltfObjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GltfObjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GltfObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
