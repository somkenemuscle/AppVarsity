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
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className='text-gray-400 hover:text-gray-200' href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink className='text-gray-400 hover:text-gray-200' href="/resources/introduction">Resources</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem className='hidden md:block'>
                        <BreadcrumbPage className='text-gray-400'>{pageSubheading}</BreadcrumbPage>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className='hidden sm:block' />
                    <BreadcrumbItem>
                        <BreadcrumbPage className='text-white'>{page}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </BreadcrumbComponent>
        </div>
    );
}

export default Breadcrumb;
