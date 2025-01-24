"use client";
import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../service/ProductService";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  const [testimonial, setTestimonial] = useState([]);
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

  useEffect(() => {
    ProductService.getTestimonials().then((data) =>
      setTestimonial(data.slice(0, 6))
    );
  }, []);

  const testimonialTemplate = (testimonial) => {
    return (
      <div className="w-3/5 mx-auto text-center">
        <div className="text-gray-800 text-lg font-medium">
          {testimonial.text}
        </div>
        <div className="text-black text-lg font-medium mt-6">
          {testimonial.userName}
        </div>
        <div className="text-black font-light mt-2 mb-8">
          {testimonial.userPost}, {testimonial.userCompany}
        </div>
      </div>
    );
  };

  return (
    <div className="card">
      <Carousel
        value={testimonial}
        numVisible={1}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        itemTemplate={testimonialTemplate}
        showNavigators={false}
      />
    </div>
  );
}
