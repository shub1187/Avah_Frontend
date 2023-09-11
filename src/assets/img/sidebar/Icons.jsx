import HomeIconImage from './home.svg'
import UserIconImage from './user.png'
import SparesIconImage from './spares.png'
import LabourIconImage from './labour.png'
import ServiceTypeIconImage from './serviceType.png'
import ServiceIconImage from './service.png'
import BillingIconImage from './billing.png'
import AccountsIconImage from './accounts.png'
import PackageIconImage from './package.png'
import ReviewsIconImage from './reviews.png'
import SettingsIconImage from './settings.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
// const HomeIcon = ()=><img src={HomeIconImage} alt="home" />
// const UserIcon = ()=><img src={UserIconImage} alt="home" />
const HomeIcon = ({ isSelected }) => (
    <img
      src={HomeIconImage}
      alt="home"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );
  
  const UserIcon = ({ isSelected }) => (
    <img
      src={UserIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const SparesIcon = ({ isSelected }) => (
    <img
      src={SparesIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const LaboursIcon = ({ isSelected }) => (
    <img
      src={LabourIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );
  const ServiceTypeIcon = ({ isSelected }) => (
    <img
      src={ServiceTypeIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const ServiceIcon = ({ isSelected }) => (
    <img
      src={ServiceIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const BillingsIcon = ({ isSelected }) => (
    <img
      src={BillingIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const AccountsIcon = ({ isSelected }) => (
    <img
      src={AccountsIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const PackageIcon = ({ isSelected }) => (
    <img
      src={PackageIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const ReviewsIcon = ({ isSelected }) => (
    <img
      src={ReviewsIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const SettingsIcon = ({ isSelected }) => (
    <img
      src={SettingsIconImage}
      alt="user"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const DashBoardIcons = ({isSelected}) =>(
    <DashboardIcon color={isSelected ? 'whiteBackground':'options'}/>
  )
export {
    HomeIcon,
    UserIcon,
    SparesIcon,
    LaboursIcon,
    ServiceTypeIcon,
    ServiceIcon,
    BillingsIcon,
    AccountsIcon,
    PackageIcon,
    ReviewsIcon,
    SettingsIcon,
    DashBoardIcons
}
