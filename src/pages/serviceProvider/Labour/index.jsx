import SpAddLabourDialog from 'pages/serviceProvider/Labour/Components/AddLabour'
import { spLabourColumns } from 'pages/serviceProvider/Labour/Components/SpLabourColumn'
import ServiceProvidertable from 'components/spComponents/Table/ServiceProviderTable'
import React from 'react'
import URL from 'url/apiURL'

const {getAllLabour} = URL.SERVICE_PROVIDER.LABOURS

const SpLabourPage = () => {
  return (
    <div>
        <ServiceProvidertable
            title={'ADD LABOUR'}
            buttonName={'ADD LABOUR'}
            DialogButton={SpAddLabourDialog}
            columnss={spLabourColumns}
            key={'Add LAbour'}
            URL={getAllLabour}
            dialogButtonName={'ADD LABOUR'}
            dialogTitle={'ADD LABOUR'}
        />
    </div>
  )
}



export default SpLabourPage