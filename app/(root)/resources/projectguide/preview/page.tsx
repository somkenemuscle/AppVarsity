import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

function PreviewPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                page='Preview'
                pageSubheading="Project Guide"
            />
            <h1 className="font-semibold text-3xl mb-2">Preview Project Specification</h1>
            <p className="mb-5 text-gray-400 font-light">  In this section, we will review the email that was sent, so as to complete your project. We still need to
                cover number 1, which
                is a video representation and number 3 as shown in the image below. We also need to fill out the feedback and status report forms which we will do in
                the next section.
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
                1. For the video representation, a preview of how the video should be done and recorded is available via the link provided below. Please note,
                the sound of the video should be muted.
            </p>

            <ul className="mt-4">
                <li className="mb-2">
                    <a
                        href='https://utfs.io/f/b722ac01-2a25-4b6a-87b1-b635417ca487-ckhye7.mp4'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-500 hover:underline"
                    >
                        Video Representation of simplon beauty care
                    </a>
                </li>
            </ul>


            <p className="font-light mt-10">
                2. For the source and compiled code, please note the following:
            </p>

            <ol className="list-disc mt-2 font-light">
                <li className="mb-3">
                    Source Code: This is the folder containing all the code you have written. It includes the human-readable files where your code is typed.
                </li>
                <li>
                    Compiled Code: This is the output you will need to generate based on the technologies you are using. It typically consists of machine-readable
                    files produced from compiling your source code.
                </li>
            </ol>

            <p className="mt-5 text-gray-400 font-light">
                If you need assistance with the source code, please reach out to our team for support.
            </p>



            <div className="flex justify-between mt-8 mb-16">
                <Link href="/resources/projectguide/documentation">
                    <Button className="font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
                        <ChevronLeft className="inline-block mr-1 h-4" />
                        <span className="hidden sm:inline">Documentation</span>
                        <span className="inline sm:hidden">Docs</span>
                    </Button>
                </Link>

                <Link href="/resources/projectguide/feedbackform">
                    <Button className="font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
                        Feedback Form
                        <ChevronRight className="inline-block ml-1 h-4" />
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default PreviewPage