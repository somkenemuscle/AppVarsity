import PageHeader from "@/components/shared/PageHeader"
import PageNav from "@/components/shared/PageNav"
import FramedImage from "@/components/shared/FramedImage"

function FeedbackPage() {
    return (
        <div className="lg:max-w-3xl">
            <PageHeader
                page='Feedback Form'
                pageSubheading="Project Guide"
                title="Feedback & Status Report Form"
                description="In this section, we will cover how to complete and fill the feedback and status report forms, as shown in the image below:"
            />

            <FramedImage alt="email-pic" src='/assets/images/email2.jpg' />

            <p className="mt-7 text-[#777970] font-light">These following are the steps that need to be taken in order to fill out the form</p>

            <ol className="mt-4 list-decimal pl-5 text-[#777970] font-light">
                <li>Download both the eProject feedback and status report forms</li>
                <li>Open the forms in microsoft excel</li>
                <li>Then fill out the form with data for each member of that particular group and save each of the files</li>
            </ol>
            <p className="mt-3 text-[#8c8e84] font-light">Note: If you are using a macbook you can open using the Numbers application</p>

            <p className="mt-5 font-light text-[#777970]">Below are screenshots of how the feedback and status report forms should appear once completed:</p>
            <FramedImage alt="feedbackimg" src='/assets/images/feedbackform.jpg' />
            <FramedImage alt="statusreportimg" src='/assets/images/statusreport.jpg' />

            <PageNav
                prev={{ href: "/resources/projectguide/preview", label: "Preview" }}
                next={{ href: "/resources/projectguide/folderstructure", label: "Folder Structure", shortLabel: "Folder" }}
            />
        </div>
    )
}

export default FeedbackPage
