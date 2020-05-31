import { Entity } from '../models/entity';

export let ENTITIES: Entity[] = [
    { src: 'capitol.glb', transforms: [], static: true, mirror: { x: true, y: true } },
    { src: 'pedistal.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'shaft.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    {
        src: 'column-court.glb', transform: {
            rotation: { x: 0, y: Math.PI / 180 * (-40.5), z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            speed: { x: 0, y: 0, z: 0 }
        }, transforms: [], static: true, mirror: { x: false, y: false }
    },
    { src: 'chamber.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'road.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'stairs.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'portal-pillar.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'roof.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'architrave.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    { src: 'hall-ceiling.glb', transforms: [], static: true, mirror: { x: false, y: false } },
    {
        src: 'propylon-walls.glb', transforms: [{
            rotation: { x: 0, y: Math.PI / 180 * (-40.5), z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            speed: { x: 0, y: 0, z: 0 }
        }], static: true, mirror: { x: false, y: false }
    },
    {
        src: 'propylon-court-walls.glb', transforms: [{
            rotation: { x: 0, y: Math.PI / 180 * (-40.5), z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            speed: { x: 0, y: 0, z: 0 }
        }], static: true, mirror: { x: false, y: false }
    },
    {
        src: 'propylon-court-floor.glb', transforms: [{
            rotation: { x: 0, y: Math.PI / 180 * (-40.5), z: 0 },
            position: { x: -18.7705, z: 52.6765, y: -5.02641 },
            speed: { x: 0, y: 0, z: 0 }
        }], static: true, mirror: { x: false, y: false }
    },
    // { src: 'navmesh.glb', transforms: [], static: true, mirror: { x: false, y: false } },

];