import { WashingMachine, Zap, Home, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";



const services = [
  {
    image: "/lovable-uploads/lavarropas.jpg",
    title: "Lavarropas",
    description: "Todas las marcas y modelos. Carga frontal y superior. Diagnóstico gratuito."
  },
  {
    image: "/lovable-uploads/electrodomesticos.webp",
    title: "Electrodomésticos",
    description: "Heladeras, cocinas, microondas, aires acondicionados y más. Técnicos especializados."
  },
  {
    image: "/lovable-uploads/herramientas.webp",
    title: "Herramientas",
    description: "Soldadoras, taladros, amoladoras y más. Reparación y mantenimiento de herramientas eléctricas."
  },
  {
    image: "/lovable-uploads/hoogar.webp",
    title: "Reparaciones del Hogar",
    description: "Calderas, termotanques, bombas de agua y más. Soluciones rápidas y efectivas para tu hogar."
  }

];
const Services = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Decorative dots - Left side */}
      <div className="absolute inset-0 opacity-75">
        <div className="absolute top-4 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 left-14 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-4 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-16 left-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 left-8 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-24 left-22 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-28 left-2 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-32 left-16 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-36 left-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-40 left-24 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 left-12 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 left-20 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 left-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 left-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        
        {/* Decorative dots - Right side (symmetric) */}
        <div className="absolute top-4 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 right-14 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-12 right-4 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-16 right-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-24 right-22 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-28 right-2 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-32 right-16 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-36 right-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-24 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 right-12 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 right-20 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 right-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 right-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
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
              <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-30 h-30 object-contain"
                />
              </div>
              <h3 className="text-sm font-bold text-primary uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-white text-base leading-relaxed">
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