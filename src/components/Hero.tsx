import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
const heroImage = "/lovable-uploads/c3d27fec-319b-440e-9464-21a7daf15576.png";
const logoImage = "/lovable-uploads/21cc9dd6-ee06-4e9c-9f55-5ae1d61af1ea.png";

const Hero = () => {
  return (
    <section className="relative bg-black py-20 md:py-24 overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-30">
        <div className="grid grid-cols-8 gap-2 rotate-12">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
          ))}
        </div>
      </div>
      
      {/* Decorative dots pattern - right */}
      <div className="absolute top-20 right-0 w-32 h-32 opacity-20">
        <div className="grid grid-cols-6 gap-2 -rotate-12">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <img 
                src={logoImage}
                alt="ReparaTodo Logo"
                className="w-48 h-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-inter leading-tight text-white">
                REPARACION DE{" "}
                <span className="text-primary">LAVARROPAS</span>{" "}
                Y SECADORA EN BAHIA BLANCA
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                Atención personalizada y técnicos con{" "}
                <span className="text-primary font-semibold">años</span> de{" "}
                <span className="text-primary font-semibold">experiencia</span>
              </p>
            </div>

            {/* Contact Button */}
            <div className="pt-6">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <img 
                src={heroImage}
                alt="Técnico de ReparaTodo reparando lavarropas en Bahía Blanca"
                className="w-full h-[500px] md:h-[600px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;