import Test from './test'

const posts = [
    {
        id: 1,
        description:
            'Can anyone provide detailed instructions on how to install and access digital textbooks through Online Varsity? I’m facing difficulties navigating the platform and would appreciate a step-by-step guide or any troubleshooting tips you might have. Thank you in advance for your help!',
        date: 'Apr 5, 2024',
        datetime: '2024-04-05',
        author: {
            name: 'Emma Johnson',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    },
    {
        id: 2,
        description:
            'I’m having trouble understanding how to download and install my e-books from the Online Varsity platform. Could someone explain the process in detail or provide a guide that covers all the steps from accessing the platform to successfully installing the books? Any additional tips for common issues would be greatly appreciated.',
        date: 'Apr 6, 2024',
        datetime: '2024-04-06',
        author: {
            name: 'Liam Smith',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    },
    {
        id: 3,
        description:
            'I’m currently trying to install my textbooks via Online Varsity but am encountering several issues. Can anyone provide a comprehensive explanation of how to complete this process? It would be helpful to include information on any potential obstacles or common mistakes that might occur during installation. Thanks for your assistance!',
        date: 'Apr 7, 2024',
        datetime: '2024-04-07',
        author: {
            name: 'Olivia Davis',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 4,
        description:
            'Does anyone have a detailed guide on how to install digital books from Online Varsity? I’ve been struggling with the process and would greatly benefit from a clear, step-by-step tutorial or any advice on overcoming common issues that might arise during installation. Any help would be greatly appreciated!',
        date: 'Apr 8, 2024',
        datetime: '2024-04-08',
        author: {
            name: 'Noah Wilson',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 5,
        description:
            'I’m looking for a detailed explanation of how to download and set up textbooks from Online Varsity. If anyone has a comprehensive guide or can provide some insights into the common pitfalls and solutions, it would be extremely helpful. I’m currently experiencing issues and need a thorough understanding to resolve them effectively.',
        date: 'Apr 9, 2024',
        datetime: '2024-04-09',
        author: {
            name: 'Sophia Brown',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    }
    // More posts...
]


export default function InteractCard() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                            <div className="relative mt-8 flex items-center gap-x-4">
                                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href='/'>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">
                                        <time dateTime={post.datetime} className="text-gray-500">
                                            {post.date}
                                        </time></p>
                                </div>
                            </div>
                            <div className="group relative">
                                <p className="mt-5 line-clamp-4 text-sm leading-6 text-gray-600">{post.description}</p>
                            </div>
                            <div className="mt-4">
                                <Test />
                                <button className="ml-5  text-sm text-blue-600 hover:underline">
                                    Reply
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
