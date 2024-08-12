import Breadcrumb from "@/components/shared/Breadcrumb"
import Link from "next/link"


function PastQuestionsPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                pageSubheading="Examination"
                page='Past Questions'
            />

            <h1 className="font-semibold text-3xl mb-2">Past Questions</h1>
            <p className="mb-5 text-gray-400 font-light"> Kindly note: Only XML and JSON past questions are
                available due to the ADSE Batch 853 exam, scheduled for August 14, 2024 (Wednesday).
            </p>

            <p className="font-light">
                You can find a link to the past question in a PDF format below :
            </p>


            <Link
                href='https://utfs.io/f/7bd792a4-c003-40bb-b958-1bd7d27e1d98-3lypy.pdf'
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 hover:underline"
            >
                <p>
                    Xml And Json Past Question Pdf
                </p>
            </Link>

            <p className="font-light mt-5">
                In the coming days, we will update this page with all the remaining past 
                questions. Good luck on your exams, courtesy of Appvarsity.
            </p>


        </div>
    )
}

export default PastQuestionsPage