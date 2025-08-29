import { Shield, Clock, DollarSign, Users, Wrench, Star } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Servicio Garantizado",
    description: "Todos nuestros trabajos incluyen garantía. Tu tranquilidad es nuestra prioridad."
  },
  {
    icon: Clock,
    title: "Rapidez y Puntualidad",
    description: "Respuesta inmediata y servicio en el día. Cumplimos con los horarios acordados."
  },
  {
    icon: DollarSign,
    title: "Precios Justos",
    description: "Presupuestos transparentes sin sorpresas. Calidad al mejor precio del mercado."
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description: "Cada cliente es único. Te asesoramos y acompañamos en todo el proceso."
  },
  {
    icon: Wrench,
    title: "Técnicos Especializados",
    description: "Profesionales capacitados con experiencia en todas las marcas y modelos."
  },
  {
    icon: Star,
    title: "Calidad Profesional",
    description: "Más de 10 años brindando soluciones efectivas a miles de familias."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">
            ¿Por qué elegir <span className="text-primary">ReparaTodo</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Más de 10 años de experiencia nos respaldan. Conocé las ventajas que nos hacen diferentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;