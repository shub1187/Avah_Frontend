import SpCreateSpareDialog from 'components/spComponents/Dialog/Spares/SpAddSparesDialog'
import { SpcreateSparesColumn } from 'components/spComponents/Table/Columns/Spares/SpSparesColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'

const SpSparesPage = () => {
  return (
    <div><ServiceProvidertable title={'ADD SPARES'} buttonName={'ADD SPARES'} key={'spareKey'} DialogButton={SpCreateSpareDialog} columnss={SpcreateSparesColumn} URL={'http://localhost:3008/api/serviceprovider/getAllPendingAppointment'}/></div>
  )
}

export default SpSparesPage