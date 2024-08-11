import Breadcrumb from "@/components/shared/Breadcrumb"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"


function IntroductionPage() {
  return (
    <div className="lg:max-w-3xl mb-11">
      <Breadcrumb
        page='Introduction'
        pageSubheading="Getting Started"
      />
      <h1 className="font-semibold text-3xl mb-2">Introduction</h1>
      <p className="mb-5 text-gray-400 font-light">We are excited to provide you with a range of resources to help you excel in your Aptech journey.
        This section is designed to guide you through the essentials you need to get started and make the most of your studies.</p>

      <p className="font-light">
        <span className="font-medium">Kindly Note <span aria-hidden="true">→</span> </span> Currently, only the
        Project Guide section is available, as it was prioritized for the ADSE Batch 853 project. Additional
        resources will be added gradually over time. For now, the Project Guide is provided to assist Batch
        853 with their Semester One project.
      </p>


      <div className="flex justify-end mt-14 mb-16">
        <Link href="/resources/projectguide/overview" className="ml-auto">
          <Button className="font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
            Project Overview
            <ChevronRight className="h-4 font-extralight inline-block ml-1" />
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default IntroductionPage