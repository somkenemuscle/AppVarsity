import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
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
        Open the Google document containing your project requirements and problem statement or project deliverables. Carefully
        read through the document, noting key points and the technologies you will use to build your project.
        Pay particular attention to the details specified in your problem statement or project deliverables.
      </p>



      <p className="font-light mt-5">
        After gathering the main points, group members should discuss how they will tackle the project and decide on the implementation approach.
        It's advisable for your group to push the project to GitHub, so as to ensure easy code access and latest code updates.
      </p>

      <p className="font-light mt-5 text-gray-400">
        If you are enrolled in the new curriculum, we recommend using the following technologies to build your website:
      </p>
      <ol className="font-light mt-4 ml-4 list-disc">
        <li>Visual Studio Code for writing your code</li>
        <li>React as your Javascript framework</li>
        <li>Bootstrap for CSS styling</li>
        <li>Figma for UI/UX design</li>
      </ol>

      <p className="font-light mt-5 text-gray-400">
        These technologies are chosen for their simplicity and ease of use, making them ideal for implementation.
      </p>


      <p className="font-light mt-5">
        If you encounter any issues or need assistance with implementing your project or using GitHub, please reach out to our team.
        You can contact us via WhatsApp at <span className="text-indigo-400">+2349068406794</span> or email us at
        <span className="text-indigo-400"> appvarsitytech@gmail.com</span>
      </p>


      <div className="flex justify-between mt-8 mb-16">
        <Link href="/resources/projectguide/overview">
          <Button className="font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
            <ChevronLeft className="inline-block mr-1 h-4" /> Overview
          </Button>
        </Link>

        <Link href="/resources/projectguide/documentation">
          <Button className="font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
            <span className="hidden sm:inline">Documentation</span>
            <span className="inline sm:hidden">Docs</span>
            <ChevronRight className="inline-block ml-1 h-4" />
          </Button>
        </Link>
      </div>


    </div>
  )
}

export default DetailsPage