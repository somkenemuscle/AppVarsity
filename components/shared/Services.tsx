import SlideIn from './SlideIn'

export default function Services() {
    return (
        <SlideIn direction='bottom'>
            <div id='service' className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-mono leading-7 text-gray-500">Your Learning, Our Support</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            We Provide the Info. You Achieve the Success
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Just focus on learning, we will handle the resources you need.
                        </p>
                    </div>

                </div>
            </div>
        </SlideIn>
    )
}
