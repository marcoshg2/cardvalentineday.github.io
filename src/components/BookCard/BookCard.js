import React, { useState } from 'react';
import './BookCard.css';
import BackgroundAudio from '../BackgroundAudio/BackgroundAudio';
import cat01 from '../../assets/cat-01.gif';
import cat02 from '../../assets/cat-02.gif';
import cat03 from '../../assets/cat-03.gif';
import cat04 from '../../assets/cat-04.gif';
import cat05 from '../../assets/cat-05.gif';
import cat06 from '../../assets/cat-06.gif';

function BookCard({ audioEnabled }) {
  const [open, setOpen] = useState(false);
  const images = [cat01, cat02, cat03, cat04, cat05, cat06];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleClick = () => {
    // Alterna entre cerrado y abierto
    setOpen(!open);
    // Si la carta se está abriendo, actualiza el índice para mostrar otra imagen
    if (!open) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  return (
    <div className="book-card" onClick={handleClick}>
      {!open && (
        <div className="book-cover">
          <h2>Haz clic</h2>
        </div>
      )}
      {open && (
        <>
          {/* Se reproduce el audio solo si audioEnabled es true */}
          {audioEnabled && <BackgroundAudio />}
          <div className="book-open">
            <div className="left-page">
              <p>
                Espero que tengas un día maravilloso lleno de amor y alegría.
                <br /><br />
                Que este mensaje ilumine tu día.
              </p>
            </div>
            <div className="right-page">
              <div className="animation">
                <img
                  src={images[currentImageIndex]}
                  alt="San Valentin"
                  className="cat img-fluid"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookCard;