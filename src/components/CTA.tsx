import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
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