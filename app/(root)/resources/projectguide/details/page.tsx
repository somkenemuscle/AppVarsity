import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"


function DetailsPage() {
  return (
    <div className="lg:max-w-3xl">
      <Breadcrumb
        pageSubheading="Project Guide"
        page='Details'
      />
      <h1 className="font-semibold text-3xl mb-2">Project Details & Specifications</h1>
      <p className="mb-5 text-gray-400 font-light">Once you have acknowledged receipt of your project, carefully
        read through the email. At the bottom, you will find attachments including an e-project status report and
        feedback form, as well as a Google document detailing your project. The attachments
        should appear as follows:
      </p>

      <div className="w-full mt-7">
        <Image
          alt="email-pic"
          priority
          width={1200}
          height={800}
          src='/assets/images/email2.jpg'
          className="rounded-md"
        />
      </div>

      <p className="font-light mt-7">
        Open the Google document containing your project requirements and problem statement. Carefully
        read through the document, noting key points and the technologies you will use to build your project.
        Pay particular attention to the details specified in your problem statement.
      </p>



      <p className="font-light mt-5">
        After gathering the main points, group members should discuss how they will tackle the project and decide on the implementation approach.
        It's advisable for your group to push the project to GitHub, so as to ensure easy code access and latest code updates.
      </p>

      <p className="font-light mt-5">
        If you encounter any issues or need assistance with using or implementing GitHub, please reach
        out to our team. You can contact us via WhatsApp at <span className="text-indigo-400">+2349068406794 </span>
        or email us at   <span className="text-indigo-400">somkeneoj@gmail.com.</span>

      </p>

      <Link href="/resources/projectguide/documentation">
        <Button className="mt-5 mb-16 font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
          Documentation <ChevronRight className="inline-block ml-1" />
        </Button>
      </Link>


    </div>
  )
}

export default DetailsPage