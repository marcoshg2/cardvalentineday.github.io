import React, { useState } from 'react';
import './BookCard.css';
import BackgroundAudio from '../BackgroundAudio/BackgroundAudio';
import cat03 from '../../assets/cat-yes.gif';

function BookCard() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
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
          {/* Una vez que se abre la carta se monta el reproductor de audio */}
          <BackgroundAudio />
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
              <img src={cat03} alt="San Valentin" className="cat img-fluid" />
            </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default BookCard;