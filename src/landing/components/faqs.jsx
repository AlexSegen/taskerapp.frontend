import React from 'react';

const Faqs = () => {
    return ( 
    <div className="bg-gradient-to-b from-gray-50 to-white lg:mb-16 xl:mb-24 py-12 lg:pt-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 relative z-20">
          <div className="text-center mb-6 md:mb-8 lg:mb-12">
            <h2 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">FAQ</h2>
            <p className="text-lg xl:text-xl text-gray-600">Ask us anything about our product.</p>
          </div>
          <div className="mb-12 lg:mb-20">
            <ul className="divide-y divide-gray-300text-base md:text-lg">
            <li>
                <button className="py-3 lg:py-4 font-bold focus:outline-none hover:text-indigo-700 w-full flex items-center justify-between">
                  <span className="flex-1 text-left pr-6">
                    What companies or products do you perceive as our competitors?
                  </span>
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </li>
              <li>
                <button className="py-3 lg:py-4 font-bold focus:outline-none hover:text-indigo-700 w-full flex items-center justify-between">
                  <span className="flex-1 text-left pr-6">
                    Have you seen, read or heard anything in the news and on social media?
                  </span>
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </li>
              <li>
                <button className="py-3 lg:py-4 font-bold focus:outline-none hover:text-indigo-700 w-full flex items-center justify-between">
                  <span className="flex-1 text-left pr-6">
                    Do you identify with any of the people appearing in this advert?
                  </span>
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </li>
              <li>
                <button className="py-3 lg:py-4 font-bold focus:outline-none hover:text-indigo-700 w-full flex items-center justify-between">
                  <span className="flex-1 text-left pr-6">
                    If you could change one thing about the advert you’ve just seen/heard, what would it be?
                  </span>
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </li>
              <li>
                <button className="py-3 lg:py-4 font-bold focus:outline-none hover:text-indigo-700 w-full flex items-center justify-between">
                  <span className="flex-1 text-left pr-6">
                    Who else would you like to see appear in this advert?
                  </span>
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12  ">
            <a href="#" className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-500 p-6 lg:p-8 border border-indigo-100 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="h-16 w-16 lg:h-20 lg:w-20 bg-green-100 rounded-full flex items-center justify-center border border-green-200 shadow-inner">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-xl lg:text-2xl mb-3">Compare Plans</h5>
                <p className="text-lg text-gray-600 mb-6">Find out what plan is right for you</p>
                <span className="font-bold text-lg text-indigo-600 flex items-baseline">
                  View price comparison
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </a>
            <a href="#" className="bg-white rounded-lg shadow hover:shadow-xl transition-all duration-500 p-6 lg:p-8 border border-indigo-100 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="h-16 w-16 lg:h-20 lg:w-20 bg-green-100 rounded-full flex items-center justify-center border border-green-200 shadow-inner">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
              </div>
              <div className="flex-1">
                <h5 className="font-bold text-xl lg:text-2xl mb-3">Need advice?</h5>
                <p className="text-lg text-gray-600 mb-6">Find out what plan is right for you</p>
                <span className="font-bold text-lg text-indigo-600 flex items-baseline">
                  Contact our professionals
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
     );
}
 
export default Faqs;