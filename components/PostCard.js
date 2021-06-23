import Link from 'next/link'
import Image from 'next/Image'
import React, { ReactElement, useState } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';


export default function PostCard (){
return (
    <div className="w-full md:w-4/12 lg:w-3/12 px-5">
        <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-red-700">
          <Image
            alt="..."
            src="/images/pic.jpg"
            className="w-full align-middle rounded-t-lg object-cover"
            width="auto" height="auto" layout="responsive"
            
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
                className="text-red-700 fill-current"
              ></polygon>
            </svg>
            <h4 className="text-xl font-bold text-white">
              Visa Type
              </h4>
            <p className="text-md font-light mt-2 text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
              </p>
              <b> Read More.. </b>
          </blockquote>
        </div>
      </div>
)
}