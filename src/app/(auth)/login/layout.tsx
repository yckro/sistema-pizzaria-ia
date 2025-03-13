import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="min-h-screen">
            <ThemeProvider attribute="class" defaultTheme="light">
                {children}
                <Toaster />
            </ThemeProvider>
        </div>
    )
}

