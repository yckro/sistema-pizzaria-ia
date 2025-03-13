import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { TabsContent, Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Dados simulados para categorias e produtos
const categories = [
    { id: "1", name: "Entradas" },
    { id: "2", name: "Pratos Principais" },
    { id: "3", name: "Sobremesas" },
    { id: "4", name: "Bebidas" },
]

const products = [
    {
        id: "1",
        categoryId: "1",
        name: "Bruschetta",
        description: "Pão italiano tostado com tomate, alho, manjericão e azeite",
        price: 18.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "2",
        categoryId: "1",
        name: "Palitos de Queijo",
        description: "Palitos de massa folhada com queijo parmesão gratinado",
        price: 22.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "3",
        categoryId: "2",
        name: "Risoto de Funghi",
        description: "Arroz arbóreo cremoso com mix de cogumelos e parmesão",
        price: 48.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "4",
        categoryId: "2",
        name: "Filé ao Molho Madeira",
        description: "Medalhão de filé mignon com molho madeira e batatas rústicas",
        price: 55.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "5",
        categoryId: "2",
        name: "Salmão Grelhado",
        description: "Filé de salmão grelhado com ervas, acompanha purê de batata",
        price: 62.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "6",
        categoryId: "3",
        name: "Petit Gateau",
        description: "Bolo quente de chocolate com interior cremoso, sorvete de creme",
        price: 25.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "7",
        categoryId: "3",
        name: "Pudim de Leite",
        description: "Pudim de leite condensado tradicional com calda de caramelo",
        price: 18.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "8",
        categoryId: "4",
        name: "Suco Natural",
        description: "Suco de frutas naturais. Opções: laranja, limão, abacaxi ou maracujá",
        price: 9.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
    {
        id: "9",
        categoryId: "4",
        name: "Refrigerante",
        description: "Lata 350ml de Coca-Cola, Guaraná Antarctica, Sprite ou Fanta",
        price: 6.9,
        imageUrl: "/placeholder.svg?height=150&width=200",
    },
]

export default function PublicMenuPage() {
    return (
        <div className="container py-6 md:py-12">
            <header className="mb-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Nosso Cardápio</h1>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Experimente nossas deliciosas opções preparadas com ingredientes frescos e de alta qualidade
                </p>
            </header>

            <Tabs defaultValue={categories[0].id} className="w-full">
                <TabsList className="mb-8 flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <TabsTrigger key={category.id} value={category.id} className="text-base">
                            {category.name}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map((category) => (
                    <TabsContent key={category.id} value={category.id} className="space-y-8">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {products
                                .filter((product) => product.categoryId === category.id)
                                .map((product) => (
                                    <Card key={product.id} className="overflow-hidden flex flex-col">
                                        <div className="relative h-48 w-full">
                                            <Image
                                                src={product.imageUrl || "/placeholder.svg"}
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle>{product.name}</CardTitle>
                                            <CardDescription>R$ {product.price.toFixed(2)}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground">{product.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">
                                                <ShoppingBag className="mr-2 h-4 w-4" />
                                                Adicionar ao Pedido
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>

            <div className="mt-12 text-center">
                <Button asChild variant="outline" size="lg">
                    <Link href="/login">Área de Administração</Link>
                </Button>
            </div>
        </div>
    )
}

