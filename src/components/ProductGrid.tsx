import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, Grid3X3, List, SlidersHorizontal } from "lucide-react";
import productShowcase from "@/assets/products-showcase.jpg";

const sampleProducts = [
  {
    id: "1",
    name: "iPhone 15 Pro Max 256GB Titanio Natural",
    price: 1299.99,
    originalPrice: 1499.99,
    image: productShowcase,
    rating: 4.8,
    reviews: 2543,
    badge: "Más vendido",
    inStock: true
  },
  {
    id: "2", 
    name: "MacBook Air M3 13\" 512GB Gris Espacial",
    price: 1599.99,
    originalPrice: 1799.99,
    image: productShowcase,
    rating: 4.9,
    reviews: 1876,
    badge: "Nuevo",
    inStock: true
  },
  {
    id: "3",
    name: "iPad Pro 12.9\" M4 1TB Wi-Fi + Cellular",
    price: 1899.99,
    image: productShowcase,
    rating: 4.7,
    reviews: 987,
    badge: "Premium",
    inStock: false
  },
  {
    id: "4",
    name: "AirPods Pro 3ra Generación con USB-C",
    price: 249.99,
    originalPrice: 299.99,
    image: productShowcase,
    rating: 4.6,
    reviews: 3421,
    inStock: true
  },
  {
    id: "5",
    name: "Apple Watch Series 10 GPS + Cellular 45mm",
    price: 499.99,
    originalPrice: 599.99,
    image: productShowcase,
    rating: 4.8,
    reviews: 1654,
    badge: "Oferta",
    inStock: true
  },
  {
    id: "6",
    name: "Mac Studio M4 Max 64GB RAM 1TB SSD",
    price: 3999.99,
    image: productShowcase,
    rating: 4.9,
    reviews: 432,
    badge: "Pro",
    inStock: true
  }
];

const ProductGrid = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 animate-fade-in">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Productos destacados
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Descubre nuestra
            <span className="gradient-primary bg-clip-text text-transparent"> selección premium</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Los productos más innovadores y populares seleccionados especialmente para ti. 
            Calidad garantizada y las mejores marcas del mercado.
          </p>
        </div>

        {/* Filters and view options */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filtros
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Ordenar por
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Ver como:</span>
            <div className="flex rounded-lg border border-border overflow-hidden">
              <Button variant="ghost" size="sm" className="rounded-none border-r border-border bg-primary/5">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-none">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {sampleProducts.map((product, index) => (
            <div 
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/20 hover:bg-primary/5 hover:border-primary/40"
          >
            Cargar más productos
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border/50">
          {[
            { number: "10,000+", label: "Productos disponibles" },
            { number: "50,000+", label: "Clientes satisfechos" },
            { number: "99.9%", label: "Disponibilidad garantizada" },
            { number: "24/7", label: "Soporte técnico" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in"
              style={{ animationDelay: `${0.8 + 0.1 * index}s` }}
            >
              <div className="text-2xl lg:text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;