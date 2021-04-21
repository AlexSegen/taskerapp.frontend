import React from 'react'


const Card = ({children}) => {
    return ( 
        <div className="bg-white rounded shadow-sm ">
            {children}
        </div>
     );
}
 
export default Card;


Card.Header = ({children}) => {
    return (
        <div className="px-4 pt-4 font-semibold">
            {children}
        </div>
    )
}

Card.Body = ({children}) => {
    return (
        <div className="p-4 text-gray-500">
            {children}
        </div>
    )
}

Card.Footer = ({children}) => {
    return (
        <div className="px-4 pb-4 text-gray-500">
            {children}
        </div>
    )
}