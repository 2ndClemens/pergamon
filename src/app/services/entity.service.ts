import { Injectable } from '@angular/core';
import { ENTITIES } from '../data/entities'


@Injectable({
  providedIn: 'root'
})
export class EntityService {

  constructor() { }

  public getEntities() {
    return ENTITIES;
  }

  public createEntities() {
    const entities = this.getEntities();
    for (let n = 0; n < entities.length; n++) {
      switch (entities[n].src) {

        case 'capitol.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 10;
            const posZ = 0;
            const posY = 4.35;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: Math.PI, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * 2.645 },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'pedistal.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 10;
            const posZ = 0;
            const posY = .5;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: Math.PI, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * 2.645 },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'shaft.glb':
          for (let i = 0; i < 2; i++) {
            const posX = i * 10;
            const posZ = 0;
            const posY = .5;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 100; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - k * 2.645 },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

        case 'chamber.glb':
          for (let i = 0; i < 1; i++) {
            const posX = -4;
            const posZ = 0;
            const posY = 1;
            // const rotY = Math.random() * Math.PI;

            for (let k = 0; k < 19; k++) {
              entities[n].transforms.push({
                rotation: { x: 0, y: 0, z: 0 },

                position: { x: posX, y: posY, z: posZ - 4.454 * k },
                speed: { x: 0, y: 0, z: 0 },
              });



            }
            // move out at least 5 units from center in current direction
          }
          break;

          case 'road.glb':
            for (let i = 0; i < 1; i++) {
              const posX = 0;
              const posZ = 0;
              const posY = 0;
              // const rotY = Math.random() * Math.PI;
  
              for (let k = 0; k < 1; k++) {
                entities[n].transforms.push({
                  rotation: { x: 0, y: 0, z: 0 },
  
                  position: { x: posX, y: posY, z: posZ},
                  speed: { x: 0, y: 0, z: 0 },
                });
  
  
  
              }
              // move out at least 5 units from center in current direction
            }
            break;



        default:
          for (let i = 0; i < 600; i++) {
            const posX = Math.random() * 200 - 100;
            const posZ = Math.random() * 200 - 100;
            let speedX = 0;
            let speedZ = 0;
            if (Math.random() > 0.5) {
              speedX = Math.random() * 3 - 1.5;
            } else {
              speedZ = Math.random() * 3 - 1.5;
            }
            const rotY = (Math.round(Math.random() * 4 - 2) * Math.PI) / 2;
            entities[n].transforms.push({
              rotation: { x: 0, y: rotY, z: 0 },
              position: { x: posX, y: 0, z: posZ },
              speed: { x: speedX, y: 0, z: speedZ },
            });
            // move out at least 5 units from center in current direction
          }
      }
    }
  }

}
