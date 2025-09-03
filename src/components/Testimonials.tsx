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
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            LO QUE <span className="text-primary">DICEN</span>
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            NUESTROS <span className="text-primary">CLIENTES</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Miles de familias <span className="text-primary">confían</span> en nosotros. Lee las <span className="text-primary">opiniones</span> de quienes ya eligieron ReparaTodo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg relative">
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                  <span className="text-white font-bold text-sm">{testimonial.name[0]}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              
              <p className="text-gray-800 text-sm mb-3">"{testimonial.text}"</p>
              
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-3 h-3 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-600">{testimonial.service}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;