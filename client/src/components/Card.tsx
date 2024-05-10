import React from "react";
import cardStyles from "../Card.module.scss";

interface ICardProps {
  title: string;
  src: string;
}

const Card: React.FC<ICardProps> = ({ title, src }) => {
  return (
    <div className={cardStyles.root}>
      <div className={cardStyles.card_img}>
        <img src={src} alt="" />
        <div className={cardStyles.card_description}>
          <h3>{title}</h3>
          <div>
            <button>Купить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
