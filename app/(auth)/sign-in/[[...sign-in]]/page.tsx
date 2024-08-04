import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
    return (
        <main className="auth-page mt-14 mb-16">
            <SignIn />
        </main>
    )
}

export default SignInPage