// "use client";
import { clientReviews } from '@/Data/data';
import React from 'react';
import ReviewCard from './ReviewCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  



const Slider = () => {
  return (
    <Carousel>
        <CarouselContent>
            {clientReviews.map((review) => {
                return ( 
                <CarouselItem key={review.image} className="md:basis-1/2 lg:basis-1/3">
                    <ReviewCard review={review}/>
                </CarouselItem>
                )
            })} 
   
            
         </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel>

    
       
  )
}

export default Slider