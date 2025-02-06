import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"
import Link from "next/link"

export function AccordionFaqs() {
    return (
        <div id="faqs" className="my-32 px-8 font-mono">
            <div className="mx-auto max-w-6xl">
                <p className="cursor-pointer font-medium mb-10 text-left md:text-center text-3xl">FAQs</p>
                <Accordion type="single" collapsible className="w-full">
                    {faqsOnHomepage.map((item, index) => (
                        <AccordionItem key={item.value} value={item.value} className="border border-gray-200 px-8 mb-3 rounded-xl shadow">
                            <AccordionTrigger className="no-underline hover:no-underline text-neutral-900 text-sm tracking-tight">{index + 1}.{" "}{item.trigger}</AccordionTrigger>
                            <AccordionContent className="text-gray-500 tracking-tight text-sm">{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Link href="mailto:appvarsitytech@gmail.com" >
                    <p className="mt-9 text-left md:text-center  text-gray-500 font-light text-sm">Have more questions? <span className="underline text-black">Contact Us</span></p>
                </Link>
            </div>
        </div>
    )
}
