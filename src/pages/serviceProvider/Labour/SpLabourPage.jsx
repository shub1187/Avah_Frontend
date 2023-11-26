import SpAddLabourDialog from 'components/spComponents/Dialog/Labour/AddLabour'
import { spLabourColumns } from 'components/spComponents/Table/Columns/Labours/SpLabourColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React from 'react'

const SpLabourPage = () => {
  return (
    <div>
        <ServiceProvidertable
            title={'ADD LABOUR'}
            buttonName={'ADD LABOUR'}
            DialogButton={SpAddLabourDialog}
            columnss={spLabourColumns}
            key={'Add LAbour'}
        />
    </div>
  )
}

export default SpLabourPage