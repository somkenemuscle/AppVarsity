import Image from 'next/image'
import Test from './test'
import Link from 'next/link'
import { auth } from "@clerk/nextjs/server";

export default function InteractCard({ profilePic, id, username, interaction, clerkId }: InteractParams) {
    const { userId } = auth();

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <article key={id} className="border border-gray-50 rounded-lg shadow-sm p-3 flex max-w-xl flex-col items-start justify-between">
                        <div className="relative mt-8 flex items-center gap-x-4">
                            <Image
                                alt="profilepic"
                                src={profilePic}
                                className="h-10 w-10 rounded-full bg-gray-50"
                                width={100}
                                height={100}
                            />
                            <div className="text-sm leading-6">
                                <p className="font-semibold text-gray-900">
                                    <Link href={`/interactions/${id}`}>
                                        <span className="absolute inset-0" />
                                        {username}
                                    </Link>
                                </p>
                                <p className="text-gray-600">
                                    <time dateTime='2024-04-06' className="text-gray-500">
                                        Apr 7, 2024
                                    </time></p>
                            </div>
                        </div>
                        <div className="group relative">
                            <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">{interaction}</p>
                        </div>

                        <div className="mt-4 flex justify-between items-center w-full">
                            <Link href={`/interactions/${id}`}>
                                <button className="text-sm text-blue-600 hover:underline">
                                    Reply
                                </button>
                            </Link>
                            
                            {userId === clerkId && (
                                <div>
                                    <Test />
                                </div>
                            )}

                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}
