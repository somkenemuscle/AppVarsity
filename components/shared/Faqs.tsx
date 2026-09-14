'use client'

import { motion } from "framer-motion"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"

const chipStyles = [
    { row: "bg-[#f2f1fc] dark:bg-[#211f2e]", border: "border-[#dcd8ff] dark:border-[#2c2a3d]", badge: "bg-[#dcd8ff] text-[#5144c8]" },
    { row: "bg-[#eef8f2] dark:bg-[#132019]", border: "border-[#cceedd] dark:border-[#17281f]", badge: "bg-[#cceedd] text-[#1f7a56]" },
    { row: "bg-[#eef4fd] dark:bg-[#111a2c]", border: "border-[#dbeafe] dark:border-[#16213a]", badge: "bg-[#dbeafe] text-[#1d4ed8]" },
    { row: "bg-[#fdf7e8] dark:bg-[#241d0c]", border: "border-[#ffe9af] dark:border-[#302711]", badge: "bg-[#ffe9af] text-[#8a6a12]" },
]

export function AccordionFaqs() {
    return (
        <div id="faqs" className="py-24 md:py-28 px-6 md:px-8 bg-[#f8f7f4] border-t border-[#e2e1da] dark:bg-[#131412] dark:border-[#26271f]">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-3xl text-center"
            >
                <h2 className="font-display font-medium text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.02em] text-[#292a26] dark:text-[#f4f2ec]">Frequently asked questions</h2>
                <p className="mt-3 text-[#777970] leading-relaxed text-sm max-w-md mx-auto dark:text-[#9a9c8d]">
                    Find answers to common questions about your aptech journey.
                </p>
            </motion.div>

            <div className="mx-auto max-w-3xl mt-12">
                <Accordion type="single" collapsible defaultValue={faqsOnHomepage[0]?.value} className="w-full flex flex-col gap-3">
                    {faqsOnHomepage.map((item, index) => {
                        const style = chipStyles[index % chipStyles.length]
                        return (
                            <motion.div
                                key={item.value}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4, delay: index * 0.08 }}
                            >
                                <AccordionItem
                                    value={item.value}
                                    className={`group/item ${style.row} ${style.border} px-7 rounded-[24px] border shadow-[0_1px_2px_rgba(41,42,38,0.03)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-16px_rgba(41,42,38,0.16)] dark:shadow-none dark:hover:shadow-none`}
                                >
                                    <AccordionTrigger className="font-sans no-underline hover:no-underline text-[#292a26] font-semibold text-base tracking-[-0.01em] py-6 [&_.accordion-indicator]:border-none [&_.accordion-indicator]:bg-[#141410] [&_.accordion-indicator]:text-white dark:text-[#f4f2ec] dark:[&_.accordion-indicator]:bg-[#f4f2ec] dark:[&_.accordion-indicator]:text-[#141410]">
                                        {item.trigger}
                                    </AccordionTrigger>
                                    <AccordionContent className="font-sans text-[#5c5e54] text-[15px] font-light leading-[1.7] dark:text-[#9a9c8d]">{item.content}</AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}
