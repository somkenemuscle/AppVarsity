import Breadcrumb from "@/components/shared/Breadcrumb"

function IntroductionPage() {
  return (
    <div className="lg:max-w-3xl">
      <Breadcrumb
        page='Introduction'
        pageSubheading="Getting Started"
      />
      <h1 className="font-semibold text-3xl mb-2">Introduction</h1>
      <p className="mb-5 text-gray-400 font-light">We are excited to provide you with a range of resources to help you excel in your Aptech journey.
        This section is designed to guide you through the essentials you need to get started and make the most of your studies.</p>

      <p className="font-normal">
        <span className="font-medium">Kindly Note <span aria-hidden="true">→</span> </span> Only the Project guide section is currently available as it was made a priority due to the emergence of the project for ADSE batch 853. New resources will
        be added gradually as time goes, but we have made the project guide available for use to assist batch 853 with their semester one project.
      </p>
    </div>
  )
}

export default IntroductionPage