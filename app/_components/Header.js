import Image from "next/image";
import logo from "@/public/logo-dark.svg";

import Navigation from "@/app/_components/Navigation";
import Link from "next/link";

export default function Page() {
  return (
    <header className="sticky top-0 z-50 bg-white py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="sr-only">Khurram Shafeeq</span>
            <Image src={logo} alt="Logo" quality={100} />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
