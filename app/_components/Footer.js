import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-light.svg";

export default function Page() {
  return (
    <footer className="bg-gray-800 pt-28 pb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <Link href="/">
            <span className="sr-only">Khurram Shafeeq</span>
            <Image src={logo} alt="Logo" quality={100} />
          </Link>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-12">
              <Link href="/" className="text-gray-50 no-underline">
                Home
              </Link>
              <Link href="/projects" className="text-gray-50 no-underline">
                About
              </Link>
              <Link href="/projects" className="text-gray-50 no-underline">
                Process
              </Link>
              <Link href="/projects" className="text-gray-50 no-underline">
                Portfolio
              </Link>
              <Link href="/projects" className="text-gray-50 no-underline">
                Blog
              </Link>
              <Link href="/projects" className="text-gray-50 no-underline">
                Services
              </Link>
              <Link href="/projects" className="text-gray-50 no-underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-white">Copyright © 2025 Picto.</div>
        </div>
      </div>
    </footer>
  );
}
