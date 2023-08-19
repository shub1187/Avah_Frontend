import EditIcon from './EditIcon.png'
import ChangePasswordIcon from './ChangeTablePasswordIcon.png'
import ChangeStatusIcon from './changeStatus.png'
import ViewIcon from './ViewIcon.png'
const EditTableIcon = ({ isSelected }) => (
    <img
      src={EditIcon}
      alt="home"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const ChangePasswordTableIcon = ({ isSelected }) => (
    <img
      src={ChangePasswordIcon}
      alt="home"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const ChangeStatusTableIcon = ({ isSelected }) => (
    <img
      src={ChangeStatusIcon}
      alt="home"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );

  const ViewTableIcon = ({ isSelected }) => (
    <img
      src={ViewIcon}
      alt="home"
      style={{ filter: isSelected ? 'brightness(0) invert(1)' : 'none' }}
    />
  );
  export {
    EditTableIcon,
    ChangePasswordTableIcon,
    ChangeStatusTableIcon,
    ViewTableIcon
  }