import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import profilePicture from '../assets/profilepicFov.png';
import notebookL from '../assets/notebookL.png';
import notebookM from '../assets/notebookM.png';


const Hero = () => {
  return (
    <div className='relative pt-16 pb-10 sm:pt-16 sm:pb-16 lg:pb-16 overflow-hidden h-[92vh]' >
        <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20'>
            <div className='max-w-xl mx-auto text-center'>
                <h1 className='text-4xl font-bold sm:text-6xl gray-primary-color'>
                    I Love Coding
                </h1>
                <p className='mt-5 text-base text-white sm:text-xl'>
                    Turning your vision into a reality. On any screen. Apps that empower, experiences that connect.
                </p>
                <div>
                    <a href="/" title='cv' className='shadow-2xl mr-4 inline-flex items-center px-6 py-4 mt-8 font-semibold text-white bg-primary-color rounded-lg transition-all duration-200 hover:scale-110' role='button'>
                        Download My CV
                    </a>
                    <a href="/" title='work' className='inline-flex items-center px-6 py-4 mt-8 font-semibold text-white border rounded-lg transition-all duration-200 hover:scale-110' role='button'>
                        My Work
                    </a>
                </div>
               
                <div className='flex flex-row justify-between text-white p-8 max-w-[500px] mx-auto'>
                    <a href="https://github.com/afovwe" className='transittion-all duration-200 hover:scale-110 cursor-pointer'><AiFillLinkedin className='w-[70px] h-auto'></AiFillLinkedin></a>
                    <a href="https://github.com/afovwe" className='transittion-all duration-200 hover:scale-110 cursor-pointer'><AiFillGithub className='w-[70px] h-auto'></AiFillGithub></a>
                    <a href="https://github.com/afovwe" className='transittion-all duration-200 hover:scale-110 cursor-pointer'><AiFillTwitterCircle className='w-[70px] h-auto'></AiFillTwitterCircle></a>
                </div>
            </div>

           
        </div>
        <div className='relative bottom-0 z-10  flex mx-auto justify-center gap-20'>
            <img className='left-[20px] top-[-20px] sm:left-20 sm:top-[-200px] absolute block w-auto h-[150px] sm:h-[500px]' src={notebookL} alt="note book" />
             <img className='absolute sm:relative  w-auto bottom-[-110px] right-[-70px] sm:bottom-0  h-[100px] sm:h-[380px]' src={notebookM} alt="note book" />
            <img className='right-0 sm:bottom-0 absolute block h-auto w-[800px] sm:w-[900px]' src={profilePicture} alt="profilePicture" />

        </div>
    </div>
    
  )
}

export default Hero