import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    location: "Palermo",
    rating: 5,
    text: "Excelente servicio! Vinieron el mismo día que llamé y arreglaron mi lavarropas Samsung en menos de una hora. Muy profesionales y precio justo.",
    service: "Reparación de lavarropas"
  },
  {
    name: "Carlos Méndez",
    location: "Villa Crespo",
    rating: 5,
    text: "Hacía años que no encontraba quien arregle mi soldadora. Los técnicos de ReparaTodo la dejaron como nueva. Súper recomendable!",
    service: "Herramientas eléctricas"
  },
  {
    name: "Ana Rodríguez",
    location: "Caballito",
    rating: 5,
    text: "Mi heladera dejó de enfriar un domingo y pensé que iba a perder toda la comida. Los contacté y vinieron ese mismo día. Increíble la rapidez!",
    service: "Reparación de electrodomésticos"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-inter mb-4">
            Lo que dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de familias confían en nosotros. Leé las experiencias de quienes ya eligieron ReparaTodo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-action" />
                  ))}
                </div>
                
                <p className="text-card-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {testimonial.service}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;