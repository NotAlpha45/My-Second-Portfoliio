"use client"

import React from 'react'
import { SocialSnippetProps } from '../../../core/types/component_types'
import "./social-snippets.css"


export default function SocialSnippets(props: SocialSnippetProps) {
    return (
        <>
            <div className='d-flex flex-row justify-content-center'>

                <a href={props?.snippetUrl} target="_blank" id="linkedin-url" className="social-icon rounded-circle p-2 mt-4">
                    {props.snippetElement}
                </a>
                <p className="social-icon-label p-2 bg-white text-black fs-8 w-auto rounded-pill" >
                    {props.snippetText}
                </p>
            </div>
        </>
    )
}
