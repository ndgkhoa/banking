import Image from 'next/image'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="flex min-h-screen w-full justify-between font-inter">
            {children}
            <div className="auth-asset">
                <div>
                    <Image
                        // src="https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJhbmt8ZW58MHx8MHx8fDA%3D"
                        src="icons/auth-image.svg"
                        alt="Auth image"
                        layout="responsive"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </main>
    )
}
