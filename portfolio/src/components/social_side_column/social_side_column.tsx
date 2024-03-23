"use client"

import GithubIcon from "../icons/github_icon"
import GmailIcon from "../icons/gmail_icon"
import LinkedinIcon from "../icons/linkedin_icon"

/**
 * 
 * @returns The social side column component. Note that this component is already a bootstrap column.
 */
export default function SocialSideColumn() {
  return (
    <>
      <div className="col-md-2 d-flex flex-column align-items-center justify-content-end my-5 gap-3">
        <a href="" className="social-icon rounded-circle p-1">
          <GithubIcon width="50" height="50" />
        </a>

        <a href="" className="social-icon rounded-circle p-1">
          <LinkedinIcon width="50" height="50" />
        </a>

        <a href="" className="social-icon rounded-circle p-1">
          <GmailIcon width="50" height="50" />
        </a>
      </div>
    </>
  )
}
