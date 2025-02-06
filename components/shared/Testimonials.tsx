import { feedbackData } from "@/constants/feedback"
import SlideIn from "./SlideIn"
import { IoPersonCircle } from "react-icons/io5";


function Testimonials() {
    return (
        <div className="w-full px-8">
            <div className="mx-auto max-w-6xl py-20 font-sans cursor-pointer">
                <header className="text-left md:text-center mb-2 text-3xl font-semibold tracking-tight text-gray-900 font-mono">What Students Say</header>
                <p className="text-left md:text-center mb-10 text-gray-500 tracking-tighter font-mono">Feedback from students using this platform</p>
                <SlideIn direction="bottom">
                    <div className="overflow-x-auto scrollbar-hide">
                        <div className="flex gap-6">
                            {feedbackData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`border border-neutral-200 rounded-xl text-sm shadow py-5 px-6 col-span-12 md:col-span-6 lg:col-span-4 min-w-[300px] bg-gray-100`}
                                >
                                    <p className="text-gray-600">{item.feedback}</p>
                                    <div className="flex pt-6 gap-1 items-center">
                                        <IoPersonCircle className="h-10 w-10" />
                                        <ul>
                                            <li className="text-black">{item.position}</li>
                                            <li className="font-semibold text-indigo-700">{item.name}</li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </SlideIn>
            </div>
        </div>

    )
}

export default Testimonials