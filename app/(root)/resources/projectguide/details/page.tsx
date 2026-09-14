import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"
import PageNav from "@/components/shared/PageNav"
import FramedImage from "@/components/shared/FramedImage"

function DetailsPage() {
  return (
    <div className="lg:max-w-3xl">
      <PageHeader
        pageSubheading="Project Guide"
        page='Details'
        title="Project Details & Specifications"
        description="Once you have acknowledged receipt of your project, carefully read through the email. At the bottom, you will find attachments including an e-project status report and feedback form, as well as a Google document detailing your project. The attachments should appear as follows:"
      />

      <FramedImage alt="email-pic" src='/assets/images/email2.jpg' />

      <p className="font-light mt-7 text-[#777970] dark:text-[#9a9c8d]">
        Open the Google document containing your project requirements and problem statement or project deliverables. Carefully
        read through the document, noting key points and the technologies you will use to build your project.
        Pay particular attention to the details specified in your problem statement or project deliverables.
      </p>

      <p className="font-light mt-5 text-[#777970] dark:text-[#9a9c8d]">
        After gathering the main points, group members should discuss how they will tackle the project and decide on the implementation approach.
        It's advisable for your group to push the project to GitHub, so as to ensure easy code access and latest code updates.
      </p>

      <p className="font-light mt-5 text-[#777970] dark:text-[#9a9c8d]">
        If you are enrolled in the new curriculum, we recommend using the following technologies to build your website:
      </p>
      <ol className="font-light mt-4 ml-4 list-disc text-[#777970] dark:text-[#9a9c8d]">
        <li>Visual Studio Code for writing your code</li>
        <li>React as your Javascript framework</li>
        <li>Bootstrap for CSS styling</li>
        <li>Figma for UI/UX design</li>
      </ol>

      <p className="font-light mt-5 text-[#777970] dark:text-[#9a9c8d]">
        These technologies are chosen for their simplicity and ease of use, making them ideal for implementation.
      </p>

      <p className="font-light mt-5 text-[#777970] dark:text-[#9a9c8d]">
        If you encounter any issues or need assistance with implementing your project or using GitHub, please reach out to our team.
        You can contact us via WhatsApp at <Link href='https://wa.me/2349068406794'><span className="text-[#4f46e5] hover:underline">+2349068406794</span></Link> or email us at
        <Link href="mailto:appvarsitytech@gmail.com">
          <span className="text-[#4f46e5] hover:underline"> appvarsitytech@gmail.com</span>
        </Link>
      </p>

      <PageNav
        prev={{ href: "/resources/projectguide/overview", label: "Overview" }}
        next={{ href: "/resources/projectguide/documentation", label: "Documentation", shortLabel: "Docs" }}
      />
    </div>
  )
}

export default DetailsPage
