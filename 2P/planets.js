const Planetas = {
    mercury: {
      diameter: 3100,
      distanceFromSun: 36,
      timeToOrbit: '88 días',
      timeToRotate: '59 días'
    },
    venus: {
      diameter: 7700,
      distanceFromSun: 67,
      timeToOrbit: '225 días',
      timeToRotate: '244 días'
    },
    earth: {
      diameter: 7920,
      distanceFromSun: 93,
      timeToOrbit: '365 días',
      timeToRotate: '24 hrs'
    },
    mars: {
      diameter: 4200,
      distanceFromSun: 141,
      timeToOrbit: '687 días',
      timeToRotate: '24 hrs y 24 mins'
    },
    jupiter: {
      diameter: 88640,
      distanceFromSun: 483,
      timeToOrbit: '11.9 años',
      timeToRotate: '9hrs y 50 mins'
    },
    saturn: {
      diameter: 74500,
      distanceFromSun: 886,
      timeToOrbit: '29.5 años',
      timeToRotate: '10 hrs y 39 mins'
    },
    uranus: {
      diameter: 32000,
      distanceFromSun: 1782,
      timeToOrbit: '84 años',
      timeToRotate: '23 hrs'
    },
    neptune: {
      diameter: 31000,
      distanceFromSun: 2793,
      timeToOrbit: '165 días',
      timeToRotate: '15 hrs y 48 mins'
    },
    pluto: {
      diameter: 1500,
      distanceFromSun: 3670,
      timeToOrbit: '248 años',
      timeToRotate: '6 días y 7 hrs'
    },
    distanceTwoPlanets (planetA, planetB){
      return Math.abs(planetA.distanceFromSun - planetB.distanceFromSun)
    } 
  }
  
  console.log(${Planetas.distanceTwoPlanets(Planetas.earth, Planetas.saturn).toFixed(2)} millones de millas)