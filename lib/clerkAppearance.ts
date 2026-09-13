import type { Appearance } from "@clerk/types"

export const clerkAppearance: Appearance = {
    variables: {
        colorPrimary: "#4f46e5",
        colorBackground: "#131412",
        colorInputBackground: "#1b1c18",
        colorInputText: "#f4f2ec",
        colorText: "#f4f2ec",
        colorTextSecondary: "#9a9c8d",
        borderRadius: "0.75rem",
        fontFamily: "var(--font-sans)",
    },
    elements: {
        rootBox: "w-full",
        card: "shadow-none border-0 p-0 w-full",
        headerTitle: "text-2xl font-bold text-[#f4f2ec] font-display",
        headerSubtitle: "text-[#9a9c8d]",
        socialButtonsBlockButton: "border border-[#26271f] hover:bg-[#1f2018] rounded-full py-3",
        socialButtonsBlockButtonText: "font-medium text-sm",
        formButtonPrimary: "bg-indigo-600 hover:bg-indigo-500 text-sm normal-case rounded-full py-3",
        footerActionLink: "text-indigo-400 hover:text-indigo-300 font-medium",
        formFieldInput: "bg-[#1b1c18] border-[#26271f] rounded-xl py-3",
        formFieldLabel: "text-[#b8baaf] font-medium",
        dividerLine: "bg-[#26271f]",
        dividerText: "text-[#8c8e84]",
        footer: "bg-transparent",
        identityPreviewEditButton: "text-indigo-400",
    },
}
