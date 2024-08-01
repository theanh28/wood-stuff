import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Card, Pagination } from 'react-bootstrap';

const ProductTypePage = () => {
  const { typeId } = useParams();
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Adjust as needed

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product-types/${typeId}`)
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, [typeId]);

  // Pagination logic (you'll need to implement this)
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      <Row>
        {currentProducts.map(product => (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  Wood Type: {product.woodType}<br />
                  {/* Add more product info as needed */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination (you'll need to implement this) */}
      <Pagination>
        {/* ... */}
      </Pagination>
    </div>
  );
};

export default ProductTypePage;
