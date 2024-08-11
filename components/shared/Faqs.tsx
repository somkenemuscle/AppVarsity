import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"


export function AccordionFaqs() {
    return (
            <div className="mt-32 mb-20">
                <div className="mx-auto max-w-2xl px-4 lg:px-8">
                <p className="cursor-pointer font-medium mb-5 sm:text-left text-indigo-500 hover:text-indigo-700 ">Frequently Asked Questions (FAQs)</p>
                    <Accordion type="single" collapsible className="w-full">
                        {faqsOnHomepage.map((item) => (
                            <AccordionItem key={item.value} value={item.value}>
                                <AccordionTrigger className="no-underline hover:no-underline">{item.trigger}</AccordionTrigger>
                                <AccordionContent>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                    <p className="cursor-pointer font-medium mt-9 sm:text-left text-indigo-500 hover:text-indigo-700 ">See More FAQs  <span aria-hidden="true">→</span></p>
                </div>
            </div>
    )
}
