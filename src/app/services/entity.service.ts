import { Injectable } from '@angular/core';
import { ENTITIES } from '../data/entities';

@Injectable({
  providedIn: 'root',
})
export class EntityService {
  constructor() {}

  public getEntities() {
    return ENTITIES;
  }

  public createEntities() {
    const entities = this.getEntities();
    for (let n = 0; n < entities.length; n++) {
      switch (entities[n].src) {
        case 'capitol.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 9.65;
            const posZ = 2.645 * 4;
            const posY = 4.35 + 0.225;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: Math.PI, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * 2.645 },
              });
            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'hall-ceiling.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 9.65;
            const posZ = 2.645 * 4;
            const posY = 5.00371;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: i * Math.PI, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * (2.645 / 2) },
              });
            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'pedistal.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 9.65;
            const posZ = 2.645 * 4;
            const posY = 0.5 + 0.225;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: Math.PI, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * 2.645 },
              });
            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'shaft.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 9.65;
            const posZ = 2.645 * 4;
            const posY = 0.5 + 0.225;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * 2.645 },
              });
            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'chamber.glb':
          for (let i = 0; i < 1; i++) {
            const posX = -5.2;
            const posZ = 0;
            const posY = 0 + 0.225;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 20; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - 4.454 * k },
              });
            }

            for (let k = 0; k < 18; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: Math.PI, z: 0 },

                position: { x: 15.2, y: posY, z: posZ - 4.454 * k },
              });
            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'portal-pillar.glb':
          entities[n].transforms.push({
            rotation: { x: 0, y: -Math.PI / 4, z: 0 },

            position: { x: 2.582, y: -2.25, z: 15.6291 },
          });

          entities[n].transforms.push({
            rotation: { x: 0, y: (Math.PI / 4) * 3, z: 0 },

            position: { x: 5.6107, y: -2.25, z: 18.3544 },
          });

          // move out at least 5 units from center in current direction

          break;

        case 'column-court.glb':
          const posZ = -36.6416;
          const posY = 2.70996;
          const distance = 34.0016 - 36.6416;
          for (let i = 0; i < 2; i++) {
            const posX = -11.4742 + i * 11.4742 * 2;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 11; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * distance },
              });
            }
            // move out at least 5 units from center in current direction
          }
          for (let k = 1; k < 9; k++) {
            const distance = -11.4758 + 8.92584;
            const posX = -11.4742 - k * distance;
            const posZ = -36.6416;
            entities[n].transforms.push({
              rotation: { x: 0, y: 0, z: 0 },
              position: { x: posX, y: posY, z: posZ },
            });
          }
          break;

        case 'corinthian-capital.glb':
          for (let i = 0; i < 2; i++) {
            const posZ = -36.6416;
            const posY = 2.70996;
            const distance = 34.0016 - 36.6416;
            const posX = -11.4742 + i * 11.4742 * 2;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 11; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * distance },
              });
            }
            // move out at least 5 units from center in current direction
          }
          for (let k = 1; k < 9; k++) {
            const distance = -11.4758 + 8.92584;
            const posX = -11.4742 - k * distance;
            const posY = 2.70996;
            const posZ = -36.6416;
            entities[n].transforms.push({
              rotation: { x: 0, y: 0, z: 0 },
              position: { x: posX, y: posY, z: posZ },
            });
          }
          break;

        default:
          if (!entities[n].transforms || entities[n].transforms.length === 0) {
            entities[n].transforms.push({
              rotation: { x: 0, y: 0, z: 0 },

              position: { x: 0, y: 0, z: 0 },
            });
          }

          // move out at least 5 units from center in current direction

          break;
      }
    }
  }
}
