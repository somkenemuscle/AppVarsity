import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"


function DetailsPage() {
  return (
    <div className="lg:max-w-3xl">
      <Breadcrumb
        page='Details'
      />
      <h1 className="font-semibold text-3xl mb-2">Project Details & Specifications</h1>
      <p className="mb-5 text-gray-400 font-light">Once you have acknowledged your project, carefully read through the mail.
        At the bottom of the email, you will find an attached e-project status report and feedback form in Excel, along with a Google document that has details on what
        your project would be about. This is what you should see
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

      <p className="font-normal mt-7">
        Now open the Google document, which contains your project requirements and problem statement. Thoroughly read the document and
        note down key points and what technologies you would be using to build your project. Focus on the details which will be specified in your
        problem statement.
      </p>

      <p className="text-indigo-400 mt-3">
        NB: Kindly ensure you work with what was given to you in your problem statement.
      </p>

      <p className="font-normal mt-5">
        After gathering the main points, group members should discuss how they will tackle the project and decide on the implementation approach.
        It's advisable for your group to push the project to GitHub, so as to ensure easy access to code and latest code updates.
      </p>

      <p className="font-light mt-5">
        If you have any issue or have no idea how to use or implement github you can reach out to our team either through whatsapp or email
        <span className="text-indigo-400"> +2349068406794  or somkeneoj@gmail.com</span>
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