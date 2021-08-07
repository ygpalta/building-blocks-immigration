import React, { ReactElement } from 'react'


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
              
              <h4 className="text-3xl font-semibold text-white mt-2 ">
                Let&apos;s keep in touch!
              </h4>
              <div className="text-white px-4 py-2">
                <h5 className="fas fa-map-marker-alt text-lg mt-0 text-white">
                &nbsp;&nbsp;405 The West Mall
                </h5>
                <h5 className="text-lg mt-0 font-semibold">
                &emsp;&nbsp;Unit 910
                </h5>
                <h5 className="text-lg mt-0 font-semibold">
                &emsp;&nbsp;Toronto, ON
                </h5>
                <h5 className="text-lg mt-0 mb-1 font-semibold">
                &emsp;&nbsp;Canada
                </h5>

                <h5 className="fas fa-envelope text-lg mt-0">
                &nbsp;&nbsp;buildingblocksimmigration@gmail.com
                </h5><br/>

                <h5 className="fas fa-phone text-lg mt-0">
                &nbsp;&nbsp;+1 4166199215
                </h5>
              </div>

              <div className="mt-6">
                
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                ><a href="https://www.facebook.com/buildingblocksimmigration/">
                  <i className="flex fab fa-facebook-square"></i>
                 </a>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                ><a href="https://www.instagram.com/building_blocks_immigration/">
                    <i className="flex fab fa-instagram"></i>
                  </a>
                </button>
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4 mt-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/about">About Us
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/blog">Blog
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://casecloud.ca/form/formshare?formId=6c9bda54-6459-4e25-b321-26368a535c0f&siteId=CCP20211497">Free Assessment
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/contact">Book A Consultation
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/contact">Contact Us
                      </a>
                    </li>

                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Services
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/migrate-canada">Migrate
                    </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/visas/study-permit-post-graduate-work-permit">Study
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/visas/work-permit-lmia">Work
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/visas/self-employed">Business
                      </a>
                    </li>
                    <li>
                      <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="/visas/visitor-visa">Visit
                      </a>
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
                <a
                  href="https://www.linkedin.com/in/ygpalta/"
                  className="text-white hover:text-gray-900"
                >
                  Y.G. Palta
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer
