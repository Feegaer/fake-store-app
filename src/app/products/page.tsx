"use client";

import { useState, useEffect } from "react";
import { Product } from "@/domain/entities/Product";
import { ProductRepository } from "@/infrastructure/repository/ProductRepository";

import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";
import SelectInput from "@/app/components/SelectInput";

export default function Products() {

  const productRepository = new ProductRepository(); // Access to API data objects
  const [loading, setLoading] = useState(true); // Loading state
  const [products, setProducts] = useState<Product[]>([]); // Products state
  const [ordererProducts, setOrdererProducts] = useState<Product[]>([]); // Array of objects that will show if the user filters the products

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const products = await productRepository.getAll(); // Fetch products from API
      setProducts(products);
      setOrdererProducts(products);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const sortProducts = (
    products: Product[],
    order: string
  ): Product[] => {
    const sortedProducts = [...products];

    switch (order) {
      case "Price: ASC":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "Price: DESC":
        return sortedProducts.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  const selectHandle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;

    if (order === "Default") {
      setOrdererProducts(products);
      return;
    }

    const sortedProducts = sortProducts(products, order);
    setOrdererProducts(sortedProducts);
  };

  const mappedProducts = ordererProducts.map((product) => (
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
        <>
          <header className="flex justify-center items-center pt-4">
            <h2 className="text-2xl font-bold">Products</h2>
          </header>
          <div className="flex pt-4">
            <SelectInput
              className="mx-auto border p-2 rounded-lg "
              options={["Default", "Price: ASC", "Price: DESC"]}
              onChange={e => selectHandle(e)}
            />
          </div>
          <Carousel
            children={mappedProducts}
            elementsPerPage={6}
          />
        </>
      )}
    </>
  );
}
