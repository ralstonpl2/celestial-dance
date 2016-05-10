import { randColor } from './Helpers';
import { ORBITAL_SPEED } from './Constants';
import { makeDancer, makeRandDancer, makeOrbitalDancer } from './MakeDancers';

// Random orbitals
const sun = makeDancer(10000, [0, 0, -50], [0, 0, 0],
  "color: #FFC823; distance: 5000; intensity: 2; type: point",
  "color: #FFC823; shader: flat; metalness: 0.8"
);

const dancerData = [
  sun,
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
  makeOrbitalDancer(sun, 'x', 1),
  makeOrbitalDancer(sun, 'y', 1),
  makeOrbitalDancer(sun, 'z', 1),
  makeOrbitalDancer(sun, 'x', -1),
  makeOrbitalDancer(sun, 'y', -1),
  makeOrbitalDancer(sun, 'z', -1),
];



module.exports = dancerData;
