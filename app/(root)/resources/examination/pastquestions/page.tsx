import Breadcrumb from "@/components/shared/Breadcrumb"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"


function PastQuestionsPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                pageSubheading="Examination"
                page='Past Questions'
            />

            <p className="text-2xl text-gray-400 font-light">NB: XML Past questions will be uploaded this evening</p>
        </div>
    )
}

export default PastQuestionsPage