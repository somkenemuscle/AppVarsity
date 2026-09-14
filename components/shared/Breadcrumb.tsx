import {
    Breadcrumb as BreadcrumbComponent, // Renamed to avoid collision
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';


// Breadcrumb component that accepts children
function Breadcrumb({ page, pageSubheading }: { page: string, pageSubheading: string }) {
    return (
        <div className='mb-7'>
            <BreadcrumbComponent>
                <BreadcrumbList className='font-mono text-xs tracking-wide'>
                    <BreadcrumbItem>
                        <BreadcrumbLink className='text-[#8c8e84] hover:text-[#4f46e5] transition-colors' href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-[#c9c8be]' />
                    <BreadcrumbItem>
                        <BreadcrumbLink className='text-[#8c8e84] hover:text-[#4f46e5] transition-colors' href="/resources/introduction">Resources</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-[#c9c8be]' />
                    <BreadcrumbItem className='hidden md:block'>
                        <BreadcrumbPage className='text-[#8c8e84]'>{pageSubheading}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden sm:block text-[#c9c8be]' />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-[#4f46e5]'>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbComponent>
        </div>
    );
}

export default Breadcrumb;
