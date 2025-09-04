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