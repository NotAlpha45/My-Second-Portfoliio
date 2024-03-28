import React from 'react'
import { Panel } from 'rsuite'
import "./carousel_card.css"
import { CarouselCardProps } from '../../../core/types/component_types'



export default function CarouselCard(props: CarouselCardProps) {
    return (
        <>
            <div className='carousel-card-container d-flex flex-row'>

                <Panel className='outer-panel' shaded bordered bodyFill >
                    <img className='panel-img' src="https://via.placeholder.com/240x240" />
                    <Panel className='inner-panel'>
                        <h1 className='panel-header'>
                            {props?.cardHeader}
                        </h1>
                        <small className='panel-body'>
                            {props?.cardBody}
                        </small>
                    </Panel>
                </Panel>

                <Panel className='stats-panel' shaded bordered bodyFill >
                    <div className='panel-body'>
                        <div className='d-flex flex-column gap-4'>
                            <div className='stats-segment d-flex flex-column justify-content-center align-items-center gap-1'>
                                <span className='stats-value'>{props?.statsPanelData?.noOfProjects}</span>
                                <span className='stats-label'>Projects</span>
                            </div>
                            {
                                props?.statsPanelData?.noOfLanguages ? (
                                    <div className='stats-segment d-flex flex-column align-items-center gap-1'>
                                        <span className='stats-value'>{props?.statsPanelData?.noOfLanguages}</span>
                                        <span className='stats-label'>Languages</span>
                                    </div>
                                ) : null
                            }

                            {
                                props?.statsPanelData?.noOfLibraries ? (
                                    <div className='stats-segment d-flex flex-column align-items-center gap-1'>
                                        <span className='stats-value'>{props?.statsPanelData?.noOfLibraries}</span>
                                        <span className='stats-label'>Libraries</span>
                                    </div>
                                ) : null
                            }

                        </div>
                    </div>
                </Panel>
            </div>
        </>
    )
}
