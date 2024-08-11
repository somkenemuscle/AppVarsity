import Breadcrumb from "@/components/shared/Breadcrumb"
import Image from "next/image"
import Link from "next/link"



function SubmissionPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                page='Submission'
                pageSubheading="Project Guide"
            />
            <h1 className="font-semibold text-3xl mb-2">Project Submission</h1>
            <p className="mb-5 text-gray-400 font-light">
                Once you have created your ZIP folder, upload it to a cloud file manager to generate a shareable link.
                You can use services like Google Drive, Uploadthing, or MediaFire to do this.
                Ensure you adjust the sharing settings to allow access to anyone with the link before submitting.
            </p>


            <p className="mt-5 font-light">
                You can use any platform you prefer, such as Google Drive or others. However, We recommend using MediaFire,
                as it simplifies the process. Once you upload your ZIP file to MediaFire, it automatically generates a public URL,
                making it easier to share and access your file.
            </p>

            <p className="mt-3 font-light">
                Below, I will show you how to use MediaFire and obtain the URL for your ZIP folder:
            </p>

            <ol className="ml-4 mt-6 list-decimal font-light">
                <li>Visit the website
                    <Link className="text-indigo-500 hover:underline" href="https://www.mediafire.com/" target="_blank" rel="noopener noreferrer"> MediaFire </Link>
                </li>
                <div className="w-full mt-7">
                    <Image
                        priority
                        alt="mf-pic"
                        width={1200}
                        height={800}
                        src='/assets/images/IMG_6360.jpg'
                        className="rounded-md mb-7"
                    />
                </div>
                <li>Select your zip file for upload</li>
                <div className="w-full mt-7">
                    <Image
                        priority
                        alt="mf-pic"
                        width={1200}
                        height={800}
                        src='/assets/images/IMG_6361.jpg'
                        className="rounded-md mb-7"
                    />
                </div>

                <div className="w-full mt-7">
                    <Image
                        priority
                        alt="mf-pic"
                        width={1200}
                        height={800}
                        src='/assets/images/IMG_6362.jpg'
                        className="rounded-md mb-7"
                    />
                </div>

                <li>Click on begin upload</li>
                <div className="w-full mt-7">
                    <Image
                        priority
                        alt="mf-pic"
                        width={1200}
                        height={800}
                        src='/assets/images/IMG_6366.jpg'
                        className="rounded-md mb-7"
                    />
                </div>

                <li>Once it is done uploading, copy the link</li>
                <div className="w-full mt-7">
                    <Image
                        priority
                        alt="mf-pic"
                        width={1200}
                        height={800}
                        src='/assets/images/IMG_6364.jpg'
                        className="rounded-md mb-7"
                    />
                </div>

                <div className="w-full mt-7">
                    <Image
                        priority
                        alt="mf-link"
                        width={1200}
                        height={800}
                        src='/assets/images/IMG_6365.jpg'
                        className="rounded-md mb-7"
                    />
                </div>
            </ol>

            <p className="mt-10 text-gray-400 font-light">
                Once you have obtained the link to your ZIP folder from the platform you selected, the leader of each group should submit this link via email
                to the administrator
                of your branch. Please confirm the correct recipient for whom your project link should be submitted to, so you can avoid any miscommunication.
            </p>

            <p className="mt-10 text-gray-400 font-light">
                NB: When submitting the link, respond directly to the email that was sent to you. This will help the administrator identify which group the folder link
                belongs to. Alternatively, you can include a list of students in your group along with the ZIP URL in the email content.
            </p>

            <p className="font-light mt-7 mb-10">
                We wish you success on your project,
                courtesy of Appvarsity .
            </p>


        </div>
    )
}

export default SubmissionPage