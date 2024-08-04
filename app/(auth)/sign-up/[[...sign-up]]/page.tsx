import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
    return (
        <main className="auth-page mt-36 mb-16">
            <SignUp />
        </main>
    )
}

export default SignUpPage