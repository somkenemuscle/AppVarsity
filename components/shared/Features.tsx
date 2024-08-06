import SlideIn from './SlideIn';
import { features } from '@/constants/features';


export default function Features() {
    return (
        <SlideIn direction='bottom'>
            <div className="overflow-hidden bg-white py-10 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-gray-500">Some of our resources <span aria-hidden="true">→</span></h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get access to past project documentation.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-slate-600" />
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <img
                            alt="documentation"
                            src="/assets/images/docs.jpg"
                            width={2432}
                            height={1442}
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        </SlideIn>
    )
}
