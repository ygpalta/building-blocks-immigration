import React, { ReactElement } from 'react'
import Link from 'next/link'

function Footer(): ReactElement {
    return (
        <footer className="relative bg-red-700 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-red-700 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white ">
                Let&apos;s keep in touch!
              </h4>
              <h5 className="text-lg mt-0 text-white">
                Address Line 1
              </h5>
              <h5 className="text-lg mt-0 text-white">
                Address Line 2
              </h5>
              <h5 className="text-lg mt-0 mb-1 text-white">
                Address Line 3
              </h5>
              <h5 className="text-lg mt-0 text-white">
                info@buildingblocksimmigration.com
              </h5>
              <h5 className="text-lg mt-0 text-white">
                +1 987654321
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter"></i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square"></i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-instagram"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-linkedin"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/about">
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >About Us
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Blog
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/assesment">
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Free Assesment
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/book-consultation" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Book A Consultation
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Contact Us
                        </a>
                      </Link>
                    </li>

                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Services
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link href="/migrate-canada">
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Migrate
                      </a>
                    </Link>
                    </li>
                    <li>
                      <Link href="/study-in-canada" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Study
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/work-in-canada" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Work
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/business-in canada" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Business
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/visit-canada" >
                        <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        >Visit
                        </a>
                      </Link>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-8/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}Building Blocks Immigration- All Rights Reserved || Site Developed by{" "}
                <Link href="https://www.linkedin.com/in/ygpalta/" >
                  <a className="text-white hover:text-gray-900">
                  Y.G. Palta
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
