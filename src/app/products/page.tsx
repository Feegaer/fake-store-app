"use client";

import { useState, useEffect } from "react";
import { Product } from "@/domain/entities/Product";
import { ProductRepository } from "@/infrastructure/repository/ProductRepository";

import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";

export default function Products() {

  const productRepository = new ProductRepository(); // Access to API data objects
  const [loading, setLoading] = useState(true); // Loading state
  const [products, setProducts] = useState<Product[]>([]); // Products state

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await productRepository.getAll(); // Fetch products from API
      setProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const mappedProducts = products.map((product) => (
    <Card
      key={product.id}
      image={product.image}
      title={product.title}
      subtitle={product.category}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Carousel
          title="Products"
          children={mappedProducts}
          elementsPerPage={6}
        />
      )}
    </>
  );
}
