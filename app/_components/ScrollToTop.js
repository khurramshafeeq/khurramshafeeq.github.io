"use client";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";

import { Button } from "primereact/button";

export default function Page() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showButton && (
        <Button
          icon="pi pi-arrow-up"
          aria-label="Filter"
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600"
        />
      )}
    </>
  );
}
