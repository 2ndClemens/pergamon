import { Component, OnInit, HostListener } from '@angular/core';
import { ControlState } from 'src/app/models/control-state';
import { ControlStateService } from 'src/app/services/control-state.service';

@Component({
  selector: 'pgm-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  controlState: ControlState

  @HostListener('document:keydown', ['$event'])
  onKeyDown(ev: KeyboardEvent) {
    console.log(`The user just pressed ${ev.key}!`);
    switch (ev.key) {
      case 'w':
        this.controlState.forward = true;
        break;
      case 's':
        this.controlState.backwards = true;
        break;
      case 'a':
        this.controlState.left = true;
        break;
      case 'd':
        this.controlState.right = true;
        break;
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(ev: KeyboardEvent) {
    console.log(`The user just released ${ev.key}!`);
    switch (ev.key) {
      case 'w':
        this.controlState.forward = false;
        break;
      case 's':
        this.controlState.backwards = false;
        break;
      case 'a':
        this.controlState.left = false;
        break;
      case 'd':
        this.controlState.right = false;
        break;
    }
  }


  constructor(public controlStateService: ControlStateService) { }

  ngOnInit(): void {
    this.controlState = this.controlStateService.getControlState();
  }

}
