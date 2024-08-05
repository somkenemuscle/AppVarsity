import { SignIn } from "@clerk/nextjs"

const SignInPage = () => {
    return (
        <main className="auth-page-signin">
            <SignIn />
        </main>
    )
}

export default SignInPage