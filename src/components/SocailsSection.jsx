import React from 'react'
import FacebookIcon from '../assets/shared/desktop/icon-facebook.svg'
import InstagramIcon from '../assets/shared/desktop/icon-instagram.svg'
import TwitterIcon from '../assets/shared/desktop/icon-twitter.svg'

const SocailsSection = () => {
  return (
    <div className='flex flex-row gap-8 h-full'>
        <img src={FacebookIcon} alt='facebookicon'/>
        <img src={TwitterIcon} alt='twitterIcon'/>
        <img src={InstagramIcon} alt='instagramIcon'/>
    </div>
  )
}

export default SocailsSection
