import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus
    .slice()
    .sort((evtA, evtB) => new Date(evtB.date) - new Date(evtA.date));
  
  const nextCard = () => {
    setIndex((prevIndex) =>
      prevIndex < byDateDesc.length - 1 ? prevIndex + 1 : 0
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    return () => clearInterval(interval);
  }, [byDateDesc]); 

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <div
          key={`${event.title}-${event.date}`}
          className={`SlideCard SlideCard--${
            index === idx ? "display" : "hide"
          }`}
        >
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((radioEvent, radioIdx) => (
            <input
              key={`${radioEvent.title}-${radioEvent.date}`}
              type="radio"
              name="radio-button"
              checked={index === radioIdx}
              readOnly
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
