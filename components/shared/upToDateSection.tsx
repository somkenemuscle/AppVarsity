import { IoIosClock } from "react-icons/io";

export default function Uptodate() {
    return (
        <div className="px-8">
            <div id='service' className="bg-neutral-900 max-w-6xl border-2 border-gray-600 mx-auto px-7 rounded-xl justify-items-center py-14 my-20 font-sans">
                <div className="flex flex-col items-start md:flex-row md:items-center gap-3">
                    <IoIosClock className="w-10 h-10 text-white" />
                    <p className="text-3xl font-semibold text-left  tracking-tight text-gray-100">
                        Always Up-to-Date, Always <span className='text-indigo-400'>Relevant</span>
                    </p>
                </div>
                <p className="mt-4 pl-1 text-gray-400 font-light font-sans tracking-wide max-w-2xl text-left md:text-center">
                    We are committed to keeping you informed with the latest resources, past questions, and comprehensive project documentation. Our goal is to provide you with everything you need to excel at Aptech because your success is our top priority.
                </p>
                <p className="mt-6 text-gray-300 text-left font-semibold"><i>@Appvarsity 2025</i></p>
            </div>
        </div>

    )
}