import React from 'react';
import mobile from '../assets/mobileR.png';

function About() {
  return (
    <div className='pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16'>
      <div className='py-16 m-6 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 relative bg-black/40 max-w-[1000px] mx-auto rounded-xl'>
        <div className='flex flex-col lg:flex-row'> {/* Maintain flex for layout */}
          <div className='p-7 mx-auto order-1 lg:order-none'> {/* Text content with order */}
            <div>
              <h2 className='text-3xl font bold leading-light gray-primary-color sm:text-4xl lg:text-5xl'>Hello, I am <span className='italic'>Omofovwe Akpadaka</span> </h2>
              <p className='text-white'> 
                Bridging the gap between vision and experience. I build apps that matter. Full-stack, full of awesome.
                         Let's build something amazing! Full-stack, full of awesome. Let's build something amazing!
                          Bridging the gap between vision and experience. I build apps that matter. Full-stack, full of awesome.
                         Let's build something amazing! Full-stack, full of awesome. Let's build something amazing!
                          Bridging the gap between vision and experience. I build apps that matter. Full-stack, full of awesome.
                         Let's build something amazing! Full-stack, full of awesome. Let's build something amazing!  
             </p>
            </div>
          </div>
          <img className="flex md:relative mx-auto lg:mr-0 lg:ml-auto w-[240px] md:w-[400px] h-auto order-2 lg:order-none lg:hidden" src={mobile} alt="" />
          <img className="hidden lg:block mx-auto w-[240px] md:w-[400px] h-auto lg:mr-0 lg:ml-auto" src={mobile} alt="" style={{ maxHeight: '40vh' }} />
        </div>
      </div>
      <div className='bg-black/40 max-w-[1000px] mx-auto rounded-xl overflow-hidden'>
          <div className='px-6 py-10'>
            <div className=' mx-auto max-w-5xl text-center'>
              <h2 className='block w-full gray-primary-color text-3xl sm:text-4xl'>
                Optimize your website
              </h2>
              <p className='mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-white' >
                Redesign your sign 
              </p>
            </div>
            <div className='mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3'>
              <div className='rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                <h3 className='text-xl italic text-gray-200' >Customizable</h3>
                <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                  ailor you landing page's look and feel from the color scheme to the font size, to design of the page
                </p>
              </div>
              <div className='rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                <h3 className='text-xl italic text-gray-200' >Customizable</h3>
                <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                  ailor you landing page's look and feel from the color scheme to the font size, to design of the page
                </p>
              </div>
              <div className='rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow'>
                <h3 className='text-xl italic text-gray-200' >Customizable</h3>
                <p className='my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400'>
                  ailor you landing page's look and feel from the color scheme to the font size, to design of the page
                </p>
              </div>

            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
