import { Shield, Clock, DollarSign, Users, Wrench, Star } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Servicio Garantizado", 
    description: "Todos nuestros trabajos incluyen garantía. Tu tranquilidad es nuestra prioridad"
  },
  {
    icon: Clock,
    title: "Rapidez y Puntualidad",
    description: "Respuesta inmediata y servicio en el día, con los horarios acordados."
  },
  {
    icon: DollarSign,
    title: "Precios Justos",
    description: "Presupuestos transparentes sin sorpresas. El mejor precio del mercado."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-8 left-12 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-6 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-16 right-8 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-6 right-16 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 right-12 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿POR <span className="text-primary">QUÉ</span> ELEGIR
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            REPARA <span className="text-white">TODO?</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-white uppercase">{benefit.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;