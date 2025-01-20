import { feedbackData } from "@/constants/feedback"
import SlideIn from "./SlideIn"

function Testimonials() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-14 py-20 font-sans">
            <header className="text-left md:text-center mb-4 text-4xl font-semibold tracking-tight text-gray-900">What Our <span className="text-orange-400">Users Say</span> </header>
            <p className="text-left md:text-center mb-10 text-gray-500 tracking-wide">Feedback from students using this platform</p>
            <SlideIn direction="left">
            <div className="grid grid-cols-12 gap-3">
                {feedbackData.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl p-8 col-span-12 md:col-span-6 lg:col-span-4 bg-neutral-800`}
                    >
                        <p className="text-white">{item.feedback}</p>
                        <p className="mt-6 text-gray-100">{item.position}</p>
                        <p className="font-semibold text-orange-300">{item.name}</p>
                    </div>
                ))}
            </div>
            </SlideIn>                 
        </div>
    )
}

export default Testimonials