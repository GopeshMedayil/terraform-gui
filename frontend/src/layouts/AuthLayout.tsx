type AuthLayoutProps = {
    children: React.ReactNode

}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
            <div className="w-full max-w-7xl min-h-screen mx-auto p-8 bg-white flex flex-col justify-center items-center">
                {children}
            </div>
    );
}

export default AuthLayout;