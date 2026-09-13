import PageHeader from "@/components/shared/PageHeader"
import PageNav from "@/components/shared/PageNav"

function IntroductionPage() {
  return (
    <div className="lg:max-w-3xl">
      <PageHeader
        page='Introduction'
        pageSubheading="Getting Started"
        title="Introduction"
        description="We are excited to provide you with a range of resources to help you excel in your Aptech journey. This section is designed to guide you through the essentials you need to get started and make the most of your studies."
      />

      <p className="font-light text-gray-400">
        Our mission is to support you every step of the way, whether you're a new student or nearing the end of your
        program, you'll find valuable insights, tips, and tools that are tailored to your unique needs.
      </p>

      <PageNav next={{ href: "/resources/projectguide/overview", label: "Project Overview" }} />
    </div>
  )
}

export default IntroductionPage
