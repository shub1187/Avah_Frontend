import CustomMaterialTable from 'components/common/Table/MaterialTable'
import SpCreateSpareDialog from 'pages/serviceProvider/Spares/Components/SpAddSparesDialog'
import { SpcreateSparesColumn } from 'pages/serviceProvider/Spares/Components/SpSparesColumn'
import URL from 'url/apiURL'

const {getAllSpares} = URL.SERVICE_PROVIDER.SPARES

const SpSparesPage = () => {
  return (
    <div>
      <CustomMaterialTable 
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