import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu,
  X
} from "lucide-react";

const EcommerceHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center gap-4">
            <span>Envío gratis en compras mayores a $99</span>
            <Badge variant="secondary" className="text-xs">Nuevo</Badge>
          </div>
          <div className="flex items-center gap-4">
            <span>Soporte 24/7</span>
            <span>•</span>
            <span>Devoluciones fáciles</span>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              TechStore
            </h1>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Buscar productos..." 
                className="pl-10 pr-4 w-full bg-muted/50 border-0 focus:bg-background transition-smooth"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>

            {/* Desktop actions */}
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  3
                </Badge>
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                  2
                </Badge>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 py-3 border-t border-border/50">
          <Button variant="ghost" className="font-medium">Inicio</Button>
          <Button variant="ghost" className="font-medium">Categorías</Button>
          <Button variant="ghost" className="font-medium">Ofertas</Button>
          <Button variant="ghost" className="font-medium">Marcas</Button>
          <Button variant="ghost" className="font-medium">Soporte</Button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-slide-in">
            <div className="flex flex-col gap-4">
              {/* Mobile search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Buscar productos..." 
                  className="pl-10 pr-4 bg-muted/50 border-0"
                />
              </div>
              
              {/* Mobile navigation */}
              <div className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start">Inicio</Button>
                <Button variant="ghost" className="justify-start">Categorías</Button>
                <Button variant="ghost" className="justify-start">Ofertas</Button>
                <Button variant="ghost" className="justify-start">Marcas</Button>
                <Button variant="ghost" className="justify-start">Soporte</Button>
              </div>

              {/* Mobile actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Favoritos (3)
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Mi cuenta
                </Button>
                <Button size="sm" className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4" />
                  Carrito (2)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default EcommerceHeader;