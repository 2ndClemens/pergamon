import { ObjectTransform } from './object-transform';

export interface Entity {
  src: string;
  transforms: ObjectTransform[];
  static: boolean;
  mirror?: { x: boolean, y: boolean };
}
