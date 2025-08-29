import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Clock } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-hover relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 font-inter">
            ¿Tenés un electrodoméstico que no funciona?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            No esperes más. Nuestros técnicos están listos para resolver tu problema hoy mismo. 
            Contactanos ahora y obtené un presupuesto gratuito.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="action" 
              size="lg"
              className="text-lg font-semibold bg-action hover:bg-action-hover"
              onClick={() => window.open('tel:2915049400')}
            >
              <Phone className="w-6 h-6" />
              2915049400
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg font-medium bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => window.open('https://wa.me/5492915049400')}
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </Button>
          </div>
          
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-primary-foreground">
              <Clock className="w-6 h-6 text-action" />
              <div className="text-lg">
                <span className="font-semibold">Horarios de atención:</span> Lunes a Viernes de 10 a 18 hs
              </div>
            </div>
            <p className="text-primary-foreground/80 mt-2">
              Respuesta inmediata • Presupuesto sin cargo • Servicio a domicilio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;