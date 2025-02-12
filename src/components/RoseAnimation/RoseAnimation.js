import React, { useState, useEffect } from 'react';
import { useSpring, useSprings, animated } from 'react-spring';
import '../RoseAnimation/RoseAnimation.css';  

function RoseAnimation() {
  // Detecta si es móvil (ancho <= 600px)
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animación de rotación para el SVG completo
  const svgAnimation = useSpring({
    from: { rotate: 0 },
    to: { rotate: 360 },
    config: { duration: 10000 },
    loop: { reverse: false },
  });

  const petalsCount = 12;
  // Animación para cada pétalo
  const petals = useSprings(
    petalsCount,
    [...Array(petalsCount)].map((_, i) => ({
      from: { scale: 1 },
      to: { scale: 1.05 },
      delay: i * 100,
      config: { duration: 2000 },
      loop: { reverse: true },
    }))
  );

  // Define los gradientes basado en el modo móvil o escritorio
  const petalGradientStops = isMobile ? (
    <>
      <stop offset="0%" stopColor="#ffec8b" />
      <stop offset="100%" stopColor="#ffa500" />
    </>
  ) : (
    <>
      <stop offset="0%" stopColor="#ffcccc" />
      <stop offset="100%" stopColor="#ffe6e6" />
    </>
  );

  return (
    <div className="rose-animation">
      <animated.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        style={{
          transform: svgAnimation.rotate.to(r => `rotate(${r}deg)`),
        }}
      >
        <defs>
          {/* Gradiente para los pétalos */}
          <radialGradient id="petalGrad" cx="50%" cy="50%" r="50%">
            {petalGradientStops}
          </radialGradient>
          {/* Gradiente para el centro */}
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b4513" />
            <stop offset="100%" stopColor="#654321" />
          </radialGradient>
        </defs>
        {petals.map((props, i) => (
          <animated.g key={i} transform={`rotate(${i * (360 / petalsCount)} 100 100)`}>
            <animated.ellipse
              cx="100"
              cy="40"
              rx="10"
              ry="30"
              fill="url(#petalGrad)"
              style={{
                transform: props.scale.to(s => `scale(${s})`),
              }}
            />
          </animated.g>
        ))}
        <circle cx="100" cy="100" r="30" fill="url(#centerGrad)" />
      </animated.svg>
    </div>
  );
}

export default RoseAnimation;