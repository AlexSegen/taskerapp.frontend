import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { LOGIN } from '../../constants/paths';
import Modal from './modal';

const Pricing = () => {
    
    const [showModal, setShowModal] = useState(false);

    return (
      <> 
    <div className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 mb-12 lg:mb-16 xl:mb-24">
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-gray-800 text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">For Freelancers and Teams</h2>
          <p className="text-lg xl:text-xl text-gray-600">We offer 100% money back guarantee.</p>
        </div>
    
        <div className="flex justify-center mb-8 md:mb-20 lg:mb-24">
          <nav className="inline-flex bg-blue-100 rounded-lg overflow-hidden text-sm">
            <button className="font-bold focus:outline-none py-3 px-6 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-700 text-white">Pay Monthly</button>
            <button className="font-bold focus:outline-none py-3 px-6 text-blue-500 hover:bg-blue-50">Pay Yearly</button>
          </nav>
        </div>
    
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 items-start">
          <div className="p-4 md:p-8 border-2 border-blue-100 md:border-white rounded-lg bg-white ">
            <div className="flex justify-between items-baseline mb-4">
              <h4 className="text-xl lg:text-2xl font-bold">Free Package</h4>
              <span className="text-xl lg:text-2xl font-bold">$0</span>
            </div>
            <p className="text-gray-600 mb-6 text-lg">Wisdom is easily acquired when hiding under the bed with.</p>
            <Link to={LOGIN} className="border rounded-lg block text-center py-3 px-5 lg:px-8 font-bold mb-8 bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white">Start for free</Link>
            <ul className="text-gray-600 space-y-4 text-lg">
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>30 Downloads</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>5 Users</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>10 Credits</span>
              </li>
              <li className="flex space-x-2 items-center opacity-25">
                <div className="w-6 h-6">
                  &nbsp;
                </div>
                <span>60 day history</span>
              </li>
              <li className="flex space-x-2 items-center opacity-25">
                <div className="w-6 h-6">
                  &nbsp;
                </div>
                <span>Email Support</span>
              </li>
              <li className="flex space-x-2 items-center opacity-25">
                <div className="w-6 h-6">
                  &nbsp;
                </div>
                <span>Phone Support</span>
              </li>
            </ul>
          </div>
          <div className="p-4 md:p-8 lg:py-12  md:transform md:-translate-y-10 md:-mb-10 bg-white rounded-lg md:shadow-md md:hover:shadow-xl md:transition-all md:duration-500 border-2 md:border border-blue-100">
            <div className="flex justify-between items-baseline mb-4">
              <h4 className="text-xl lg:text-2xl font-bold">Pro Package</h4>
              <span className="text-xl lg:text-2xl font-bold">$49</span>
            </div>
            <p className="text-gray-600 mb-6 text-lg">Wisdom is easily acquired when hiding under the bed with.</p>
            <button onClick={() => setShowModal(true)} type="button" className="border rounded-lg block text-center py-3 px-5 lg:px-8 font-bold bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-700  text-white mb-8 w-full">Subscribe now</button>
            <ul className="text-gray-600 space-y-4 text-lg">
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Unlimited Downloads</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Unlimited Users</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Unlimited Credits</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>60-day history</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Chat Support</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Email Support</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Phone Support</span>
              </li>
            </ul>
          </div>
          <div className="p-4 md:p-8 border-2 border-blue-100 md:border-white rounded-lg bg-white">
            <div className="flex justify-between items-baseline mb-4">
              <h4 className="text-xl lg:text-2xl font-bold">Plus Package</h4>
              <span className="text-xl lg:text-2xl font-bold">$29</span>
            </div>
            <p className="text-gray-600 mb-6 text-lg">Wisdom is easily acquired when hiding under the bed with.</p>
            <button onClick={() => setShowModal(true)} type="button" className="border rounded-lg block text-center py-3 px-5 lg:px-8 font-bold mb-8 bg-gradient-to-br hover:from-blue-500 hover:to-blue-700 hover:text-white w-full">Subscribe now</button>
            <ul className="text-gray-600 space-y-4 text-lg">
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Unlimited Downloads</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Unlimited Users</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Unlimited Credits</span>
              </li>
              <li className="flex space-x-2 items-center">
                <div className="w-6 h-6">
                  <svg className="text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>60-day history</span>
              </li>
              <li className="flex space-x-2 items-center opacity-25">
                <div className="w-6 h-6">
                  &nbsp;
                </div>
                <span>Email Support</span>
              </li>
              <li className="flex space-x-2 items-center opacity-25">
                <div className="w-6 h-6">
                  &nbsp;
                </div>
                <span>Phone Support</span>
              </li>
            </ul>
          </div>
        </div>
    </div>

    {
      showModal && (
        <Modal onClose={() => setShowModal(false)} title="We are sorry">
            We are not accepting new payment plans at the moment. Please, try our <strong className="underline">Free Package</strong> meanwhile.
        </Modal>
      )
    }

    </>
     );
}
 
export default Pricing;