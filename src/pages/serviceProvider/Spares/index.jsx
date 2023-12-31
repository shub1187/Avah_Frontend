import SpCreateSpareDialog from 'pages/serviceProvider/Spares/Components/SpAddSparesDialog'
import { SpcreateSparesColumn } from 'pages/serviceProvider/Spares/Components/SpSparesColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import URL from 'url/apiURL'

const {getAllSpares} = URL.SERVICE_PROVIDER.SPARES

const SpSparesPage = () => {
  return (
    <div>
      <ServiceProvidertable 
          buttonName={'ADD SPARES'} 
          key={'spareKey'} 
          DialogButton={SpCreateSpareDialog} 
          columnss={SpcreateSparesColumn} 
          URL={getAllSpares}
          dialogButtonName={'ADD SPARE'}
          dialogTitle={'ADD SPARE'}
      />

      </div>
  )
}

export default SpSparesPage