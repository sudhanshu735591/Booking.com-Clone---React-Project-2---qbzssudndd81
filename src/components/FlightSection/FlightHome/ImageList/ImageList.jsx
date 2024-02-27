

import React, { useEffect, useState } from 'react';
// import { Asia,Africa, MiddleEast,SouthAmerica,Europe,Oceania,NorthAmerica } from '../../../constant/constantData'

import { Africa } from "../../Constant/Africa";
import { Asia } from "../../Constant/Asia";
import { Europe } from "../../Constant/Europe";
import { MiddleEast } from "../../Constant/MiddleEast";
import { NorthAmerica } from "../../Constant/NorthAmerica";
import { Oceania } from "../../Constant/Oceania";
import { SouthAmerica } from "../../Constant/SouthAmerica";

function ImageList(props) {
    const arr = [Asia,NorthAmerica,Europe,SouthAmerica,Africa,Oceania,MiddleEast];
    const index = props.areaType.split("_")[1];

  return (<div className='flex flex-wrap gap-10 gap-x-32 m-3 lg:justify-between'>
         {arr[index].map((i)=>{
            return (<div className='flex flex-row gap-2'>
                <img src={i.img} className='rounded w-16 h-16'/>
                <section className='flex flex-col justify-center items-start'>
                  <h2 className='font-semibold text-sm'>
                    {i.heading}
                  </h2>
                  <p className='text-xs'>
                  {i.paragraph}
                  </p>
                </section>
              </div>)
         })}
         </div>
    
  )
}

export default ImageList;