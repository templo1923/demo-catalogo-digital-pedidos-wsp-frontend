import React from 'react';
import './Developer.css'; // Se importa el archivo CSS para aplicar los estilos.

export default function Developer() {
  return (
    // Se utiliza la clase 'Developer' definida en el archivo CSS.
    <div className='Developer'>
      {/* El nombre de la web está envuelto en una etiqueta <a> para el enlace. */}
      <a 
        href="https://catalogosco.top/Shop" 
        target="_blank" 
        rel="noopener noreferrer"
        className="developer-link"
      >
        CatalogosCo.top
      </a>
      <span className="developer-text">
        © Copyright 2025 Contacto 573004085041
      </span>
    </div>
  );
}
