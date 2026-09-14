import Breadcrumb from "@/components/shared/Breadcrumb"

interface PageHeaderProps {
    title: string
    page: string
    pageSubheading: string
    description?: string
}

export default function PageHeader({ title, page, pageSubheading, description }: PageHeaderProps) {
    return (
        <div className="mb-8">
            <Breadcrumb page={page} pageSubheading={pageSubheading} />
            <h1 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-[#292a26] mb-3 dark:text-[#f4f2ec]">{title}</h1>
            {description && (
                <p className="text-[#777970] font-light leading-relaxed max-w-2xl dark:text-[#9a9c8d]">{description}</p>
            )}
        </div>
    )
}
