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
        <div id="faqs" className="mt-32 mb-20">
            <div className="mx-auto max-w-2xl px-8">
                <p className="cursor-pointer font-medium mb-5 text-left md:text-center text-orange-500 hover:text-orange-500 ">Frequently Asked Questions (FAQs)</p>
                <Accordion type="single" collapsible className="w-full">
                    {faqsOnHomepage.map((item) => (
                        <AccordionItem key={item.value} value={item.value}>
                            <AccordionTrigger className="no-underline hover:no-underline">{item.trigger}</AccordionTrigger>
                            <AccordionContent>{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <Link href="mailto:appvarsitytech@gmail.com" >
                    <p className="cursor-pointer font-medium mt-9 sm:text-left text-indigo-500 hover:text-indigo-700 ">Ask A Question <span aria-hidden="true">→</span></p>
                </Link>
            </div>
        </div>
    )
}
