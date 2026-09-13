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
                        <BreadcrumbLink className='text-gray-500 hover:text-indigo-400 transition-colors' href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-gray-700' />
                    <BreadcrumbItem>
                        <BreadcrumbLink className='text-gray-500 hover:text-indigo-400 transition-colors' href="/resources/introduction">Resources</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='text-gray-700' />
                    <BreadcrumbItem className='hidden md:block'>
                        <BreadcrumbPage className='text-gray-500'>{pageSubheading}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden sm:block text-gray-700' />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-indigo-400'>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbComponent>
        </div>
    );
}

export default Breadcrumb;
