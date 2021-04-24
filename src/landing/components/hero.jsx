import React from 'react'


const Hero = () => {
    return ( 
    <div className="py-12 md:py-24 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 grid md:grid-cols-4 xl:grid-cols-5 gap-x-12 lg:gap-x-20">
          <div className="order-2 md:order-1 col-span-2 self-center mt-12 md:mt-0">
            <h1 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 lg:mb-8">The best way to track your tasks</h1>
            <p className="text-lg xl:text-xl text-gray-600 mb-6 lg:mb-8 xl:mb-10">For writers, a random sentence can help them get their creative juices flowing. Since the topic.</p>
            <div className="flex space-x-4 mb-6">
              <input type="text" placeholder="enter your email..." className="flex-1 py-4 px-4 border border-gray-200 rounded-lg leading-none focus:outline-none"/>
              <button className="focus:outline-none inline-block bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 font-semibold rounded-lg py-2 px-5  text-white ">Get started</button>
            </div>
            <p className="text-gray-500 text-sm">No credit card required. Cancel anytime.</p>
          </div>
          <div className="order-1 md:order-2 col-span-2 xl:col-span-3">
            <img src="/landing/images/capture.png" className="rounded-lg shadow-2xl" alt=""/>
          </div>
        </div>
      </div>
     );
}
 
export default Hero;