"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service/ProductService";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [clients, setClients] = useState([]);
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
    ProductService.getClientsHome().then((data) =>
      setClients(data.slice(0, 6))
    );
  }, []);

  const clientsTemplate = (client) => {
    return (
      <div className="mx-3">
        <div className="relative  h-[200px]">
          <Image
            src={`/clients/${client.image}`}
            alt={client.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={clients}
        numVisible={6}
        numScroll={3}
        responsiveOptions={responsiveOptions}
        itemTemplate={clientsTemplate}
        showIndicators={false}
        showNavigators={false}
      />
    </div>
  );
}
