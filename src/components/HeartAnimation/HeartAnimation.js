import React from 'react';
import { useSprings, animated } from 'react-spring';
import '..HeartAnimation/HeartAnimation.css';

function HeartAnimation() {
  // Por ejemplo, animamos la letra "h"
  const phrase = " ".split("");

  const springs = useSprings(
    phrase.length,
    phrase.map((_, index) => ({
      loop: { reverse: true },
      from: { transform: 'scale(1)' },
      to: { transform: 'scale(1.2)' },
      delay: index * 200,
      config: { duration: 1000 },
    }))
  );

  return (
    <div className="heart-animation">
      {springs.map((props, i) => (
        <animated.div key={i} style={props} className="heart-container">
          <svg className="heart-svg" viewBox="0 0 32 29.6">
            <path
              fill="red"
              d="M16 29.6
                 c-0.8 0-1.5-0.4-2-1.1C6.6 20.5 0 14.5 0 7.8
                 C0 3.4 3.4 0 7.8 0
                 c2.5 0 4.8 1.3 6.2 3.2
                 C15.4 1.3 17.7 0 20.2 0
                 c4.4 0 7.8 3.4 7.8 7.8
                 c0 6.7-6.6 12.7-14 20.7
                 C17.5 29.2 16.8 29.6 16 29.6z"
            />
          </svg>
          <div className="heart-letter">{phrase[i]}</div>
        </animated.div>
      ))}
    </div>
  );
}

export default HeartAnimation;