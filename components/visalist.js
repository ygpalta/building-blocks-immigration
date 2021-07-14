import React, { ReactElement, useState } from 'react'
import  PostCard from '../components/PostCard.js';

export default function Visalist({ visas }){
    return (
    <section className="relative py-20">
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
               className="text-white fill-current"
               points="2560 0 2560 100 0 100"
            ></polygon>
         </svg>
      </div>
      <div className="flex flex-row flex-wrap flex-initial">
     
          {visas.map(({ id, about, date, title }) => (
              <PostCard
              title={title}
              about={about}
              date={date}
              id={id}
              />
          ))
         }
      </div>

           
    </section>
    )
        }
