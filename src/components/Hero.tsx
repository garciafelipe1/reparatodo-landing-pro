import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted to-accent/20 py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
                <span className="text-2xl">🧰</span>
                <span className="text-accent-foreground font-medium">ReparaTodo</span>
                <span className="text-2xl">🛠️</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight">
                <span className="text-foreground">Reparaciones</span>{" "}
                <span className="bg-gradient-to-r from-primary to-primary-hover bg-clip-text text-transparent">
                  Profesionales
                </span>{" "}
                <span className="text-foreground">a Domicilio</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Técnicos especializados, servicio garantizado y precios justos. 
                Solucionamos tus problemas de electrodomésticos con rapidez y confianza.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold">2915049400</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>Lun-Vie 10-18hs</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>A domicilio</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="action" 
                size="lg"
                className="text-lg font-semibold"
                onClick={() => window.open('tel:2915049400')}
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg font-medium"
                onClick={() => window.open('https://wa.me/5492915049400')}
              >
                Solicitar Presupuesto
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-card)] bg-card">
              <img 
                src={heroImage}
                alt="Técnico profesional reparando electrodomésticos"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-action text-action-foreground px-6 py-4 rounded-2xl shadow-[var(--shadow-action)]">
              <div className="text-center">
                <div className="text-2xl font-bold">+10</div>
                <div className="text-sm opacity-90">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;