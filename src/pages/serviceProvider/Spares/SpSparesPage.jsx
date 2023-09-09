import { createSparesColumn } from 'components/spComponents/Table/Columns/Spares/CreateSparesColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React from 'react'
import SpareAddDialog from 'serviceprovider/page/dashboard/spares/SpareAddDialog'

const SpSparesPage = () => {
  return (
    <div><ServiceProvidertable DialogButton={SpareAddDialog} columnss={createSparesColumn}/></div>
  )
}

export default SpSparesPage