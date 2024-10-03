import Breadcrumb from "@/components/shared/Breadcrumb"
import Link from "next/link"
import { pastQuestionPdflinks } from "@/constants/pastQuestionPdfLinks"

function PastQuestionsPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                pageSubheading="Examination"
                page='Past Questions'
            />

            <h1 className="font-semibold text-3xl mb-2">Past Questions</h1>


            <p className="font-light mb-4 text-gray-400">
                Kindly Note - You can find a link to the past questions in PDF format below. Please confirm and cross-check
                the answers with your eBook to avoid any mistakes  <span aria-hidden="true">→</span>
            </p>

            <p className="mt-5 font-semibold mb-5">
                Please note that for past questions covering both the old and new curricula,
                we recommend reviewing both, as some questions from the old curriculum have been repeated in the new one.
            </p>


            {
                pastQuestionPdflinks.map((pdfQuestions) => (
                    <Link
                        href={pdfQuestions.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:underline"
                    >
                        <p>
                            {pdfQuestions.course}
                        </p>
                    </Link>
                ))
            }


            <p className="font-light mt-5">
                In the coming days, we will update this page with all the remaining past
                questions. Good luck on your exams, courtesy of Appvarsity.
            </p>
        </div>
    )
}

export default PastQuestionsPage