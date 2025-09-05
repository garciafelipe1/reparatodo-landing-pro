import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    // Inserta el script de Elfsight si aún no existe
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Decorative dots - Left side */}
      <div className="absolute inset-0 opacity-75">
        <div className="absolute top-4 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 left-14 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-12 left-2 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-16 left-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 left-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-24 left-22 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-28 left-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-32 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-36 left-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 left-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 left-20 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 left-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 left-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 left-8 w-1 h-1 bg-primary rounded-full"></div>
        
        {/* Decorative dots - Right side (symmetric) */}
        <div className="absolute top-4 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-8 right-14 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-12 right-2 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-16 right-18 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-20 right-8 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-24 right-22 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute top-28 right-4 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute top-32 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute top-36 right-10 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-4 right-12 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-8 right-6 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-12 right-20 w-2 h-2 bg-primary rounded-full"></div>
        <div className="absolute bottom-16 right-4 w-1 h-1 bg-primary rounded-full"></div>
        <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-primary rounded-full"></div>
        <div className="absolute bottom-24 right-8 w-1 h-1 bg-primary rounded-full"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            LO QUE <span className="text-primary">DICEN</span>
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            NUESTROS <span className="text-primary">CLIENTES</span>
          </h2>
          <p className="text-gray-300 mb-8">
            Miles de familias <span className="text-primary">confían</span> en nosotros. Lee las{" "}
            <span className="text-primary">opiniones</span> de quienes ya eligieron ReparaTodo.
          </p>
        </div>

        {/* Elfsight Google Reviews */}
        <div
          className="elfsight-app-bebd2e61-6459-49b8-b9b6-b114ddaee2aa"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default Testimonials;