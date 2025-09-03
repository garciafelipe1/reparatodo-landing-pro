import { WashingMachine, Zap, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: WashingMachine,
    title: "De Lavarropas",
    description: "Todas las marcas y modelos. Carga frontal y superior. Diagnóstico gratuito."
  },
  {
    icon: Zap,
    title: "De Electrodomésticos",
    description: "Heladeras, microondas, hornos, lavavajillas y más. Técnicos especializados."
  },
  {
    icon: Settings,
    title: "Herramientas Eléctricas",
    description: "Taladros, amoladoras, soldadoras y todo tipo de herramientas de hogar."
  },
  {
    icon: Home,
    title: "Reparaciones Generales",
    description: "Instalaciones eléctricas, plomería básica y mantenimiento general del hogar."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-6 left-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 left-12 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-8 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-16 right-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 left-6 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 right-8 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 right-4 w-1.5 h-1.5 bg-primary rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            NUESTROS
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            SERVICIOS
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Soluciones integrales para tu hogar. Técnicos especializados en cada área.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-sm font-bold text-primary uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-white text-xs leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;