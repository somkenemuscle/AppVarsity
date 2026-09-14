import PageHeader from "@/components/shared/PageHeader"
import PageNav from "@/components/shared/PageNav"
import FramedImage from "@/components/shared/FramedImage"

function OverviewPage() {
  return (
    <div className="lg:max-w-3xl">
      <PageHeader
        page='Overview'
        pageSubheading="Project Guide"
        title="Project Overview"
        description="Each semester, students are grouped and assigned projects that utilize various technologies taught in school. We provide comprehensive guides and overviews to help you approach your projects effectively. These guides are derived from a combination of past high-scoring projects, ensuring you receive valuable insights and practical tips."
      />

      <h2 className="font-semibold text-2xl mb-2 mt-8">Get Started On Your Project</h2>
      <p className="font-light text-[#777970] dark:text-[#9a9c8d]">
        The group representative for that batch will receive an email containing details and instructions on what and how their group should approach their project.
        The email should look something like this:
      </p>

      <FramedImage alt="email-pic" src='/assets/images/email1.jpg' />

      <p className="font-light mt-7 text-[#777970] dark:text-[#9a9c8d]">
        NB: Each student should respond to the email <span className="text-[#4f46e5]">eprojects@aptech.ac.in</span>, acknowledging that they have received their e-project.
        Please reply with a message in the following format: <span className="text-[#8c8e84] dark:text-[#8a8c80]">'Good day, I am [Your Name] and I am acknowledging the e-project.'</span>
      </p>

      <PageNav
        prev={{ href: "/resources/introduction", label: "Introduction" }}
        next={{ href: "/resources/projectguide/details", label: "Details" }}
      />
    </div>
  )
}

export default OverviewPage
