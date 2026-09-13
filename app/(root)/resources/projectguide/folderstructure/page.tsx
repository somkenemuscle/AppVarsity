import PageHeader from "@/components/shared/PageHeader"
import PageNav from "@/components/shared/PageNav"
import FramedImage from "@/components/shared/FramedImage"

function FolderStructurePage() {
    return (
        <div className="lg:max-w-3xl">
            <PageHeader
                page='Folder structure'
                pageSubheading="Project Guide"
                title="Folder Structure"
                description="Organize all the files you need to submit into a general folder and use the folder structure shown in the image below. You will need to include the following files:"
            />
            <ol className="list-decimal pl-5 text-gray-400 font-light">
                <li>The screen recorded video of your website.</li>
                <li>The source code folder for your website.</li>
                <li>The status reports for all members of the group.</li>
                <li>The feedback forms for all members of the group.</li>
                <li>Your eProject PDF documentation.</li>
            </ol>

            <FramedImage alt="folderpic" src='/assets/images/Folder1.jpg' />

            <p className="mt-5 text-gray-400 font-light">
                Next, compress the general folder into a ZIP file. This ZIP file will be used for your submission.
            </p>

            <PageNav
                prev={{ href: "/resources/projectguide/feedbackform", label: "Feedback Form", shortLabel: "Feedback" }}
                next={{ href: "/resources/projectguide/submission", label: "Submission", shortLabel: "Submit" }}
            />
        </div>
    )
}

export default FolderStructurePage
