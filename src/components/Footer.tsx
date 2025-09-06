import { Phone, Clock, MapPin, Wrench, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-background py-16">
      <div className="container mx-auto px-4">
        {/* Contenedor principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Sección de la Marca */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🧰</span>
              <h3 className="text-2xl font-bold font-inter">ReparaTodo</h3>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm">
              Tu servicio de reparaciones de confianza. Más de 10 años brindando soluciones profesionales a domicilio.
            </p>
          </div>

          {/* Sección de Servicios */}
          <div>
            <h4 className="text-xl font-bold mb-5 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-action" />
              Nuestros Servicios
            </h4>
            <ul className="space-y-3 text-background/70">
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-action" />
                Reparación de lavarropas
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-action" />
                Electrodomésticos
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-action" />
                Herramientas eléctricas
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-action" />
                Reparaciones domiciliarias
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-action" />
                Mantenimiento preventivo
              </li>
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div>
            <h4 className="text-xl font-bold mb-5">
              Contacto
            </h4>
            <div className="space-y-4 text-background/70">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-action" />
                <a href="tel:2915049400" className="hover:underline">2915049400</a>
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

          {/* Sección de Llamada a la Acción (CTA) */}
          <div className="lg:max-w-xs">
            <h4 className="text-xl font-bold mb-5">¿Necesitás ayuda?</h4>
            <p className="text-background/70 mb-6">
              Contactanos ahora y obtené un presupuesto gratuito para tu reparación.
            </p>
            <div className="space-y-4">
              <a
                href="tel:2915049400"
                className="bg-action hover:bg-action/90 text-action-foreground px-6 py-3 rounded-xl font-semibold transition-colors w-full flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </a>
              <a
                href="https://wa.me/5492915049400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-colors w-full flex items-center justify-center gap-2"
              >
                
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-background/20 mt-16 pt-8 text-center text-background/50">
          <p className="text-xs">
            &copy; 2025 ReparaTodo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;