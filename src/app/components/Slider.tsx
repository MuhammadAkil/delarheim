
"use client";
import React, { useEffect, useState } from 'react';

// Define types for player and item
interface Player {
  title: string;
  desc: string;
  image: string;
}

interface Item {
  player: Player;
}

const slideWidth = 30;

const itemsData: Item[] = [
  {
    player: {
      title: 'Efren Reyes',
      desc: 'Known as "The Magician", Efren Reyes is well regarded by many professionals as the greatest all around player of all time.',
      image: 'https://i.postimg.cc/RhYnBf5m/er-slider.jpg',
    },
  },
  {
    player: {
      title: "Ronnie O'Sullivan",
      desc: "Ronald Antonio O'Sullivan is a six-time world champion and is the most successful player in the history of snooker.",
      image: 'https://i.postimg.cc/qBGQNc37/ro-slider.jpg',
    },
  },
  {
    player: {
      title: 'Shane Van Boening',
      desc: 'The "South Dakota Kid" is hearing-impaired and uses a hearing aid, but it has not limited his ability.',
      image: 'https://i.postimg.cc/cHdMJQKG/svb-slider.jpg',
    },
  },
  {
    player: {
      title: 'Mike Sigel',
      desc: 'Mike Sigel or "Captain Hook" as many like to call him is an American professional pool player with over 108 tournament wins.',
      image: 'https://i.postimg.cc/C12h7nZn/ms-1.jpg',
    },
  },
  {
    player: {
      title: 'Willie Mosconi',
      desc: 'Nicknamed "Mr. Pocket Billiards," Willie Mosconi was among the first Billiard Congress of America Hall of Fame inductees.',
      image: 'https://i.postimg.cc/NfzMDVHP/willie-mosconi-slider.jpg',
    },
  },
];

const length = itemsData.length;
itemsData.push(...itemsData);

// Helper function to simulate delay
const sleep = (ms: number = 0) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// Create item with styles based on position
const createItem = (position: number, idx: number) => {
  const item = {
    styles: {
      transform: `translateX(${position * slideWidth}rem)`,
    } as React.CSSProperties,  // Explicitly typing the styles object
    player: itemsData[idx].player,
  };

  switch (position) {
    case length - 1:
    case length + 1:
      item.styles = { ...item.styles, filter: 'grayscale(1)' };
      break;
    case length:
      break;
    default:
      item.styles = { ...item.styles, opacity: 0 };
      break;
  }

  return item;
};


// Define types for CarouselSlideItem props
interface CarouselSlideItemProps {
  pos: number;
  idx: number;
  activeIdx: number;
}

const CarouselSlideItem: React.FC<CarouselSlideItemProps> = ({ pos, idx }) => {
  const item = createItem(pos, idx);

  return (
    <li className="carousel__slide-item" style={item.styles}>
      <div className="carousel__slide-item-img-link">
        <img src={item.player.image} alt={item.player.title} />
      </div>
      <div className="carousel-slide-item__body">
        <h4>{item.player.title}</h4>
        <p>{item.player.desc}</p>
      </div>
    </li>
  );
};

const keys = Array.from(Array(itemsData.length).keys());

const Carousel: React.FC = () => {
  const [items, setItems] = useState<number[]>(keys);
  const [isTicking, setIsTicking] = useState<boolean>(false);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const bigLength = items.length;

  const prevClick = (jump: number = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) => prev.map((_, i) => prev[(i + jump) % bigLength]));
    }
  };

  const nextClick = (jump: number = 1) => {
    if (!isTicking) {
      setIsTicking(true);
      setItems((prev) =>
        prev.map((_, i) => prev[(i - jump + bigLength) % bigLength])
      );
    }
  };

  const handleDotClick = (idx: number) => {
    if (idx < activeIdx) prevClick(activeIdx - idx);
    if (idx > activeIdx) nextClick(idx - activeIdx);
  };

  useEffect(() => {
    if (isTicking) sleep(300).then(() => setIsTicking(false));
  }, [isTicking]);

  useEffect(() => {
    setActiveIdx((length - (items[0] % length)) % length); // prettier-ignore
  }, [items]);

  return (
    <div className="carousel__wrap">
      <div className="carousel__inner">
        <button
          className="carousel__btn carousel__btn--prev"
          onClick={() => prevClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--left" />
        </button>
        <div className="carousel__container">
          <ul className="carousel__slide-list">
            {items.map((pos, i) => (
              <CarouselSlideItem key={i} idx={i} pos={pos} activeIdx={activeIdx} />
            ))}
          </ul>
        </div>
        <button
          className="carousel__btn carousel__btn--next"
          onClick={() => nextClick()}
        >
          <i className="carousel__btn-arrow carousel__btn-arrow--right" />
        </button>
        <div className="carousel__dots">
          {items.slice(0, length).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={i === activeIdx ? 'dot active' : 'dot'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
