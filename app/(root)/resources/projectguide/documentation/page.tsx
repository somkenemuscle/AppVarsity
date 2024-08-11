import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
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
            <Breadcrumb
                page='Documentation'
            />
            <h1 className="font-semibold text-3xl mb-2">Project Documentation</h1>
            <p className="mb-5 text-gray-400 font-light">The project requires a report that should include the components shown in the image below.
                These details will be in the email that was sent to you.
            </p>

            <div className="w-full mt-7">
                <Image
                    alt="email-pic"
                    priority
                    width={1200}
                    height={800}
                    src='/assets/images/email3.jpg'
                    className="rounded-md"
                />
            </div>

            <p className="font-light mt-10">
                Do not be overwhelmed by the report requirements. As we will provide you with examples of high-scoring
                project reports that include all the necessary components. You can review these documents to guide you in structuring your own project report.
            </p>

            <p className="text-indigo-500 mt-5">NB: Your report should be created in Google Docs and saved as a PDF.</p>

            <div className="mt-8 mb-20">
                <div>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value='q1'>
                            <AccordionTrigger className="no-underline hover:no-underline font-light">The highest score for a project?</AccordionTrigger>
                            <AccordionContent className="text-gray-300">The highest score for a project in aptech , maryland as we know of today is 75/100 </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>


            <p className="mt-5 font-light">The following are links to the project pdf reports that scored between 70 and 75 out of 100, showcasing
                some of the highest marks achieved. Click on the links to view the PDF documentation.
            </p>

            <ul className="mt-4">
                {projectUrls.map((project, index) => (
                    <li key={index} className="mb-2">
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 hover:underline"
                        >
                            {index + 1}. {project.title}
                        </Link>
                    </li>
                ))}
            </ul>

            <p className="mt-5 font-light">
                Use these project reports as a guide to creating your own. If you need direct access to a specific PDF on Google Docs for editing, please contact us, and we will provide you with access.
            </p>


            <p className="font-light mt-10">
                We have also provided links to view some of the websites that are hosted online. You can access these sites through the links below.
            </p>

            <ul className="mt-4">
                {websiteUrls.map((project, index) => (
                    <li key={index} className="mb-2">
                        <Link
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-500 hover:underline"
                        >
                            {index + 1}. {project.title}
                        </Link>
                    </li>
                ))}
            </ul>


            <Link href="/resources/projectguide/preview">
                <Button className="mt-5 mb-16 font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
                    Preview <ChevronRight className="inline-block ml-1" />
                </Button>
            </Link>
        </div>
    )
}

export default DocumentationPage