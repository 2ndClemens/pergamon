import { Component, OnInit, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { ControlState } from 'src/app/models/control-state';
import { ControlStateService } from 'src/app/services/control-state.service';

@Component({
  selector: 'pgm-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ControlsComponent implements OnInit {
  controlState: ControlState

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(ev: MouseEvent) {
    ev.preventDefault();
    // this.controlState.forward = true;
    this.controlState.mouseIsDown = true;
    this.controlState.mouseX = (ev.clientX / window.innerWidth - .5) * 2;
    this.controlState.mouseY = (ev.clientY / window.innerHeight - .5) * 2;
    // console.log(this.controlState.mouseX);
    // console.log(ev.clientX)
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(ev: MouseEvent) {
    ev.preventDefault();
    this.controlState.mouseX = (ev.clientX / window.innerWidth - .5) * 2;
    this.controlState.mouseY = (ev.clientY / window.innerHeight - .5) * 2;
    // console.log(this.controlState.mouseX);
  }

  @HostListener('document:mouseup', ['$event'])
  onMouseUp(ev: MouseEvent) {
    ev.preventDefault();
    this.controlState.mouseIsDown = false;
  }

  @HostListener('document:touchstart', ['$event'])
  onPointerDown(ev: TouchEvent) {
    // ev.preventDefault();
    this.controlState.mouseIsDown = true;
    this.controlState.mouseX = (ev.touches[0].clientX / window.innerWidth - .5) * 2;
    this.controlState.mouseY = (ev.touches[0].clientY / window.innerHeight - .5) * 2;
  }

  @HostListener('document:touchmove', ['$event'])
  onPointerMove(ev: TouchEvent) {
    // ev.preventDefault();
    // console.log(ev);
    this.controlState.mouseX = (ev.touches[0].clientX / window.innerWidth - .5) * 2;
    this.controlState.mouseY = (ev.touches[0].clientY / window.innerHeight - .5) * 2;
    // console.log(this.controlState.mouseX);
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(ev: TouchEvent) {
    // ev.preventDefault();
    this.controlState.mouseIsDown = false;
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    // console.log(`The user just pressed ${ev.key}!`);
    switch (ev.keyCode) {
      case 38: /*up*/
      case 87: /*W*/
        this.controlState.forward = true;
        break;
      case 40: /*down*/
      case 83: /*S*/
        this.controlState.backwards = true;
        break;
      case 37: /*left*/
      case 65: /*A*/
        this.controlState.left = true;
        break;
      case 39: /*right*/
      case 68: /*D*/
        this.controlState.right = true;
        break;
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    // console.log(`The user just released ${ev.key}!`);
    switch (ev.keyCode) {
      case 38: /*up*/
      case 87: /*W*/
        this.controlState.forward = false;
        break;
      case 40: /*down*/
      case 83: /*S*/
        this.controlState.backwards = false;
        break;
      case 37: /*left*/
      case 65: /*A*/
        this.controlState.left = false;
        break;
      case 39: /*right*/
      case 68: /*D*/
        this.controlState.right = false;
        break;
    }
  }


  constructor(public controlStateService: ControlStateService) { }

  ngOnInit(): void {
    this.controlState = this.controlStateService.getControlState();
  }

}
