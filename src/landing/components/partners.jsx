import React from 'react';

const Partners = () => {
    return ( 
    <div className="py-12 lg:pb-16 bg-white mb-12 lg:mb-16  ">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid grid-cols-2 sm:grid-cols-3 space-y-5 sm:space-y-3 xl:grid-cols-6 col-gap-6 opacity-75">
          <img className="h-12 p-1 self-end justify-self-center" src="./images/boxify-logo.svg" alt=""/>
          <img className="h-10 p-1 self-end justify-self-center" src="./images/edge-logo.svg" alt=""/>
          <img className="h-10 p-1 self-end justify-self-center" src="./images/sbalbew-logo.svg" alt=""/>
          <img className="h-10 p-1 self-end justify-self-center" src="./images/drops-logo.svg" alt=""/>
          <img className="h-12 p-1 self-end justify-self-center" src="./images/pathway-logo.svg" alt=""/>
          <img className="h-10 p-1 self-end justify-self-center" src="./images/feedback-logo.svg" alt=""/>
        </div>
    </div>
     );
}
 
export default Partners;