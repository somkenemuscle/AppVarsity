import Image from "next/image"

interface FramedImageProps {
    src: string
    alt: string
    className?: string
}

export default function FramedImage({ src, alt, className = "" }: FramedImageProps) {
    return (
        <div className={`w-full mt-7 rounded-xl border border-[#e2e1da] overflow-hidden dark:border-[#26271f] ${className}`}>
            <Image alt={alt} priority width={1200} height={800} src={src} className="w-full" />
        </div>
    )
}
