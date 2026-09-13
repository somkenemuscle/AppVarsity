import Link from "next/link"
import PageHeader from "@/components/shared/PageHeader"
import PageNav from "@/components/shared/PageNav"
import FramedImage from "@/components/shared/FramedImage"
import { projectUrls } from "@/constants/projectUrls"
import { websiteUrls } from "@/constants/websiteUrls"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function DocumentationPage() {
    return (
        <div className="lg:max-w-3xl">
            <PageHeader
                page='Documentation'
                pageSubheading="Project Guide"
                title="Project Documentation"
                description="The project requires a report that should include the components shown in the image below. These details will be in the email that was sent to you."
            />

            <FramedImage alt="email-pic" src='/assets/images/email3.jpg' />

            <p className="font-light mt-10 text-gray-400">
                Do not be overwhelmed by the report requirements. As we will provide you with examples of high-scoring
                project reports that include all the necessary components. You can review these documents to guide you in structuring your own project report.
            </p>

            <p className="text-gray-400 font-light mt-5">NB: Your report should be created in Google Docs and saved as a PDF.</p>

            <div className="mt-8 mb-8">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value='q1' className="border border-neutral-800 rounded-xl px-5">
                        <AccordionTrigger className="no-underline hover:no-underline font-light text-sm">What is the highest score for a project?</AccordionTrigger>
                        <AccordionContent className="text-gray-400 text-sm">The highest score for a project at Aptech Maryland, as of today, is 75/100.</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <p className="mt-5 font-light text-gray-400">The following are links to the project pdf reports that scored between 70 and 75 out of 100, showcasing
                some of the highest marks achieved. Click on the links to view the PDF documentation.
            </p>

            <ul className="mt-4">
                {projectUrls.map((project, index) => (
                    <li key={index} className="mb-2">
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:underline"
                        >
                            {index + 1}. {project.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="mt-5 font-light text-gray-400">
                Use these project reports as a guide to creating your own. If you need direct access to a specific PDF on Google Docs for editing, please contact us, and we will provide you with access.
            </p>

            <p className="font-light mt-10 text-gray-400">
                We have also provided links to view some of the websites that are hosted online. You can access these sites through the links below:
            </p>

            <ul className="mt-4">
                {websiteUrls.map((project, index) => (
                    <li key={index} className="mb-2">
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-400 hover:underline"
                        >
                            {index + 1}. {project.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <PageNav
                prev={{ href: "/resources/projectguide/details", label: "Details" }}
                next={{ href: "/resources/projectguide/preview", label: "Preview" }}
            />
        </div>
    )
}

export default DocumentationPage
