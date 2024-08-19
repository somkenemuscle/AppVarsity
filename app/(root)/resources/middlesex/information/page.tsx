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
                In the meantime, if you have any questions or need assistance, feel free to visit our
                interactions page. Our team is here to help with any inquiries you might have which will be
                coming from a students perspective.
            </p>

            <p className="mt-4 font-light">
                Visit the interactions page by clicking this link to ask any question  <span aria-hidden="true">→</span> {' '}
                <Link className="text-indigo-500" href="#">
                    Interactions page
                </Link>
            </p>
        </div>
    )
}

export default MiddlesexInformationPage