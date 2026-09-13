import PageHeader from "@/components/shared/PageHeader"
import Link from "next/link"
import { pastQuestionPdflinks } from "@/constants/pastQuestionPdfLinks"

function PastQuestionsPage() {
    return (
        <div className="lg:max-w-3xl">
            <PageHeader
                pageSubheading="Examination"
                page='Past Questions'
                title="Past Questions"
                description="Kindly Note: You can find a link to the past questions in PDF format below. Please confirm and cross-check the answers with your eBook to avoid any mistakes."
            />

            <p className="font-semibold mb-5 text-gray-200">
                Please note that for past questions covering both the old and new curricula,
                we recommend reviewing both, as some questions from the old curriculum have been repeated in the new one.
            </p>

            <ul className="flex flex-col gap-3">
                {pastQuestionPdflinks.map((pdfQuestions, i) => (
                    <li key={i}>
                        <Link
                            href='#'
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:underline"
                        >
                            {pdfQuestions.course}
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="font-light mt-6 text-gray-400">
                In the coming days, we will update this page with all the remaining past
                questions. Good luck on your exams, courtesy of Appvarsity.
            </p>
        </div>
    )
}

export default PastQuestionsPage
