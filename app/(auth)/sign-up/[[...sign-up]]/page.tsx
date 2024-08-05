import { SignUp } from "@clerk/nextjs"

const SignUpPage = () => {
    return (
        <main className="auth-page-signup">
            <SignUp />
        </main>
    )
}

export default SignUpPage