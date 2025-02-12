import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '..MessageCard/MessageCard.css';

function MessageCard() {
  const [open, setOpen] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);

  const handleClick = () => {
    // Si se cierra la carta, reiniciamos el estado del album
    if (open) setShowAlbum(false);
    setOpen(!open);
  };

  const toggleAlbum = (e) => {
    // Evitamos que el clic en el botón cierre la carta
    e.stopPropagation();
    setShowAlbum(!showAlbum);
  };

  return (
    <div className="message-card" onClick={handleClick}>
      <div className={`card ${open ? 'open' : ''}`}>
        {!open && (
          <div className="card-front">
            <h2>¡Abre tu carta!</h2>
          </div>
        )}
        {open && (
          <div className="card-back">
            {!showAlbum && (
              <>
                <p>¡Feliz Día de San Valentín! Espero que tengas un día maravilloso.</p>
                <button className="album-btn" onClick={toggleAlbum}>
                  Ver álbum de imágenes
                </button>
              </>
            )}
            {showAlbum && (
              <div className="album-container">
                <Carousel autoPlay infiniteLoop showThumbs={false}>
                  <div>
                    <img src="https://i.pinimg.com/736x/14/bc/b5/14bcb5bf35a6bb6861c7155bb387de8f.jpg" alt="Imagen 1" />
                  </div>
                  <div>
                    <img src="https://i.pinimg.com/736x/a4/57/1f/a4571f8fba975a32cef762b70789cd8b.jpg" alt="Imagen 2" />
                  </div>
                  <div>
                    <img src="https://i.pinimg.com/736x/6c/dc/80/6cdc800fd3030df2f3f8caa1723d2982.jpg" alt="Imagen 3" />
                  </div>
                </Carousel>
                <button className="album-btn" onClick={toggleAlbum}>
                  Ocultar álbum
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MessageCard;