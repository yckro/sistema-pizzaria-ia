import type React from "react"
import { CustomerNav } from "@/components/customer/customer-nav"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

export default function CustomerLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="min-h-screen">
            <ThemeProvider attribute="class" defaultTheme="light">
                <CustomerNav />
                <main>{children}</main>
                <Toaster />
            </ThemeProvider>
        </div>
    )
}

