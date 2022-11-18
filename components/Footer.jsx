import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-sx text-gray-800'>
            <h5 className='font-bold'>About</h5>
            <p>How Airbnb Works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-sx text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It's a pretty awesome clone</p>
            <p>Lifelike</p>
            <p>Careers</p>
        </div>

        <div className='space-y-4 text-sx text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Airbnb your home</p>
            <p>AirCover for Hosts</p>
            <p>Explore Hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
        </div>

        <div className='space-y-4 text-sx text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Support people with disabilities</p>
            <p>Cancellation options</p>
            <p>Combating discrimination</p>
        </div>
    </div>
  )
}

export default Footer