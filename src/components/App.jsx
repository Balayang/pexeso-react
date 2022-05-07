import React from 'react';

import '../styles/normalize.css';
import '../styles/global.css';

export const App = () => {
  const [cards, setCards] = React.useState();
  const [randomState, setRandomState] = React.useState();

  React.useEffect(() => {
    // vytvor pole s kartickami pouze jednou pri startu aplikace
    // toto je extremne dulezite! ze se musi vytvorit pouze jednou a smitec
    setCards(
      [...Array(8)].map((_, index) => ({
        id: `mario-${index}`,
        src: `/images/mario${index}.png`,
        isFliped: true,
        isDisabled: true,
        isPaired: true,
      }))
    );
  }, []);

  return (
    <div className='container'>
      {/* dokud neni pole s kartami definovano, zobraz napis loading, jinak iteruj */}
      {cards ? (
        cards.map((card) => (
          <img
            key={card.id}
            className='testImg'
            width={100}
            height={100}
            src={card.src}
            alt='Memory Game Card'
          />
        ))
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
