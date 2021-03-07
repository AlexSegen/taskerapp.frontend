import React from 'react'


const Card = ({children}) => {
    return ( 
        <div className="card">
            {children}
        </div>
     );
}
 
export default Card;


Card.Header = ({children}) => {
    return (
        <div className="card-header">
            {children}
        </div>
    )
}

Card.Body = ({children}) => {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}

Card.Footer = ({children}) => {
    return (
        <div className="card-footer">
            {children}
        </div>
    )
}