import Image from "next/image";
import profle from "@/public/profile.png";
import Link from "next/link";

import Blog from "./_components/Blogs";
import Clients from "./_components/Clients";
import Testimonial from "./_components/Testimonial";
import ContactForm from "./_components/ContactForm";
import Portfolio from "./_components/Portfolio";

import { Button } from "primereact/button";

import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CodeBracketSquareIcon,
  NewspaperIcon,
  PencilSquareIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <>
      <div className="pt-32 bg-gradient-to-bl from-[#EADFF8] via-[#fff] to-[#E5F8F7] ">
        <div className="container mx-auto mb-32">
          <div className="flex flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-3/5 grid content-between">
              <div className="lg:mb-32">
                <h1 className="text-gray-900 font-semibold text-7xl">
                  Hello, I&apos;m Khurram Shafeeq
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  I&apos;m a Freelance UI/UX Designer and Developer based in
                  London, England. I strives to build immersive and beautiful
                  web applications through carefully crafted code and
                  user-centric design.
                </div>
                <Link
                  href="#"
                  className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                >
                  Say Hello!
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-2">
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80]">
                  <div className="font-semibold text-2xl">15 Y.</div>
                  <div className="">Experience</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80]">
                  <div className="font-semibold text-2xl">250+</div>
                  <div className="">Project Completed</div>
                </div>
                <div className="flex justify-center flex-col items-center gap-y-2 p-6 bg-[#edd8ff80]">
                  <div className="font-semibold text-2xl">58</div>
                  <div className="">Happy Client</div>
                </div>
              </div>
            </div>
            <div className="lg:w-2/5 bg-white rounded-2xl flex justify-center items-center">
              <div className="relative aspect-square">
                <Image src={profle} alt="profile" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto bg-white rounded-2xl shadow-[0_36px_105px_0_rgba(43,56,76,0.10)] relative -mb-16">
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32 p-10 lg:p-28">
            <div className="lg:w-2/5 flex justify-center items-center bg-[#F0F1F3]">
              <div className="relative aspect-square flex flex-col justify-center max-h-[460px]">
                <Image
                  src={profle}
                  alt="profile"
                  className="object-contain h-full w-auto"
                />
                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-9 flex gap-1 bg-white w-auto mx-auto  p-3 rounded shadow-[0_12px_64px_0_rgba(28,25,25,0.12)]">
                  <Link
                    href="#"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                  >
                    <i className="pi pi-facebook group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-instagram group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                  <Link
                    href="#"
                    className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                  >
                    <i className="pi pi-pinterest group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-3/5 grid">
              <div>
                <h1 className="text-gray-900 font-semibold text-4xl">
                  I am Professional User Experience Designer
                </h1>
                <div className="text-lg text-gray-600 my-6">
                  <p className="mb-3">
                    I design and develop services for customers specializing
                    creating stylish, modern websites, web services and online
                    stores. My passion is to design digital user experiences.
                  </p>
                  <p>
                    I design and develop services for customers specializing
                    creating stylish, modern websites, web services.
                  </p>
                </div>
                <div className="inline-flex items-center gap-x-6">
                  <Link
                    href="/projects"
                    className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
                  >
                    My Projects
                  </Link>
                  <Link
                    href="/projects"
                    className="p-button p-button-outlined text-primary-500 font-bold no-underline"
                  >
                    <ArrowDownTrayIcon className="size-6 text-primary-500 mr-3" />
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 pb-36 pt-52">
        <div className="container mx-auto">
          <div className="flex items-center flex-col lg:flex-row lg:gap-x-32">
            <div className="lg:w-1/2">
              <div className="">
                <h2 className="text-gray-900 font-semibold text-5xl mb-6">
                  Work Process
                </h2>
                <div className="text-gray-500 text-lg">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non, laoreet imperdiet
                    orci. Mauris ultrices eget lorem ac vestibulum. Suspendis
                    imperdiet,
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla purus arcu, varius eget velit non.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-6 -mt-6">
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <NewspaperIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      1. Research
                    </div>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <CodeBracketSquareIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      2. Analyze
                    </div>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="flex flex-col gap-6">
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <PencilSquareIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      3. Design
                    </div>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                  <div className="bg-white p-8 rounded-xl group hover:shadow-[32px_32px_124px_0_rgba(43,56,76,0.10)]">
                    <div className="w-16 h-16 p-5 rounded-md bg-[#edd8ff80] group-hover:bg-primary-500 mb-8">
                      <PresentationChartLineIcon className="size-6 text-primary-500 group-hover:text-white" />
                    </div>
                    <div className="text-xl font-semibold text-gray-900 mb-3">
                      4. Launch
                    </div>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nulla purus arcu.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24 bg-gradient-to-bl from-[#EADFF8] via-[#fff] to-[#E5F8F7]">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-5xl mb-6 text-center">
            Portfolio
          </h2>
          <div className="text-gray-400 text-center text-lg w-1/2 mx-auto">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris
              ultrices eget lorem ac vestibulum. Suspendis imperdiet,
            </p>
          </div>
          <Portfolio />
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              More Projects
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-white font-semibold text-5xl mb-6 text-center w-1/2 mx-auto">
            Do you have Project Idia? Let&apos;s discuss your project!
          </h2>
          <div className="text-gray-300 text-center text-lg w-1/2 mx-auto">
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline"
            >
              <span className="inline-block mr-3"> Let’s work Together</span>
              <ArrowRightIcon className="size-6 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-24 pb-16 bg-gradient-to-bl from-[#E5F8F7] via-[#fff] to-[#EADFF8]">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-5xl mb-6 text-center">
            Blogs
          </h2>
          <div className="text-gray-400 text-center text-lg w-1/2 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
          <div className="mt-16">
            <Blog />
          </div>
        </div>
      </div>
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-950 text-5xl font-semibold">
                What I do?
              </h3>
              <div className="text-gray-400 text-lg mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non, laoreet imperdiet orci.
                Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </div>
              <div className="text-gray-400 text-lg mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                purus arcu, varius eget velit non.
              </div>

              <Link
                href="#"
                className="p-button bg-primary-500 hover:bg-primary-600 border-primary-500 hover:border-primary-600 font-bold no-underline mt-12"
              >
                Say Hello
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>User Experience (UX)</h3>
                <div className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>User Experience (UX)</h3>
                <div className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </div>
              </div>
              <div className="bg-white rounded-md border-0 border-white hover:border-primary-500 hover:shadow-[0_32px_96px_0_rgba(28,25,25,0.16)] border-l-4 border-solid p-8">
                <h3>User Experience (UX)</h3>
                <div className="text-gray-700 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  purus arcu, varius eget velit non, laoreet imperdiet orci.
                  Mauris ultrices eget lorem ac vestibulum.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-5xl mb-6 text-center">
            Happy Clients
          </h2>
          <div className="text-gray-400 text-center text-lg w-1/2 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
          <div>
            <Clients />
          </div>
        </div>
      </div>
      <div className="py-24">
        <div className="container mx-auto">
          <h2 className="text-gray-900 font-semibold text-5xl mb-6 text-center">
            Testimonial
          </h2>
          <div className="text-gray-400 text-center text-lg w-1/2 mx-auto">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </div>
          <div className="mt-16">
            <Testimonial />
          </div>
        </div>
      </div>
      <div className="pt-24">
        <div className="container mx-auto p-20 bg-white rounded-2xl shadow-[0_59px_124px_0_rgba(0,0,0,0.12)] relative -mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-32 items-center">
            <div>
              <h3 className="text-gray-900 text-4xl font-semibold">
                Let’s discuss your Project
              </h3>
              <div className="text-gray-400 text-lg mt-4">
                There are many variations of passages of Lorem Ipsu available.
                but the majority have suffered alte.
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-map-marker group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Address:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      New Mexico 31134
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-at group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">My Email:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      mymail@mail.com
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 group hover:bg-white rounded-lg hover:border-primary-500 hover:shadow-[0_12px_64px_0_rgba(28,25,25,0.12)] p-6 lg:w-4/5">
                  <div className="flex justify-center items-center p-3 rounded group-hover:bg-primary-500 bg-[rgba(237,216,255,0.50)]">
                    <i className="pi pi-phone group-hover:text-white text-primary-500 text-2xl leading-none"></i>
                  </div>
                  <div>
                    <div className="text-gray-700 text-sm">Call Me Now:</div>
                    <div className="text-gray-900 font-medium mt-1">
                      00-1234 00000
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-1 mt-8">
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500"
                >
                  <i className="pi pi-facebook group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-linkedin group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-instagram group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-twitter group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
                <Link
                  href="#"
                  className="flex justify-center items-center p-3 no-underline rounded group hover:bg-primary-500 "
                >
                  <i className="pi pi-pinterest group-hover:text-white text-primary-500  text-2xl leading-none"></i>
                </Link>
              </div>
            </div>
            <div>
              <div className="text-gray-400 text-lg">
                There are many variations of passages of Lorem Ipsu available,
                but the majority have suffered alte.
              </div>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
