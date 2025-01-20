import SlideIn from './SlideIn';
import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
    return (
        <SlideIn direction='bottom'>
            <div className="py-10 sm:py-12 mt-32 mb-20">
                <div className='hidden md:block justify-self-center text-center'>
                    <header className='text-4xl font-bold'>Full access to past <br /> <span className='text-orange-400'>project documentation</span></header>
                    <p className='text-gray-500 mt-5'>Project documentation to guide you in during your own synopsis</p>
                    <img src="/assets/images/docs.jpg" className='w-[70%] h-[50%]  border rounded-xl shadow-[0px_4px_20px_rgba(255,127,80,0.3)] mt-10 mx-auto' />
                </div>
            </div>
        </SlideIn>
    )
}
