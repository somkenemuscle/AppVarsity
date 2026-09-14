import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"

export function AccordionFaqs() {
    return (
        <div id="faqs" className="py-24 md:py-28 px-6 md:px-8 bg-[#f8f7f4] border-t border-[#e2e1da]">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display font-medium text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.02em] text-[#292a26]">Frequently asked questions</h2>
                <p className="mt-4 text-[#777970] leading-relaxed text-[15px] max-w-lg mx-auto">
                    Got questions? Find answers to common questions and get the clarity you need for a smooth aptech journey.
                </p>
            </div>

            <div className="mx-auto max-w-3xl mt-12">
                <Accordion type="single" collapsible defaultValue={faqsOnHomepage[0]?.value} className="w-full flex flex-col gap-3">
                    {faqsOnHomepage.map((item) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="group/item bg-[#efeee9] px-6 rounded-2xl border-none transition-colors data-[state=open]:bg-[#eef0fd]"
                        >
                            <AccordionTrigger className="font-sans no-underline hover:no-underline text-[#292a26] font-medium text-[15px] tracking-tight py-5 [&_.accordion-indicator]:border-none [&_.accordion-indicator]:bg-[#141410] [&_.accordion-indicator]:text-white group-data-[state=open]/item:[&_.accordion-indicator]:bg-[#4f46e5]">
                                {item.trigger}
                            </AccordionTrigger>
                            <AccordionContent className="font-sans text-[#5c5e54] tracking-tight text-sm leading-relaxed">{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
