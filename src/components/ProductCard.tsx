import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    reviews: number;
    badge?: string;
    inStock: boolean;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card 
      className="group overflow-hidden border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 bg-gradient-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <Badge className="bg-primary/90 text-primary-foreground border-0">
                {product.badge}
              </Badge>
            )}
            {discount > 0 && (
              <Badge className="bg-destructive/90 text-destructive-foreground border-0">
                -{discount}%
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="outline" className="bg-muted/90 text-muted-foreground border-border/50">
                Agotado
              </Badge>
            )}
          </div>

          {/* Action buttons */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <Button 
              size="icon" 
              variant="secondary"
              className="h-8 w-8 bg-card/90 backdrop-blur-md hover:bg-card shadow-card"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-4 w-4 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary"
              className="h-8 w-8 bg-card/90 backdrop-blur-md hover:bg-card shadow-card"
            >
              <Eye className="h-4 w-4" />
            </Button>
          </div>

          {/* Stock indicator */}
          {product.inStock && (
            <div className="absolute bottom-3 left-3">
              <div className="flex items-center gap-2 bg-card/90 backdrop-blur-md rounded-full px-3 py-1 shadow-card">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                <span className="text-xs font-medium">Disponible</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${
                    i < Math.floor(product.rating) 
                      ? 'text-yellow-500 fill-yellow-500' 
                      : 'text-muted-foreground'
                  }`} 
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviews})
            </span>
          </div>

          {/* Product name */}
          <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Add to cart button */}
          <Button 
            className="w-full transition-all duration-300 group-hover:shadow-elegant"
            disabled={!product.inStock}
            size="sm"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.inStock ? 'Agregar al carrito' : 'No disponible'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;