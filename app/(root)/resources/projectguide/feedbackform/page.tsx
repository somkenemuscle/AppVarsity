import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

function FeedbackPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                page='Feedback Form'
                pageSubheading="Project Guide"
            />
            <h1 className="font-semibold text-3xl mb-2">Feedback & Status Report Form</h1>
            <p className="mb-5 text-gray-400 font-light"> In this section, we will cover how to complete and fill the feedback and status report forms,
                as shown in the image below:
            </p>

            <div className="w-full mt-7">
                <Image
                    priority
                    alt="email-pic"
                    width={1200}
                    height={800}
                    src='/assets/images/email2.jpg'
                    className="rounded-md"
                />
            </div>

            <p className="mt-7 text-gray-300 font-light"> These following are the steps that need to be taken in order to fill out the form </p>

            <ol className="mt-4 list-decimal pl-5">
                <li>Download both the eProject feedback and status report forms</li>
                <li>Open the forms in microsoft excel</li>
                <li>Then fill out the form with data for each member of that particular group and save each of the files</li>
            </ol>
            <p className="mt-3 text-gray-400 font-light">Note: If you are using a macbook you can open using the Numbers application</p>


            <p className="mt-5 font-light">Below are screenshots of how the feedback and status report forms should appear once completed:</p>
            <div className="w-full mt-7">
                <Image
                    priority
                    alt="feedbackimg"
                    width={1200}
                    height={800}
                    src='/assets/images/feedbackform.jpg'
                    className="rounded-md"
                />
            </div>

            <div className="w-full mt-7">
                <Image
                    priority
                    alt="statusreportimg"
                    width={1200}
                    height={800}
                    src='/assets/images/statusreport.jpg'
                    className="rounded-md"
                />
            </div>


            <Link href="/resources/projectguide/folderstructure">
                <Button className="mt-5 mb-16 font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
                    Folder Structure <ChevronRight className="inline-block ml-1" />
                </Button>
            </Link>
        </div>
    )
}

export default FeedbackPage