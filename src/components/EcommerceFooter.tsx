import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from "lucide-react";

const EcommerceFooter = () => {
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter section */}
      <div className="bg-gradient-primary">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">
              Mantente al día con las últimas ofertas
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Suscríbete a nuestro newsletter y recibe descuentos exclusivos, 
              nuevos productos y ofertas especiales directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Tu email aquí..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
              />
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Suscribirse
              </Button>
            </div>
            <p className="text-xs text-white/60 mt-3">
              Al suscribirte aceptas recibir emails promocionales. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </div>

      {/* Trust indicators */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Truck,
                title: "Envío gratis",
                description: "En compras mayores a $99"
              },
              {
                icon: RotateCcw,
                title: "Devoluciones fáciles",
                description: "30 días para devolver"
              },
              {
                icon: Shield,
                title: "Compra segura",
                description: "Protección SSL garantizada"
              },
              {
                icon: CreditCard,
                title: "Pago seguro",
                description: "Múltiples métodos de pago"
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
                <div>
                  <h4 className="font-semibold text-sm">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              TechStore
            </h3>
            <p className="text-muted-foreground text-sm">
              Tu tienda de confianza para la mejor tecnología. 
              Innovación, calidad y servicio excepcional desde 2020.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button 
                  key={index}
                  variant="ghost" 
                  size="icon" 
                  className="hover:text-primary hover:bg-primary/10"
                >
                  <Icon className="h-4 w-4" />
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="text-xs">Certificado SSL</Badge>
              <Badge variant="outline" className="text-xs">Empresa verificada</Badge>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Enlaces rápidos</h4>
            <div className="space-y-2 text-sm">
              {[
                "Sobre nosotros",
                "Nuestras marcas",
                "Ofertas especiales",
                "Programa de afiliados",
                "Trabaja con nosotros",
                "Prensa"
              ].map((link) => (
                <div key={link}>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Customer service */}
          <div className="space-y-4">
            <h4 className="font-semibold">Atención al cliente</h4>
            <div className="space-y-2 text-sm">
              {[
                "Centro de ayuda",
                "Cómo comprar",
                "Métodos de pago",
                "Envíos y devoluciones",
                "Garantías",
                "Contacto"
              ].map((link) => (
                <div key={link}>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    {link}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">+1 (555) 123-4567</div>
                  <div className="text-muted-foreground">Lun-Vie 9AM-6PM</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">soporte@techstore.com</div>
                  <div className="text-muted-foreground">Respuesta en 24h</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <div className="font-medium">Ciudad Tech, CT 12345</div>
                  <div className="text-muted-foreground">Tienda física disponible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              © 2024 TechStore. Todos los derechos reservados.
            </div>
            <div className="flex items-center gap-6">
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Términos de servicio
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Política de privacidad
              </Button>
              <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                Cookies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default EcommerceFooter;