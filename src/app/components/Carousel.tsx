"use client";

import { useState } from "react";
import Pagination from "@/app/components/Pagination";

type CarouselProps = {
  children: React.ReactNode[];  // Array of React nodes
  elementsPerPage: number; // Limit of elements that will be renderer by carousel
}

export default function Carousel({ children, elementsPerPage }: CarouselProps) {

  const [actualPage, setActualPage] = useState<number>(1);
  const totalPages = Math.ceil(children.length / elementsPerPage);
  const elementsToRender = children.slice((actualPage - 1) * elementsPerPage, actualPage * elementsPerPage);

  return (
    <section className="flex flex-col gap-4 justify-center items-center py-4">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {elementsToRender}
      </div>
      <Pagination
        totalPages={totalPages}
        actualPage={actualPage}
        setActualPage={setActualPage}
      />
    </section>
  );
}