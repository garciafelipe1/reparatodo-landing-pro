import { WashingMachine, Zap, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: WashingMachine,
    title: "Reparación de Lavarropas",
    description: "Todas las marcas y modelos. Carga frontal y superior. Diagnóstico gratuito.",
    features: ["Samsung", "LG", "Whirlpool", "Drean", "Gafa", "Todas las marcas"]
  },
  {
    icon: Zap,
    title: "Reparación de Electrodomésticos",
    description: "Heladeras, microondas, hornos, lavavajillas y más. Técnicos especializados.",
    features: ["Heladeras", "Microondas", "Hornos", "Lavavajillas", "Aires acondicionados"]
  },
  {
    icon: Settings,
    title: "Herramientas Eléctricas",
    description: "Taladros, amoladoras, soldadoras y todo tipo de herramientas de trabajo.",
    features: ["Taladros", "Amoladoras", "Soldadoras", "Lijadoras", "Compresores"]
  },
  {
    icon: Home,
    title: "Reparaciones Domiciliarias",
    description: "Instalaciones eléctricas, plomería básica y mantenimiento general del hogar.",
    features: ["Electricidad", "Plomería", "Cerrajería", "Mantenimiento", "Instalaciones"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para tu hogar. Técnicos especializados en cada área.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-accent/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ¿No encontrás lo que buscás?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Consultanos por cualquier reparación. Tenemos solución para todo tipo de electrodomésticos y herramientas.
            </p>
            <Button 
              variant="action" 
              size="lg"
              onClick={() => window.open('tel:2915049400')}
            >
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;