import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
export default function FotterContainer () {
  return (
        <div className="footer_container">
            <p className="copy_Text">Copyright © Tomasz Wójcik</p>
            <div className="media"> <a href="https://www.facebook.com/" className="media_button"><FacebookIcon /></a> <a href="https://www.instagram.com/" className="media_button"><InstagramIcon /></a> <a href="https://www.linkedin.com/" className="media_button"><LinkedInIcon /></a>  </div>
        </div>
  )
}
