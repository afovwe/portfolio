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
      <div className='bg-black/40 max-w-[1300px] mx-auto rounded-xl overflow-hidden'>

      </div>
    </div>
  );
}

export default About;
