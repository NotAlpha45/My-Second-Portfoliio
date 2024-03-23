"use client"

import GithubIcon from "../icons/github_icon"
import GmailIcon from "../icons/gmail_icon"
import LinkedinIcon from "../icons/linkedin_icon"
import "./social_side_column.css"

/**
 * 
 * @returns The social side column component. Note that this component is already a bootstrap column.
 */
export default function SocialSideColumn() {
  return (
    <>
      <div className="col-md-2 d-flex flex-column align-items-center justify-content-end mt-5">

        <a id="github-url" href="https://github.com/NotAlpha45" className="social-icon rounded-circle p-1 mt-4">
          <GithubIcon width="50" height="50" />
        </a>
        <p id="github-label" className="p-2 bg-white text-black fs-8 w-auto rounded-pill" >Go to Github</p>

        <a href="" id="linkedin-url" className="social-icon rounded-circle p-1 mt-4">
          <LinkedinIcon width="50" height="50" />
        </a>
        <p id="linkedin-label" className="p-2 bg-white text-black fs-8 w-auto rounded-pill" >Go to LinkedIn</p>

        <a href="" id="gmail-url" className="social-icon rounded-circle p-1 mt-4">
          <GmailIcon width="50" height="50" />
        </a>
        <p id="gmail-label" className="p-2 bg-white text-black fs-8 w-auto rounded-pill" >Go to Gmail</p>
      </div>
    </>
  )
}
