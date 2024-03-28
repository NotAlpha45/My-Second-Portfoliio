"use client"

import React from 'react'
import { Carousel } from 'rsuite'
import CarouselCard from '../carousel_card/carousel_card'
import "./domain_carousel.css"

export default function DomainCarousel() {
  return (
    <>
      <Carousel autoplay autoplayInterval={5000} shape='bar' className="custom-slider">
        <CarouselCard />
        <CarouselCard />
      </Carousel>
    </>
  )
}
