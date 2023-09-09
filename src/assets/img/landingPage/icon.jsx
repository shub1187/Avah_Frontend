import LandingPageLogoIcon from 'assets/img/landingPage/LandingPageLogo.png'
import LandingPageFirstImageIcon from 'assets/img/landingPage/LandingPageFirstImage.png'
import LandingPageServiceProviderImage from 'assets/img/landingPage/LandingPageSerivceProviderIcon.png'
import LandingPageTotaCustomersImage from 'assets/img/landingPage/LandingPageTotalCustomerIcon.png'
import LandingPageTotalVehicleImage from 'assets/img/landingPage/LandingPageTotalVehiclesIcon.png'
import LandingPageDealersImage from 'assets/img/landingPage/LandingPageDealersIcon.png'
import LandingPageCardsServiceImage from 'assets/img/landingPage/LandingPageCardsServiceIcon.png'
import LandingPageServiceProviderProfileImage from 'assets/img/landingPage/LandingPageServiceProviderProfileIcon.png'
import LandingPageSecondBigImage from 'assets/img/landingPage/LandingPageSecondBigImage.png'

const LandingPageLogo = ({ isSelected }) => (
    <img
      src={LandingPageLogoIcon}
      alt="notification"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

const LandingPageFirstImage = ({ isSelected }) => (
<img
    src={LandingPageFirstImageIcon}
    alt="notification"
    style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none',maxWidth:'100%' }}
/>
);

const LandingPageTotaCustomersIcon = ()=>(
<img
    src={LandingPageTotaCustomersImage}
    alt="notification"
    style={{ maxWidth:'100%' }}
/>
)

const LandingPageServiceProviderIcon = ()=>(
<img
    src={LandingPageServiceProviderImage}
    alt="notification"
    style={{maxWidth:'100%' }}
/>
)
const LandingPageTotalVehicleIcon = ()=>(
<img
    src={LandingPageTotalVehicleImage}
    alt="notification"
    style={{maxWidth:'100%' }}
/>
)
const LandingPageDealersIcon = ()=>(
<img
    src={LandingPageDealersImage}
    alt="notification"
    style={{ maxWidth:'100%' }}
/>
)

const LandingPageCardsServiceIcon = ()=>(
    <img
        src={LandingPageCardsServiceImage}
        alt="notification"
        style={{ maxWidth:'100%' }}
    />
    )

const LandingPageServiceProviderProfileIcon = ()=>(
    <img
        src={LandingPageServiceProviderProfileImage}
        alt="notification"
        style={{ maxWidth:'100%' }}
    />
    )

const LandingPageSecondBigIcon = ()=>(
    <img
        src={LandingPageSecondBigImage}
        alt="notification"
        style={{maxWidth:'100%' }}
    />
    )
  export {
     LandingPageLogo, LandingPageFirstImage,
     LandingPageTotaCustomersIcon,LandingPageServiceProviderIcon,
     LandingPageTotalVehicleIcon, LandingPageDealersIcon,LandingPageCardsServiceIcon,
     LandingPageServiceProviderProfileIcon,LandingPageSecondBigIcon
    }