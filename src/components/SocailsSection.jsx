import { ReactComponent as FacebookIcon } from '../assets/shared/desktop/icon-facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/shared/desktop/icon-instagram.svg'; // Import as ReactComponent
import { ReactComponent as TwitterIcon } from '../assets/shared/desktop/icon-twitter.svg';   // Import as ReactComponent

const SocailsSection = () => {
  const iconClasses = "cursor-pointer fill-white hover:fill-primary_orange transition-colors duration-300";

  return (
    <div className='flex flex-row gap-8 h-full items-center'>
       <FacebookIcon className={iconClasses} />
       <TwitterIcon className={iconClasses} />
       <InstagramIcon className={iconClasses} />
    </div>
  )
}

export default SocailsSection
