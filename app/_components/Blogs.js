"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service/ProductService";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const getSeverity = (product) => {
    switch (product.inventoryStatus) {
      case "INSTOCK":
        return "success";

      case "LOWSTOCK":
        return "warning";

      case "OUTOFSTOCK":
        return "danger";

      default:
        return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div className="bg-white rounded-lg border border-solid border-gray-50 mx-3">
        <div className="relative w-full h-56">
          <Image
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-6">
          <div className="text-gray-400 text-sm">22 Oct, 2020</div>
          <Link
            href="#"
            className="text-gray-950 text-lg font-medium no-underline"
          >
            Lorem ipsum dolor sit consea. Nulla purus arcu
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={products}
        numVisible={3}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={productTemplate}
      />
    </div>
  );
}
