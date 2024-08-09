import SlideIn from './SlideIn';
import { features } from '@/constants/features';
import Image from 'next/image';
import Link from 'next/link';

export default function Features() {
    return (
        <SlideIn direction='bottom'>
            <div className="overflow-hidden bg-white py-10 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">
                                <h2 className="text-base font-thin font-mono leading-7 text-gray-500">Some of our resources <span aria-hidden="true">→</span></h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Get access to past project documentation.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    {features.map((feature) => (
                                        <div key={feature.name} className="relative pl-9">
                                            <dt className="inline font-semibold text-gray-900">
                                                <span className="absolute left-1 top-1 h-5 w-8 font-extralight text-slate-600">{feature.icon}</span>
                                                {feature.name}
                                            </dt>{' '}
                                            <dd className="inline">{feature.description}</dd>
                                        </div>
                                    ))}
                                     <Link href='/resources'>
                                        <p className="mt-2 cursor-pointer text-indigo-600 hover:text-indigo-800 pl-9">
                                            Explore Resources <span aria-hidden="true">→</span>
                                        </p>
                                    </Link>
                                </dl>
                            </div>
                        </div>
                        <Image
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
