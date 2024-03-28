"use client"

import React from 'react'
import "./my_domain.css"
import DomainCarousel from '@/components/domain_carousel/domain_carousel'

export default function MyDomain() {
    return (
        <div id="my-domain-container" className="container-fluid pb-5 h-auto">
            <div className='row d-flex'>
                <div className='col-md-12 d-flex justify-content-center mt-5'>
                    <span className='domain-title text-white display-4'>My</span>
                    <span id='domain-writing' className='domain-title text-white display-4 px-3'>Domain</span>
                </div>
            </div>

            <div className='row d-flex justify-content-center mt-5'>
                <div className="col-md-6">
                    <DomainCarousel />
                </div>
            </div>
        </div>
    )
}
