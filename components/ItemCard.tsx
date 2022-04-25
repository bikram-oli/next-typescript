import { NextPage } from "next";

interface props {
  image: string;
  title: string;
  description: string;
}

const ItemCard: NextPage<props> = (props) => {
  return (
    <div className="itemcard card">
      <img src={props.image} className="card-img-top" alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text text-wrapper">
          {props.description}
        </p>
        <p className="card-text">
          <small className="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};
export default ItemCard;
