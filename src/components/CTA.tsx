import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-4 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 left-14 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-2 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-16 left-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 left-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-24 left-22 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-28 left-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-36 left-10 w-1 h-1 bg-primary rounded-full"></div>
        
        <div className="absolute top-6 right-8 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-10 right-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-14 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-18 right-12 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-22 right-6 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-26 right-20 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-30 right-2 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-34 right-14 w-2 h-2 bg-primary rounded-full"></div>
        
        <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 left-20 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 left-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 left-8 w-1 h-1 bg-primary rounded-full"></div>
        
        <div className="absolute bottom-6 right-10 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-10 right-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-14 right-4 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-18 right-14 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-22 right-22 w-1 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl mx-auto">
            ¿TENÉS UN <span className="text-primary">ELECTRODOMÉSTICO</span> QUE NO <span className="text-primary">FUNCIONA?</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            No esperes más. Nuestros técnicos están listos para resolver tu{" "}
            <span className="text-primary font-semibold">problema</span>{" "}
            hoy mismo. Contactanos ahora y obtené un presupuesto{" "}
            <span className="text-primary font-semibold">gratuito.</span>
          </p>

          {/* Phone Number Highlight */}
          <div className="mb-8">
            <div className="inline-block bg-white rounded-full px-8 py-4 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-black">2915049400</span>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg rounded-full"
              onClick={() => window.open('https://wa.me/5492915049400', '_blank', 'noopener,noreferrer')}
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;