import Breadcrumb from "@/components/shared/Breadcrumb"
import Link from "next/link"

function MiddlesexInformationPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                pageSubheading="Middlesex Updates"
                page='Campus Information'
            />

            <h1 className="font-semibold text-3xl mb-2">Campus Information: Coming Soon!</h1>
            <p className="text-gray-400 font-light ">We are currently in the process of gathering and organizing
                valuable information about Middlesex University, which will be available to you shortly.
                In the meantime, if you have any questions or need assistance, feel free to reach out to us via 
                <Link href="mailto:appvarsitytech@gmail.com" >
                    <span className='font-normal hover:underline text-indigo-500'> appvarsitytech@gmail.com </span>
                </Link>
                ||
                <Link href='https://wa.me/2349068406794'>
                    <span className='text-indigo-500 hover:underline font-normal'> +234(9068406794) </span>
                </Link>
                . Our team is here to help with any inquiries you might have which will be
                coming from a students perspective.
            </p>
        </div>
    )
}

export default MiddlesexInformationPage