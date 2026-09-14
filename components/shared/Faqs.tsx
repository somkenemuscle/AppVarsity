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
                    {faqsOnHomepage.map((item, index) => (
                        <AccordionItem
                            key={item.value}
                            value={item.value}
                            className="group/item border border-[#e2e1da] bg-white px-6 rounded-[14px] transition-all data-[state=open]:border-[#4f46e5]/40 data-[state=open]:shadow-[0_8px_24px_rgba(79,70,229,0.08)]"
                        >
                            <AccordionTrigger className="no-underline hover:no-underline text-[#292a26] font-medium text-sm tracking-tight py-5 [&_.accordion-indicator]:text-[#c9c8be] group-data-[state=open]/item:[&_.accordion-indicator]:text-[#4f46e5]">
                                <span className="flex items-baseline gap-3">
                                    <span className="font-mono text-xs text-[#c9c8be]">{String(index + 1).padStart(2, '0')}</span>
                                    {item.trigger}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pl-[30px] text-[#777970] tracking-tight text-sm leading-relaxed">{item.content}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}
