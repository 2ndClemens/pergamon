import { Injectable } from '@angular/core';
import { CONTROLS } from '../data/controls';

@Injectable({
  providedIn: 'root'
})
export class ControlStateService {

  constructor() { }


  public getControlState() {
    return CONTROLS;
  }
}
