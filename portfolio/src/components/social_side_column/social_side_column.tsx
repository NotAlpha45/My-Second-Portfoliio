"use client"

import GithubIcon from "../icons/github_icon"
import GmailIcon from "../icons/gmail_icon"
import LinkedinIcon from "../icons/linkedin_icon"
import SocialSnippets from "../social-snippets/social-snippets"
import "./social_side_column.css"

/**
 * 
 * @returns The social side column component. Note that this component is already a bootstrap column.
 */
export default function SocialSideColumn() {
  return (
    <>
      <div className="col d-flex flex-column align-items-center justify-content-end mt-5">

        <SocialSnippets snippetElement={<GithubIcon width="50" height="50" />} snippetText="Go to Github" />
        <SocialSnippets snippetElement={<LinkedinIcon width="50" height="50" />} snippetText="Go to LinkedIn" />
        <SocialSnippets snippetElement={<GmailIcon width="50" height="50" />} snippetText="Go to Gmail" />
      </div>
    </>
  )
}
