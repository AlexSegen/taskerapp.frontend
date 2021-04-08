import React from 'react'


const Spinner = ({loading, height}) => {
    return  loading ?  ( 
        <div className="flex items-center justify-center w-full" 
        style={{height: (height || "250") + "px"}}>
            
            <div className="half-circle-spinner">
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
            </div>

        </div> ) :( <></> );
}
 
export default Spinner;