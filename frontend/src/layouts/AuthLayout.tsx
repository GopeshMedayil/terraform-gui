type AuthLayoutProps = {
    children: React.ReactNode

}
const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                {children}
            </div>

        </div>
    );
}

export default AuthLayout;