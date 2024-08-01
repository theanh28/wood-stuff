import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductsPage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productTypes, setProductTypes] = useState([]);

  useEffect(() => {
    // Fetch featured products (with 'Featured' tag)
    axios.get('http://localhost:5000/api/products')
      .then(res => {
        setFeaturedProducts(res.data.filter(product => product.tags.includes('Featured')));
      })
      .catch(err => console.error(err));

    // Fetch product types
    axios.get('http://localhost:5000/api/product-types')
      .then(res => setProductTypes(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {/* Featured Products Carousel */}
      <Swiper slidesPerView={1} spaceBetween={30} autoplay={{ delay: 10000 }}>
        {featuredProducts.map(product => (
          <SwiperSlide key={product.id}>
            <img src={product.image} alt={product.name} />
            <button>{product.name}</button> {/* Link to ProductPage */}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Grids */}
      {productTypes.map(type => (
        <div key={type.id}>
          <h2>{type.name}</h2>
          {/* Grid of 6 products of this type */}
          <button>... more</button> {/* Link to ProductTypePage */}
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
