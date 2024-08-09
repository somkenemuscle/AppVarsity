import SlideIn from './SlideIn'

export default function Uptodate() {
    return (
        <SlideIn direction='bottom'>
            <div id='service' className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-mono leading-7 text-gray-500"></h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                          Always Up-to-Date, Always <span className='text-blue-100'>Relevant</span> 
                        </p>
                        <p className="mt-6  leading-8  text-gray-500">
                         We will ensure you stay informed with the latest resources and updates. Your success at Aptech is our priority.
                        </p>
                    </div>

                </div>
            </div>
        </SlideIn>
    )
}
