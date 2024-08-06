import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SlideIn from "./SlideIn"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"


export function AccordionFaqs() {

    return (
        <SlideIn direction='bottom'>
            <div className="mt-32 mb-20">
                <div className="mx-auto max-w-2xl px-4 lg:px-8">
                    <p className="font-semibold text-2xl mb-9 sm:text-left font-mono"> FAQs <span className="font-extralight text-slate-600" aria-hidden="true">→</span></p>
                    <Accordion type="single" collapsible className="w-full">
                        {faqsOnHomepage.map((item) => (
                            <AccordionItem key={item.value} value={item.value}>
                                <AccordionTrigger>{item.trigger}</AccordionTrigger>
                                <AccordionContent>{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </SlideIn>
    )
}
