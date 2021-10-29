import "./ListCard.scss";

const ListCard = ({ list }) => {
  return (
    <div className="list__card__container">
      <img className="card__thumbnail" src={list.img} />
      <div className="card__text__container">
        <p>{list.name}</p>
        <p>⭐️{list.rate}</p>
      </div>
    </div>
  );
};

export default ListCard;
