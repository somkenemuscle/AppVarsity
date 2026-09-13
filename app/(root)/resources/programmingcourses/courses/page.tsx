import PageHeader from "@/components/shared/PageHeader"
import Link from "next/link"

function ProgrammingCoursesPage() {
    return (
        <div className="lg:max-w-3xl">
            <PageHeader
                pageSubheading="Programming Courses"
                page='Free Courses'
                title="Free Programming Courses Available!"
                description="We are excited to offer you free programming courses that have been fully paid for on Udemy, so you don’t need to purchase them yourself. We are here to support you on your tech journey and build a community where we can all grow together."
            />

            <p className="font-light mb-6 text-gray-400">
                These courses have been instrumental in improving our skills as software engineers
                and developers. They are perfect for anyone looking to dive deeper into the tech
                field, or even for those who are simply curious and want to explore programming.
            </p>

            <p className="font-light mb-8 text-gray-400">
                If you're interested in accessing these courses, just reach out to us via
                email at <Link href="mailto:appvarsitytech@gmail.com"><span className='font-normal hover:underline text-indigo-400'>appvarsitytech@gmail.com </span></Link>
                or WhatsApp <Link href='https://wa.me/2349068406794'><span className='text-indigo-400 hover:underline font-normal'> +234(9068406794)</span></Link>, and we'll get you started!
            </p>

            <div className="card-dark p-6">
                <h2 className="text-lg font-semibold text-white mb-3">Courses Available</h2>
                <p className="text-gray-400 font-light mb-3">We have courses ranging from:</p>
                <ul className="text-gray-400 font-light list-disc ml-5 space-y-1">
                    <li>Frontend (HTML, CSS, JavaScript)</li>
                    <li>React</li>
                    <li>Fullstack Development</li>
                    <li>SQL Database</li>
                    <li>MongoDB Database</li>
                    <li>And so much more...</li>
                </ul>
            </div>
        </div>
    )
}

export default ProgrammingCoursesPage
