import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"
import Link from "next/link"
import { HelpCircle, Mail } from "lucide-react"

export function AccordionFaqs() {
    return (
        <div id="faqs" className="py-24 md:py-28 px-6 md:px-8 bg-[#f8f7f4] border-t border-[#e2e1da]">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                    <div className="md:sticky md:top-28">
                        <div className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#dcd8ff] text-[#5144c8]">
                            <HelpCircle className="h-5 w-5" />
                        </div>
                        <span className="mt-5 block font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Support</span>
                        <h2 className="mt-3 font-display font-medium text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.02em] text-[#292a26]">Frequently asked questions</h2>
                        <p className="mt-4 text-[#777970] leading-relaxed text-[15px]">
                            Got questions? Find answers to common questions and get the clarity you need for a smooth aptech journey.
                        </p>

                        <Link
                            href="mailto:appvarsitytech@gmail.com"
                            className="group mt-6 flex items-center gap-3 rounded-2xl border border-[#e2e1da] bg-white p-4 transition-colors hover:border-[#c9c8be]"
                        >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efeee9] text-[#4f46e5] transition-colors group-hover:bg-[#4f46e5] group-hover:text-white">
                                <Mail className="h-4 w-4" />
                            </span>
                            <span>
                                <span className="block text-sm font-semibold text-[#292a26]">Still have questions?</span>
                                <span className="block text-xs text-[#777970]">Contact us directly</span>
                            </span>
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-8">
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
        </div>
    )
}
