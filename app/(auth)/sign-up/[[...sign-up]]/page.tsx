import { SignUp } from "@clerk/nextjs"
import { clerkAppearance } from "@/lib/clerkAppearance"

const SignUpPage = () => {
    return (
        <SignUp appearance={clerkAppearance} />
    )
}

export default SignUpPage
