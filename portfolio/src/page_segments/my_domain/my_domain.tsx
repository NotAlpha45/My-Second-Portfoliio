"use client"

import React from 'react'
import "./my_domain.css"
import DomainCarousel from '@/components/domain_carousel/domain_carousel'
import CarouselCard from '@/components/carousel_card/carousel_card'

export default function MyDomain() {
    return (
        <div id="my-domain-container" className="container-fluid pb-5 h-auto">
            <div className='row d-flex'>
                <div className='col-md-12 d-flex justify-content-center mt-5'>
                    <span className='domain-title text-white display-4'>My</span>
                    <span id='domain-writing' className='domain-title text-white display-4 px-3'>Domain</span>
                </div>
            </div>

            <div className='row d-flex mt-5 gap-2 ps-5'>

                <div className="col-auto d-flex gap-5 z-3">

                    <CarouselCard cardHeader='Web Development' statsPanelData={
                        {
                            noOfProjects: "10+",
                            noOfLanguages: "5+",
                            noOfLibraries: "3+"
                        }
                    }
                    />



                    <CarouselCard cardHeader='UI/UX Design' statsPanelData={
                        {
                            noOfProjects: "5+",
                        }
                    } />



                    <CarouselCard cardHeader='Data Science' statsPanelData={
                        {
                            noOfProjects: "2+",
                            noOfLanguages: "2+",
                            noOfLibraries: "2+"
                        }
                    } />

                </div>
            </div>


        </div>
    )
}
