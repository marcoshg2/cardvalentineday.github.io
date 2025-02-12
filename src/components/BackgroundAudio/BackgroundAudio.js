import React from 'react';
import audioFile from '../../audio/perfecta.mp3';

function BackgroundAudio() {
  return (
    <audio autoPlay loop>
      <source src={audioFile} type="audio/mpeg" />
      Tu navegador no soporta el elemento de audio.
    </audio>
  );
}

export default BackgroundAudio;