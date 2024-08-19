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

      <p className="font-light text-gray-400">
        <span className="font-medium"> </span>
        Our mission is to support you every step of the way, whether you're a new student or nearing the end of your
        program, you'll find valuable insights, tips, and tools that are tailored to your unique needs.

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