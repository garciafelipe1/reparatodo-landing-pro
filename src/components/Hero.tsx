import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
const heroImage = "/lovable-uploads/c3d27fec-319b-440e-9464-21a7daf15576.png";
const logoImage = "/lovable-uploads/logo.png";

const Hero = () => {
  return (
    <section className="relative bg-black py-20 md:py-24 overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-75">
        {/* Large grid patterns */}
        <div className="absolute bottom-0 left-0 w-40 h-40 opacity-40">
          <div className="grid grid-cols-8 gap-2 rotate-12">
            {Array.from({ length: 64 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-primary rounded-full"></div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-20 right-0 w-32 h-32 opacity-30">
          <div className="grid grid-cols-6 gap-2 -rotate-12">
            {Array.from({ length: 36 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Scattered individual dots - Left side */}
        <div className="absolute inset-0 opacity-75">
        <div className="absolute top-4 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 left-14 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-2 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-16 left-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 left-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-24 left-22 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-28 left-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-36 left-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 left-20 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 left-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 left-8 w-1 h-1 bg-primary rounded-full"></div>
        
        {/* Scattered individual dots - Right side (symmetric) */}
        <div className="absolute top-4 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 right-14 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-12 right-2 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-16 right-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 right-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-24 right-22 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-28 right-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-36 right-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 right-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 right-20 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 right-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 right-8 w-1 h-1 bg-primary rounded-full"></div>
        
      </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center text-center lg:justify-start justify-center">
              <img 
                src={logoImage}
                alt="ReparaTodo Logo"
                className="w-64 h-auto object-contain"
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
            <div className="flex gap-4 pt-6">
              {/* WhatsApp */}
              <a 
                onClick={() => window.open('https://wa.me/5492915049400')} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-400 transition-colors shadow-lg">
                  <img 
                    src="/lovable-uploads/logowp.png" 
                    alt="Instagram" 
                    className="w-22 h-20"
                  />
                </div>
              </a>

              {/* Instagram */}
              <a 
                onClick={() => window.open('https://www.instagram.com/reparatodo.ig/')}  
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div className="w-16 h-16   bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-400 transition-colors shadow-lg ">
                  <img 
                    src="/lovable-uploads/logoig.png" 
                    alt="Instagram" 
                    className="w-22 h-20"
                  />
                </div>
              </a>
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