import Breadcrumb from "@/components/shared/Breadcrumb"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function OverviewPage() {
  return (
    <div className="lg:max-w-3xl">
      <Breadcrumb
        page='Overview'
      />
      <h1 className="font-semibold text-3xl mb-2">Project Overview</h1>
      <p className="mb-5 text-gray-400 font-light">Each semester, students are grouped and assigned projects that utilize various technologies
        taught in school. We provide comprehensive guides and overviews to help you approach your projects effectively. These guides are derived
        from a combination of past high-scoring projects, ensuring you receive valuable insights and practical tips.
      </p>

      <h1 className="font-semibold text-3xl mb-2">Get Started On Your Project</h1>
      <p className="font-normal">
        The group representative for that batch will receive an email containing details and  instructions on what and how their group should approach their project.
        The email should look something
        like this
      </p>

      <div className="w-full mt-7">
        <Image
          alt="email-pic"
          layout="responsive"
          width={1200}
          height={800}
          src='/assets/images/email1.jpg'
          className="rounded-md"
        />
      </div>

      <p className="font-normal mt-7">
        NB: Each student should respond to the email <span className="text-indigo-400">eprojects@aptech.ac.in</span>  , acknowledging that they have received their e-project.
        Just send back something in this format <span className="text-indigo-400">'Good day, I am Ojukwu Somkene and i am acknowledging the e-project'</span>
      </p>

      <Link href="/resources/projectguide/details">
        <Button className="mt-5 mb-10 font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
          Details <ChevronRight className="inline-block ml-1" />
        </Button>
      </Link>


    </div>
  )
}

export default OverviewPage





