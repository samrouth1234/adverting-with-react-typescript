import { IProductData } from "../../types/types";
import Card from "react-bootstrap/Card";

interface CardProductProps {
  product: IProductData;
  onDelete: (id: number) => void;
}

const CardProduct: React.FC<CardProductProps> = ({ product, onDelete }) => {
  return (
    <div>
      <Card style={{ marginTop: "20px" }}>
        <Card.Img variant="top" src={product.images} alt={product.title} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description.slice(0, 70)}</Card.Text>
          <Card.Title className="my-2">
            Price:<span style={{ color: "red" }}> $ {product.price}</span>
          </Card.Title>
          <button type="button" className="btn btn-outline-primary">
            View
          </button>
          <button
            type="button"
            className="btn btn-outline-danger mx-2"
            onClick={() => onDelete(product.id)}
          >
            Delete
          </button>
          <button type="button" className="btn btn-outline-dark">
            Update
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProduct;
