"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MenuIcon as RestaurantIcon } from "lucide-react"
import Link from "next/link"
import { setCookie } from "cookies-next"

export default function LoginPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const redirectTo = searchParams.get("redirectTo") || "/"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState<"admin" | "customer">("customer")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        // Na vida real, faríamos autenticação com backend
        // Este é apenas um exemplo demonstrativo

        // Simulação: admin@restaurante.com para admin, qualquer outro é cliente
        const isAdmin = email === "admin@restaurante.com"
        const userRole = isAdmin ? "admin" : "customer"

        // Salva token e papel do usuário nos cookies
        setCookie("auth-token", "demo-token-12345", { maxAge: 60 * 60 * 24 * 7 }) // 7 dias
        setCookie("user-role", userRole, { maxAge: 60 * 60 * 24 * 7 })

        // Redireciona para o destino original ou default baseado no papel
        if (userRole === "admin") {
            router.push(redirectTo || "/")
        } else {
            router.push("/menu/public")
        }
    }

    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <div className="flex justify-center mb-4">
                        <RestaurantIcon className="h-12 w-12 text-primary" />
                    </div>
                    <h1 className="text-2xl font-semibold tracking-tight">RestauranTech</h1>
                    <p className="text-sm text-muted-foreground">Entre com sua conta para acessar o sistema</p>
                </div>

                <Card>
                    <form onSubmit={handleLogin}>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Use admin@restaurante.com como email para acesso completo</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="seu@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Senha</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="w-full">
                                Entrar
                            </Button>
                        </CardFooter>
                    </form>
                </Card>

                <div className="text-center text-sm">
                    <Link href="/menu/public" className="text-primary hover:underline">
                        Ver cardápio como convidado
                    </Link>
                </div>
            </div>
        </div>
    )
}

