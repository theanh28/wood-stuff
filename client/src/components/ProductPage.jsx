import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Row>
      <Col md={6}>
        <img src={product.image} alt={product.name} className="img-fluid" />
      </Col>
      <Col md={6}>
        <h2>{product.name}</h2>
        <p>Wood Type: {product.woodType}</p>
        <p>Price: ${product.price}</p>
        {/* Add more product details as needed */}
      </Col>
    </Row>
  );
};

export default ProductPage;
