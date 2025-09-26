const products = [
{
    "id": 1,
    "title": "Limpiador Facial Hidratante",
    "price": 25.50,
    "img": "/imgs/limpiador-facial-hidratante.webp",
    "category": "Limpieza",
    "stock": 120,
    "description": "Limpiador suave que elimina impurezas sin resecar la piel. Ideal para todo tipo de piel, especialmente la seca y sensible."
  },
  {
    "id": 2,
    "title": "Limpiador en Aceite de Manzanilla",
    "price": 28.00,
    "img": "/imgs/limpiador-aceite-manzanilla.webp",
    "category": "Limpieza",
    "stock": 95,
    "description": "Formulado para disolver maquillaje, protector solar e impurezas a base de aceite. Ideal para la doble limpieza y pieles sensibles."
  },
  {
    "id": 3,
    "title": "Serum de Vitamina C Iluminador",
    "price": 45.00,
    "img": "/imgs/serum-vitc.webp",
    "category": "Serums",
    "stock": 85,
    "description": "Potente sérum antioxidante que ilumina y unifica el tono de la piel, reduciendo la apariencia de manchas oscuras."
  },
  {
    "id": 4,
    "title": "Serum de Ácido Hialurónico",
    "price": 35.75,
    "img": "/imgs/serum-acido-hialu.webp",
    "category": "Serums",
    "stock": 200,
    "description": "Proporciona hidratación profunda y duradera, dejando la piel suave y elástica. Ideal para todo tipo de piel."
  },
  {
    "id": 5,
    "title": "Crema Hidratante Facial",
    "price": 35.75,
    "img": "/imgs/crema-hidratante.webp",
    "category": "Cremas",
    "stock": 150,
    "description": "Crema ligera que hidrata y nutre intensamente la piel, ideal para uso diario. Con extracto de manzanilla."
  },
  {
    "id": 6,
    "title": "Mascarilla de Arcilla Purificante",
    "price": 18.50,
    "img": "/imgs/mascarilla-arcilla.webp",
    "category": "Limpieza",
    "stock": 60,
    "description": "Mascarilla de arcilla que absorbe el exceso de sebo y desincrusta los poros, dejando la piel limpia y mate."
  },
  {
    "id": 7,
    "title": "Contorno de Ojos Anti-edad",
    "price": 55.00,
    "img": "/imgs/contorno-anti-edad.webp",
    "category": "Cremas",
    "stock": 70,
    "description": "Reduce la apariencia de arrugas, líneas finas y ojeras en la delicada zona del contorno de ojos. Con cafeína y colágeno."
  },
  {
    "id": 8,
    "title": "Tónico Limpiador Facial",
    "price": 15.20,
    "img": "/imgs/tonico-limpiador.webp",
    "category": "Limpieza",
    "stock": 90,
    "description": "Tónico sin alcohol que ayuda a equilibrar el pH de la piel y a cerrar los poros después de la limpieza. Aporta frescura."
  },
  {
    "id": 9,
    "title": "Limpiador en Gel de Aloe Vera",
    "price": 22.00,
    "img": "/imgs/limpiador-aloe-vera.webp",
    "category": "Limpieza",
    "stock": 110,
    "description": "Gel limpiador refrescante con aloe vera, ideal para pieles mixtas a grasas. Limpia profundamente sin irritar."
  },
  {
    "id": 10,
    "title": "Serum de Niacinamida",
    "price": 34.00,
    "img": "/imgs/serum-niacinamida.webp",
    "category": "Serums",
    "stock": 95,
    "description": "Mejora la apariencia de los poros dilatados, regula la producción de sebo y fortalece la barrera cutánea."
  },
  {
    "id": 11,
    "title": "Crema de Noche Reparadora",
    "price": 40.00,
    "img": "/imgs/crema-reparadora.webp",
    "category": "Cremas",
    "stock": 75,
    "description": "Crema rica en nutrientes que trabaja durante la noche para reparar y regenerar la piel. Con retinol encapsulado para mayor eficacia."
  },
  {
    "id": 12,
    "title": "Bálsamo Limpiador Sólido",
    "price": 26.00,
    "img": "/imgs/balsamo-limpiador-solido.webp",
    "category": "Limpieza",
    "stock": 80,
    "description": "Bálsamo que se transforma en aceite al contacto con la piel, eliminando maquillaje e impurezas con suavidad."
  },
  {
    "id": 13,
    "title": "Serum de Ácido Salicílico",
    "price": 38.50,
    "img": "/imgs/serum-salicilico.webp",
    "category": "Serums",
    "stock": 65,
    "description": "Ayuda a combatir el acné y a reducir los puntos negros, desobstruyendo los poros."
  },
  {
    "id": 14,
    "title": "Crema Corporal Reafirmante",
    "price": 20.00,
    "img": "/imgs/crema-corporal-reafirmante.webp",
    "category": "Cremas",
    "stock": 250,
    "description": "Crema ligera y de rápida absorción que hidrata intensamente y mejora la elasticidad de la piel del cuerpo."
  },
  {
    "id": 15,
    "title": "Limpiador en Espuma",
    "price": 21.50,
    "img": "/imgs/limpiador-espuma.webp",
    "category": "Limpieza",
    "stock": 100,
    "description": "Limpiador que genera una espuma suave y densa para una limpieza profunda y refrescante. Con ingredientes calmantes."
  },
  {
    "id": 16,
    "title": "Serum de Retinol Rejuvenecedor",
    "price": 60.00,
    "img": "/imgs/serum-retinol.webp",
    "category": "Serums",
    "stock": 50,
    "description": "Tratamiento intensivo para la noche que renueva la piel, reduciendo la apariencia de líneas finas y arrugas."
  },
  {
    "id": 17,
    "title": "Gel para Ojos Descongestionante",
    "price": 28.50,
    "img": "/imgs/gel-para-ojos.webp",
    "category": "Cremas",
    "stock": 80,
    "description": "Gel refrescante que ayuda a reducir la hinchazón y las bolsas debajo de los ojos. Con extracto de pepino."
  },
  {
    "id": 18,
    "title": "Serum de Péptidos",
    "price": 58.00,
    "img": "/imgs/serum-peptidos.webp",
    "category": "Serums",
    "stock": 60,
    "description": "Sérum que mejora la firmeza y elasticidad de la piel, ayudando a combatir la flacidez y las arrugas."
  },
  {
    "id": 19,
    "title": "Mascarilla de Noche Hidratante",
    "price": 29.99,
    "img": "/imgs/mascarilla-de-noche-hidra.webp",
    "category": "Cremas",
    "stock": 70,
    "description": "Hidrata y nutre intensamente la piel mientras duermes. Se aplica como una crema y se retira por la mañana para una piel radiante."
  },
  {
    "id": 20,
    "title": "Serum Antioxidante con Té Verde",
    "price": 42.00,
    "img": "/imgs/serum-te-verde.webp",
    "category": "Serums",
    "stock": 75,
    "description": "Protege la piel del daño ambiental y previene el envejecimiento prematuro. Con extracto de té verde y vitamina E."
  }
];


export default products