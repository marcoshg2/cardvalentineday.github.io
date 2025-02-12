import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../ValentineCard/ValentineCard.css';
import RoseAnimation from '../RoseAnimation/RoseAnimation';
import BookCard from '../BookCard/BookCard';

function ValentineCard() {
  const params = new URLSearchParams(window.location.search);
  const destinatario = params.get('to') || 'Amor';

  return (
    <div className="valentine-card">
      <div className="vc-container">
        <div className="vc-header">
        <h2>¡ Feliz Día de San Valentín !</h2>
        <h2>{destinatario}</h2>
        </div>
        {/* RoseAnimation en las cuatro esquinas */}
        <div className="rose-margins">
          <div className="rose-animation top-left">
            <RoseAnimation />
          </div>
          <div className="rose-animation top-right">
            <RoseAnimation />
          </div>
          <div className="rose-animation bottom-left">
            <RoseAnimation />
          </div>
          <div className="rose-animation bottom-right">
            <RoseAnimation />
          </div>
        </div>
        <div className="vc-content">
          <BookCard />
        </div>
      </div>
    </div>
  );
}

export default ValentineCard;