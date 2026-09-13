import { SignIn } from "@clerk/nextjs"
import { clerkAppearance } from "@/lib/clerkAppearance"

const SignInPage = () => {
    return (
        <SignIn appearance={clerkAppearance} />
    )
}

export default SignInPage
