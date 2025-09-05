

const benefits = [
  {
    Image: "/lovable-uploads/seguridad.png",
    title: "Servicio Garantizado", 
    description: "Todos nuestros trabajos incluyen garantía. Tu tranquilidad es nuestra prioridad"
  },
  {
    Image: "/lovable-uploads/rapidez.png",
    title: "Rapidez y Puntualidad",
    description: "Respuesta inmediata y servicio en el día, con los horarios acordados."
  },
  {
    Image:"/lovable-uploads/preciosjustos.png",
    title: "Precios Justos",
    description: "Presupuestos transparentes sin sorpresas. El mejor precio del mercado."
  },
  {
    Image: "/lovable-uploads/atencion.png",
    title: "Atención Personalizada",
    description: "Cada cliente es único. Te asesoramos y acompañamos en todo el proceso."
  },
  {
    Image: "/lovable-uploads/tecnicos.png",
    title: "Técnicos Especializados",
    description: "Profesionales capacitados con experiencia en todas las marcas y modelos."
  },
  {
    Image: "/lovable-uploads/calidad.png",
    title: "Calidad Profesional",
    description: "Más de 10 años brindando soluciones efectivas a miles de familias."
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Decorative dots - Left side */}
      <div className="absolute inset-0 opacity-75">
        <div className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-8 left-12 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-6 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-16 left-20 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 left-8 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-24 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-28 left-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-32 left-24 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-36 left-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-40 left-18 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 left-8 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 left-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 left-20 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 left-6 w-1 h-1 bg-primary rounded-full"></div>
        
        {/* Decorative dots - Right side (symmetric) */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-16 right-20 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 right-8 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-24 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-28 right-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-32 right-24 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-36 right-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-40 right-18 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 right-8 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 right-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 right-20 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 right-6 w-1 h-1 bg-primary rounded-full"></div>
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
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <img
                  src={service.Image}
                  alt={service.title}
                  className="w-30 h-30 "
                />
              </div>
              <h3 className="text-sm font-bold text-primary uppercase mb-2">
                {service.title}
              </h3>
              <p className="text-white text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;