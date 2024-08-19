import Breadcrumb from "@/components/shared/Breadcrumb"
import Link from "next/link"

function ProgrammingCoursesPage() {
    return (
        <div className="lg:max-w-3xl">
            <Breadcrumb
                pageSubheading="Programming Courses"
                page='Free Courses'
            />
            <h1 className="font-semibold text-3xl mb-2">Free Programming Courses Available!</h1>
            <p className="font-light mb-4 text-gray-400">
                We are excited to offer you free programming courses that have been fully paid for
                on Udemy, so you don’t need to purchase them yourself. We are here to support you on
                your tech journey and build a community where we can all grow together.
            </p>

            <p className="mt-3 font-light mb-4 text-gray-400">
                These courses have been instrumental in improving our skills as software engineers
                and developers. They are perfect for anyone looking to dive deeper into the tech
                field, or even for those who are simply curious and want to explore programming.
            </p>

            <p className="mt-3 font-light mb-4 text-gray-400">
                If you're interested in accessing these courses, just reach out to us via
                email at  <Link href="mailto:appvarsitytech@gmail.com" >
                    <span className='font-normal text-indigo-500'>appvarsitytech@gmail.com </span>
                </Link>
                or WhatsApp    <Link href='https://wa.me/2349068406794'>
                    <span className='text-indigo-500 font-normal'> +234(9068406794)</span>
                </Link>
                , and we'll get you started!
            </p>


            <h1 className="text-xl font-bold">Courses Available</h1>
            <p>We have courses ranging from:</p>
            <ol className="text-gray-400 font-light list-disc ml-5">
                <li>Frontend (HTML, CSS, JavaScript)</li>
                <li>React</li>
                <li>Fullstack Development</li>
                <li>SQL Database</li>
                <li>MongoDB Database</li>
                <li>And so much more...</li>
            </ol>





        </div>
    )
}

export default ProgrammingCoursesPage