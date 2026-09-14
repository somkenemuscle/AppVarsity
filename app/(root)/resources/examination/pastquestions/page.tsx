import PageHeader from "@/components/shared/PageHeader"
import { FileText, Download } from "lucide-react"
import { pastQuestionPdflinks } from "@/constants/pastQuestionPdfLinks"

const chipStyles = [
    "bg-gradient-to-br from-[#e4e1ff] to-[#cfc9ff] text-[#4c3fc9]",
    "bg-gradient-to-br from-[#d3f3e2] to-[#b8ecd0] text-[#12704c]",
    "bg-gradient-to-br from-[#dcecfe] to-[#c2ddfd] text-[#1a49c4]",
    "bg-gradient-to-br from-[#fdeecb] to-[#fbe1a3] text-[#7a5c0e]",
]

function PastQuestionsPage() {
    return (
        <div className="lg:max-w-4xl">
            <PageHeader
                pageSubheading="Examination"
                page='Past Questions'
                title="Past Questions"
                description="Kindly Note: You can find a link to the past questions in PDF format below. Please confirm and cross-check the answers with your eBook to avoid any mistakes."
            />

            <p className="font-semibold mb-6 text-[#292a26]">
                Please note that for past questions covering both the old and new curricula,
                we recommend reviewing both, as some questions from the old curriculum have been repeated in the new one.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pastQuestionPdflinks.map((pdfQuestions, i) => (
                    <a
                        key={i}
                        href='#'
                        target="_blank"
                        rel="noopener noreferrer"
                        title={pdfQuestions.course.trim()}
                        className="group flex items-center gap-4 rounded-2xl border border-[#e2e1da] bg-white p-4 shadow-[0_1px_2px_rgba(41,42,38,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4f46e5]/30 hover:shadow-[0_16px_32px_-16px_rgba(79,70,229,0.2)]"
                    >
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 ${chipStyles[i % chipStyles.length]}`}>
                            <FileText className="h-5 w-5" />
                        </span>
                        <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-[#292a26]">{pdfQuestions.course.trim()}</p>
                            <p className="mt-0.5 text-xs text-[#8c8e84]">PDF Document</p>
                        </div>
                        <Download className="h-4 w-4 shrink-0 text-[#c9c8be] transition-colors group-hover:text-[#4f46e5]" />
                    </a>
                ))}
            </div>

            <p className="font-light mt-8 text-[#777970]">
                In the coming days, we will update this page with all the remaining past
                questions. Good luck on your exams, courtesy of Appvarsity.
            </p>
        </div>
    )
}

export default PastQuestionsPage
