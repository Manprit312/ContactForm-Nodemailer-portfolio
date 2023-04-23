import ParticleBackground from 'react-particle-backgrounds'

const settings = {
    canvas: {
      canvasFillSpace: true,
      width: 1000,
      height: 1000,
      useBouncyWalls: true
      
    },
    particle: {
      particleCount: 420,
      color: '#fff',
      minSize: 4,
      maxSize: 6    },
    velocity: {
      directionAngle: 0,
      directionAngleVariance: 360,
      minSpeed: 3,
    
    },
    
    opacity: {
      minOpacity: 0,
      maxOpacity: 0.5,
      opacityTransitionTime: 2000
    }
  }
const ParticleContainer=()=>{return    <ParticleBackground settings={settings} />}
export default ParticleContainer