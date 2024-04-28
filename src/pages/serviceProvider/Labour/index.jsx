import CustomMaterialTable from 'components/common/Table/MaterialTable'
import SpAddLabourDialog from 'pages/serviceProvider/Labour/Components/AddLabour'
import { spLabourColumns } from 'pages/serviceProvider/Labour/Components/SpLabourColumn'
import React from 'react'
import URL from 'url/apiURL'

const {getAllLabour} = URL.SERVICE_PROVIDER.LABOURS

const SpLabourPage = () => {
  return (
    <div>
        <CustomMaterialTable
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