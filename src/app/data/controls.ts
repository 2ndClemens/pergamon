import { ControlState } from '../models/control-state';

export let CONTROLS: ControlState = {
    forward: false,
    backwards: false,
    left: false,
    right: false,
    mouseIsDown: false,
    mouseX: 0,
    mouseY: 0
};