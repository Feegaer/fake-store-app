"use client";

import Button from "./Button"

type CardProps = {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
}

export default function Card({
  image,
  title,
  subtitle,
  description,
  price,
}: CardProps) {
  return (
    <div className="w-[280px] h-[475px] gap-4 flex flex-col p-4 rounded-xl border bg-foreground">
      <div className="rounded-md h-[175px] aspect-square p-3 bg-secondary">
        <img className="w-full h-full object-contain" src={image} alt="Product image" />
      </div>
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-2 flex-1">
          <h3 className="font-bold leading-tight line-clamp-2">
            {title}
          </h3>
          <p className="text-sm uppercase font-bold text-secondary">
            {subtitle}
          </p>
          <p className="text-sm line-clamp-4">
            {description}
          </p>
        </div>
        <div className="mt-2">
          <p className="font-bold text-xl mb-2">
            ${price}
          </p>
          <footer className="flex gap-3">
            <Button className="border border-primary text-primary hover:bg-primary hover:text-foreground">Add to cart</Button>
            <Button className="border border-primary bg-primary text-foreground hover:border-primary hover:bg-primary hover:opacity-90">Buy now</Button>
          </footer>
        </div>
      </div>
    </div>
  );
}