import type { Appearance } from "@clerk/types"

export const clerkAppearance: Appearance = {
    variables: {
        colorPrimary: "#4f46e5",
        colorBackground: "#ffffff",
        colorInputBackground: "#f9fafb",
        colorInputText: "#111827",
        colorText: "#111827",
        colorTextSecondary: "#6b7280",
        borderRadius: "0.75rem",
        fontFamily: "var(--font-sans)",
    },
    elements: {
        rootBox: "w-full",
        card: "shadow-none border-0 p-0 w-full",
        headerTitle: "text-2xl font-bold text-gray-900 font-display",
        headerSubtitle: "text-gray-500",
        socialButtonsBlockButton: "border border-gray-200 hover:bg-gray-50 rounded-full py-3",
        socialButtonsBlockButtonText: "font-medium text-sm",
        formButtonPrimary: "bg-indigo-600 hover:bg-indigo-500 text-sm normal-case rounded-full py-3",
        footerActionLink: "text-indigo-600 hover:text-indigo-500 font-medium",
        formFieldInput: "bg-gray-50 border-gray-200 rounded-xl py-3",
        formFieldLabel: "text-gray-700 font-medium",
        dividerLine: "bg-gray-200",
        dividerText: "text-gray-400",
        footer: "bg-transparent",
        identityPreviewEditButton: "text-indigo-600",
    },
}
