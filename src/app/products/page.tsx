"use client";

import Card from "@/app/components/Card";
import { useState, useEffect } from "react";
import { Product } from "@/domain/entities/Product";
import { ProductRepository } from "@/infrastructure/repository/ProductRepository";

export default function Products() {

  const productRepository = new ProductRepository();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await productRepository.getAll();
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
        <div className="flex flex-wrap gap-4">
          {mappedProducts}
        </div>
      )}
    </>
  );
}
