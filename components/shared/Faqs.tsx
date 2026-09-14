import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqsOnHomepage } from "@/constants/faqsOnHomePage"

const chipStyles = [
    { row: "bg-[#f2f1fc]", border: "border-[#dcd8ff]", badge: "bg-[#dcd8ff] text-[#5144c8]" },
    { row: "bg-[#eef8f2]", border: "border-[#cceedd]", badge: "bg-[#cceedd] text-[#1f7a56]" },
    { row: "bg-[#eef4fd]", border: "border-[#dbeafe]", badge: "bg-[#dbeafe] text-[#1d4ed8]" },
    { row: "bg-[#fdf7e8]", border: "border-[#ffe9af]", badge: "bg-[#ffe9af] text-[#8a6a12]" },
]

export function AccordionFaqs() {
    return (
        <div id="faqs" className="py-24 md:py-28 px-6 md:px-8 bg-[#f8f7f4] border-t border-[#e2e1da]">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-display font-medium text-[clamp(24px,2.8vw,32px)] leading-[1.15] tracking-[-0.02em] text-[#292a26]">Frequently asked questions</h2>
                <p className="mt-3 text-[#777970] leading-relaxed text-sm max-w-md mx-auto">
                    Find answers to common questions about your aptech journey.
                </p>
            </div>

            <div className="mx-auto max-w-3xl mt-12">
                <Accordion type="single" collapsible defaultValue={faqsOnHomepage[0]?.value} className="w-full flex flex-col gap-3">
                    {faqsOnHomepage.map((item, index) => {
                        const style = chipStyles[index % chipStyles.length]
                        return (
                            <AccordionItem
                                key={item.value}
                                value={item.value}
                                className={`group/item ${style.row} ${style.border} px-6 rounded-2xl border transition-all hover:shadow-[0_4px_16px_rgba(41,42,38,0.06)] data-[state=open]:border-[#c7cbf5] data-[state=open]:bg-[#eef0fd]`}
                            >
                                <AccordionTrigger className="font-sans no-underline hover:no-underline text-[#292a26] font-medium text-[15px] tracking-tight py-5 [&_.accordion-indicator]:border-none [&_.accordion-indicator]:bg-[#141410] [&_.accordion-indicator]:text-white group-data-[state=open]/item:[&_.accordion-indicator]:bg-[#4f46e5]">
                                    <span className="flex items-center gap-3">
                                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-mono text-xs font-semibold ${style.badge}`}>
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        {item.trigger}
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="pl-10 font-sans text-[#5c5e54] tracking-tight text-sm leading-relaxed">{item.content}</AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    )
}
