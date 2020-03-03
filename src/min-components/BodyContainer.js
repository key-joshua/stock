import React from 'react'
import FormContainer from './FormContainer';
import TableContainer from './TableContainer';
import TitleContainer from './TitleContainer';

const BodyContainer = (props) => {
    return (

        <div>
            <TitleContainer />
            <div className="containering">
                <TableContainer/>
                <FormContainer />
            </div>
        </div>
    )
}


export default BodyContainer;
