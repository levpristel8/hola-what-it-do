import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Truck, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-ecommerce.jpg";

const EcommerceHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                🚀 Nueva colección disponible
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                La mejor
                <span className="gradient-primary bg-clip-text text-transparent block">
                  tecnología
                </span>
                para tu vida
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Descubre nuestra selección premium de productos tecnológicos con las mejores marcas 
                y garantía extendida. Innovación que trasciende.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                <span>4.9/5 valoración</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-success" />
                <span>Envío gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Garantía 2 años</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group shadow-elegant hover:shadow-glow transition-all duration-300"
              >
                Ver productos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5 hover:border-primary/40"
              >
                <Clock className="mr-2 h-4 w-4" />
                Ofertas del día
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-white text-sm font-medium"
                  >
                    U{i}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center text-muted-foreground text-xs">
                  +2k
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">2,543 clientes</span> ya confían en nosotros
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Productos tecnológicos premium" 
                className="w-full h-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500"
              />
              
              {/* Floating elements */}
              <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-md rounded-xl p-3 shadow-card animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium">En stock</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-md rounded-xl p-4 shadow-card animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                  -30%
                </div>
                <div className="text-xs text-muted-foreground">Descuento especial</div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-card rounded-2xl transform rotate-6 opacity-20 -z-10" />
            <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform -rotate-3 opacity-10 -z-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceHero;