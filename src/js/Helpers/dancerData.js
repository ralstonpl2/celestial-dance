import { randColor } from './Helpers';
import { ORBITAL_SPEED } from './Constants';
import { makeDancer, makeRandDancer, makeOrbitalDancer } from './MakeDancers';


// Standard orbitals
// const dancerData = [
//   makeDancer(100000, [0, 2, -40], [0, 0, 0], '#FFF'),
//   makeDancer(1000, [20, 2, -40], [0, ORBITAL_SPEED, 0], randColor()),
//   makeDancer(1000, [0, 22, -40], [0, 0, ORBITAL_SPEED], randColor()),
//   makeDancer(1000, [-20, 2, -40], [0, -ORBITAL_SPEED, 0], randColor()),
//   makeDancer(1000, [0, -22, -40], [0, 0, -ORBITAL_SPEED], randColor()),
// ];

// Random orbitals
const sun = makeDancer(10000, [0, -50, 0], [0, 0, 0], '#FDB813');
const earth = makeOrbitalDancer(sun);
const moon = makeOrbitalDancer(earth);
const dancerData = [
  sun,
  // earth,
  // moon,
  makeOrbitalDancer(sun),
  makeOrbitalDancer(sun),
  makeOrbitalDancer(sun),
  makeOrbitalDancer(sun, -1),
  makeOrbitalDancer(sun, -1),
  makeOrbitalDancer(sun, -1),
  // makeOrbitalDancer(sun),
  // makeOrbitalDancer(sun),
  // makeOrbitalDancer(sun),
];



module.exports = dancerData;
