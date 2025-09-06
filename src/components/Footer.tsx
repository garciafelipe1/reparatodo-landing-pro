import { Phone, Clock, MapPin, Wrench } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🧰</span>
              <h3 className="text-2xl font-bold font-inter">ReparaTodo</h3>
              <span className="text-2xl">🛠️</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Tu servicio de reparaciones de confianza. Más de 10 años brindando soluciones profesionales a domicilio.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Nuestros Servicios
            </h4>
            <ul className="space-y-2 text-background/80">
              <li>Reparación de lavarropas</li>
              <li>Electrodomésticos</li>
              <li>Herramientas eléctricas</li>
              <li>Reparaciones domiciliarias</li>
              <li>Mantenimiento preventivo</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-action" />
                <span className="font-medium">2915049400</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-action" />
                <span>Lun-Sab 09-19hs</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-action" />
                <span>Servicio a domicilio</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-4">¿Necesitás ayuda?</h4>
            <p className="text-background/80 mb-4">
              Contactanos ahora y obtené un presupuesto gratuito para tu reparación.
            </p>
            <div className="space-y-2">
              <button 
                onClick={() => window.open('tel:2915049400')}
                className="bg-action hover:bg-action-hover text-action-foreground px-4 py-2 rounded-lg font-medium transition-colors w-full"
              >
                Llamar Ahora
              </button>
              <button 
                onClick={() => window.open('https://wa.me/5492915049400')}
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors w-full"
              >
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2025 ReparaTodo. Todos los derechos reservados. Servicio profesional de reparaciones.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;