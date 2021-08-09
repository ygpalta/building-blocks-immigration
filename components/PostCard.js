import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';


export default function PostCard ({title, about, date, id}){
return (
    <div className="w-full md:w-4/12 lg:w-3/12 px-5 place-content-stretch">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-gray-300 self-stretch item-stretch place-content-stretch">
          <img
            alt="..."
            src={`/images/${id}.jpg`}
            className="w-full align-middle rounded-t-lg"
          />
          <blockquote className="relative p-8 mb-4">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 583 95"
              className="absolute left-0 w-full block"
              style={{
                height: "95px",
                top: "-94px"
              }}
            >
              <polygon
                points="-30,95 583,95 583,65"
                className="text-gray-300 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl mb-2 font-semibold leading-normal">
              {title}
              </h4>
            <p className="text-md font-light leading-relaxed mt-4 mb-4 text-gray-800">
            {about}
              </p>
              <b className=""><a href={`/visas/${id}`} >Know More.. </a> </b>
          </blockquote>
        </div>
      </div>
)
}
