import SlideIn from './SlideIn'

export default function Services() {
    return (
        <SlideIn direction='bottom'>
            <div id='service' className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            We Provide the Info, You Achieve the <span className='text-orange-400'>Success</span>
                        </p>
                        <p className="mt-6  leading-8  text-gray-500 font-sans tracking-wide">
                            Just focus on learning, we are here to make your aptech life easier
                        </p>
                    </div>

                </div>
            </div>
        </SlideIn>
    )
}
