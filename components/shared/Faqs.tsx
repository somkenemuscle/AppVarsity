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
        <div id="faqs" className="py-24 px-6 md:px-8 bg-[#f8f7f4] border-t border-[#e2e1da]">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                    <div className="md:sticky md:top-32">
                        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#4f46e5]">Support</span>
                        <h2 className="mt-3 font-display font-[650] text-[clamp(30px,3.6vw,40px)] leading-[1.1] tracking-[-0.02em] text-[#292a26]">Frequently asked questions</h2>
                        <p className="mt-4 text-[#777970] leading-relaxed text-[15px]">
                            Got questions? Find answers to common questions and get the clarity you need for a smooth aptech journey.
                        </p>
                        <Link href="mailto:appvarsitytech@gmail.com">
                            <p className="mt-6 text-sm text-[#777970]">
                                Have more questions? <span className="underline text-[#292a26] font-medium">Contact us</span>
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="md:col-span-8">
                    <Accordion type="single" collapsible defaultValue={faqsOnHomepage[0]?.value} className="w-full flex flex-col gap-3">
                        {faqsOnHomepage.map((item) => (
                            <AccordionItem
                                key={item.value}
                                value={item.value}
                                className="border border-[#e2e1da] bg-white px-6 rounded-[14px] data-[state=open]:border-[#4f46e5]/40 transition-all"
                            >
                                <AccordionTrigger className="no-underline hover:no-underline text-[#292a26] font-medium text-sm tracking-tight py-5">
                                    {item.trigger}
                                </AccordionTrigger>
                                <AccordionContent className="text-[#777970] tracking-tight text-sm leading-relaxed">{item.content}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    )
}
