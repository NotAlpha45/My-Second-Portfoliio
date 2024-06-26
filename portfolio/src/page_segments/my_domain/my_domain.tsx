"use client"

import React from 'react'
import "./my_domain.css"
import CarouselCard from '@/components/carousel_card/carousel_card'

export default function MyDomain() {
    return (
        <div id="my-domain-container" className="container-fluid pb-5 d-flex flex-column justify-content-center">
            <div className='row d-flex'>
                <div className='col-md-12 d-flex justify-content-center mt-5'>
                    <span className='domain-title text-white display-4'>My</span>
                    <span id='domain-writing' className='domain-title text-white display-4 px-3'>Domain</span>
                </div>
            </div>

            <div className='domain-card-row row d-flex justify-content-evenly mt-5 row-gap-4'>
                <div className='col-md-3 d-flex justify-content-center'>
                    <CarouselCard
                        cardHeader='Web Development'
                        cardImgUrl='/images/web-development.jpg'
                        cardBody='I have worked on a variety of projects ranging from small static websites to large scale web applications.'
                        statsPanelData={{
                            noOfProjects: '10+',
                            noOfLanguages: '3',
                            noOfLibraries: '10+',
                            years: '3+'
                        }}
                    />
                </div>

                <div className='col-md-3 d-flex justify-content-center'>
                    <CarouselCard
                        cardHeader='UI/UX Design'
                        cardImgUrl='/images/ui-design.png'
                        cardBody='I have a keen interest in designing user interfaces and user experiences and have perfected
                        my understanding of design principles and tools over the years.'
                        statsPanelData={{
                            noOfProjects: '3',
                            years: '1+'
                        }}
                    />
                </div>

                <div className='col-md-3 d-flex justify-content-center'>
                    <CarouselCard
                        cardHeader='Data Science'
                        cardBody='I have worked on a variety of projects ranging from small data analysis tasks to large scale machine learning projects.'
                        cardImgUrl='/images/data-analysis.png'
                        statsPanelData={{
                            noOfProjects: '10+',
                            noOfLanguages: '3',
                            noOfLibraries: '7+',
                            years: '3+'
                        }}
                    />
                </div>
            </div>

        </div>
    )
}
