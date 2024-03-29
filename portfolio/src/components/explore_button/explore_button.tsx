"use client"

import React from 'react'
import "./explore-button.css"
import { CustomButtonProps } from '../../../core/types/component_types'

export default function ExploreButton(props: CustomButtonProps) {
    return (
        <>
            <button className="explore-button fs-4 rounded-pill" onClick={props.callback}>
                Explore Me!
            </button>
        </>
    )
}
