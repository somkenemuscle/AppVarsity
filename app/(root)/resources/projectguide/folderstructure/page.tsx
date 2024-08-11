import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"


function FolderStructurePage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                page='Folder structure'
                pageSubheading="Project Guide"
            />
            <h1 className="font-semibold text-3xl mb-2">Folder Structure</h1>
            <p className="mb-5 text-gray-400 font-light">
                Organize all the files you need to submit into a general folder and use the folder structure shown in the image below. You will need to include the following files:
            </p>
            <ol className="list-decimal pl-5">
                <li>The screen recorded video of your website.</li>
                <li>The source code folder for your website.</li>
                <li>The status reports for all members of the group.</li>
                <li>The feedback forms for all members of the group.</li>
                <li>Your eProject PDF documentation.</li>
            </ol>

            <div className="w-full mt-7">
                <Image
                    priority
                    alt="folderpic"
                    width={1200}
                    height={800}
                    src='/assets/images/Folder1.jpg'
                    className="rounded-md"
                />
            </div>

            <p className="mt-5 text-gray-400 font-light">
                Next, compress the general folder into a ZIP file. This ZIP file will be used for your submission.
            </p>

            <Link href="/resources/projectguide/submission">
                <Button className="mt-5 mb-16 font-light bg-blue-200 border border-gray-800 rounded-md hover:bg-gray-700 flex items-center">
                    Submission <ChevronRight className="inline-block ml-1" />
                </Button>
            </Link>

        </div>
    )
}

export default FolderStructurePage