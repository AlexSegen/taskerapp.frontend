import React from 'react'

const Logo = ({className}) => {
    return ( 
        <img className={`"w-8 ${className}`} src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
     );
}
 
export default Logo;