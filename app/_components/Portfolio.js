import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const portfolioData = [
    {
      id: 1,
      imageUrl: "/blog-1.png",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "projects",
    },
    {
      id: 2,
      imageUrl: "/blog-1.png",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "projects",
    },
    {
      id: 3,
      imageUrl: "/blog-1.png",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "projects",
    },
    {
      id: 4,
      imageUrl: "/blog-1.png",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "projects",
    },
    {
      id: 5,
      imageUrl: "/blog-1.png",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "projects",
    },
    {
      id: 6,
      imageUrl: "/blog-1.png",
      category: "UI-UX DESIGN",
      title: "Product Admin Dashboard",
      description:
        "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
      link: "projects",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16">
        {portfolioData.map((portfolio) => (
          <div
            key={portfolio.id}
            className="bg-white rounded-md border border-solid border-gray-100 shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]"
          >
            <div className="relative h-[248px]">
              <Image
                src={portfolio.imageUrl}
                layout="fill"
                objectFit="cover"
                alt="blog"
              />
            </div>
            <div className="p-8">
              <div className="text-gray-400 text-xs font-medium">
                {portfolio.category}
              </div>
              <div className="text-gray-900 text-lg font-semibold mb-1">
                {portfolio.title}
              </div>
              <div className="text-gray-600 text-sm mt-3">
                {portfolio.description}
              </div>

              <Link
                href={`/${portfolio.link}`}
                className="p-button p-button-outlined mt-5 text-primary-500 font-bold no-underline"
              >
                Case Study
                <ArrowRightIcon className="size-6 text-primary-500 ml-3" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
