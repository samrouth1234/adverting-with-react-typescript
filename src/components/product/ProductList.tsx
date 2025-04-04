// components/ProductList.tsx
import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

import ProductService from "../../api/product/ProductService";
import { IProductData } from "../../types/types";
import CardProduct from "./CardProduct";

const ProductList = () => {
  const [products, setProducts] = useState<IProductData[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await ProductService.getAll();
        setProducts(data);
      } catch (error) {
        setError("Failed to load products");
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id: number) => {
    await ProductService.removeProductById(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <main className="mt-3">
      {error && <div className="alert alert-danger mt-3">{error}</div>}
      <button
        type="button"
        className="btn btn-secondary py-2 px-3"
        onClick={handleShow}
      >
        New Product
      </button>

      <div className="row">
        {products.map((product) => (
          <div className="col-3" key={product.id}>
            <CardProduct product={product} onDelete={handleDelete} />
          </div>
        ))}
      </div>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formProductTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product title"
                name="title"
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product price"
                name="price"
              />
            </Form.Group>
            <Form.Group controlId="formProductCategoryId">
              <Form.Label>categoryId</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter product category ID"
                name="categoryId"
              />
            </Form.Group>
            <Form.Group controlId="formProductDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter product description"
                name="description"
              />
            </Form.Group>
            <Form.Group controlId="formProductImages">
              <Form.Label>Images</Form.Label>
              <Form.Control
                type="file"
                placeholder="Enter product image URL"
                name="images"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default ProductList;
