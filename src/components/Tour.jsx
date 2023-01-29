import { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, name, image, info, price } = tour;
  const [read, setRead] = useState(false);

  const handleRead = () => {
    if (read) {
      setRead(false);
      return;
    }
    setRead(true);
  };

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">$ {price}</h4>
        </div>
        <p>
          {read ? info : `${info.substring(0, 200)}...`}
          <button onClick={handleRead}>
            {read ? "show less" : "show more"}{" "}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Delete
        </button>
      </footer>
    </article>
  );
};

export default Tour;
