import { Translations } from '@/server/types/Translation';

export default JSON.parse(`{
  "header": {
    "nav": {
      "home": "Casa",
      "about": "Acerca de",
      "surrounding": "Entorno",
      "contacts": "Contactos"
    },
    "hamburger": "Menú móvil",
    "langList": {
      "en": "Inglés",
      "pl": "Polaco",
      "es": "Español"
    }
  },
  "homepage": {
    "hero": {
      "title": {
        "firstPart": "Hacemos que tus",
        "vacation": "vacaciones",
        "lastPart": "mejores"
      },
      "subtitle": "Sentirse como en casa, lejos de casa",
      "moreInfo": "Más info"
    },
    "testimonials": {
      "title": "Nuestros testimonios",
      "subtitle": "Consulte los testimonios de nuestra página de Facebook",
      "leaveReview": "Dejar revisión",
      "kuba": {
        "title": "Casa muy bien mantenida",
        "text": "Muy recomendable, gran lugar, incluye todas las cosas necesarias para alojarse con un niño. Contacto muy agradable y rápido con los propietarios, quienes sugerirán y ayudarán a resolver cualquier problema posible.",
        "userName": "Kuba",
        "imgAltText": ""
      },
      "monika": {
        "title": "Casa nueva y lujosamente amueblada",
        "text": "Recomiendo encarecidamente unas vacaciones en esta hermosa casa. Encantador pueblo, playa y muchas actividades acuáticas. Lugar perfecto para relajarse y escapar de la vida cotidiana.",
        "userName": "Monika",
        "imgAltText": ""
      },
      "nik": {
        "title": "Literalmente todo lo que necesitas",
        "text": "El vecindario es tranquilo. Hay muchos restaurantes. El personal es muy servicial. El propietario se lleva bien en todos los temas. La Sra. Anita es muy servicial en el lugar, siempre puedes pedir ayuda.",
        "userName": "Nik",
        "imgAltText": ""
      },
      "adam": {
        "title": "Un lugar excelente para vacaciones",
        "text": "Se vive cómodamente, convenientemente, hay dos baños, hay internet, además hay una piscina climatizada, cerca de mercados, cerca del mar, hay lugar para estacionar un auto.",
        "userName": "Adam",
        "imgAltText": ""
      }
    }
  },
  "about": {
    "gallery": {
      "loungeFromOutside": "Sala de estar contemporánea con un sofá y una mesa blancos, creando un ambiente elegante y minimalista.",
      "lounge": "Una sala de estar moderna con paredes blancas y un televisor grande.",
      "diningRoom": "Configuración de comedor limpia y moderna con muebles elegantes.",
      "kitchen": "Una cocina bien iluminada con una mesa de madera y sillas, creando un área de comedor acogedora e invitadora.",
      "doubleRoom": "Dormitorio lujoso con una cama grande.",
      "twinRoomDark": "Dos camas en una habitación con un mural de pared colorido. Un espacio vibrante y acogedor para relajarse y descansar.",
      "twinRoomLight": "Un dormitorio acogedor con dos camas y una alfombra elegante, creando una atmósfera cómoda y acogedora.",
      "bathFirst": "Un lujoso baño con elegantes paredes de mármol y accesorios blancos impecables.",
      "bathSecond": "Baño de lujo en blanco con paredes y suelo de mármol.",
      "terasaEnter": "Una casa moderna con un patio y escaleras que conducen a la entrada.",
      "terasa": "Terraza en la azotea con sillones y mesa, perfecta para relajarse al aire libre.",
      "pool": "Villa elegante con piscina y patio, ofreciendo un espacio exterior sereno y elegante."
    },
    "information": {
      "house": {
        "title": "Casa",
        "text": {
          "firstPart": "La casa tiene todo lo que necesitas para unas vacaciones sin preocupaciones. Hay tres dormitorios (para 8 personas), dos baños, una enorme y espaciosa terraza y una piscina climatizada. Incluso en invierno, puedes relajarte y nadar en agua a 30 grados.",
          "secondPart": "La casa cuenta con todo el equipamiento necesario. Si tienes un niño pequeño, hay juguetes, cochecitos, una trona y un calienta biberones para ellos. Lamentablemente, no permitimos mascotas."
        }
      },
      "surrounding": {
        "title": "Entorno",
        "text": {
          "firstPart": "Nuestra hermosa casa está ubicada en la bien desarrollada ciudad de San Pedro del Pinatar. Ofrece todo para unas vacaciones inolvidables, con centros comerciales, cafeterías, restaurantes, parques y la playa, todo a poca distancia. Información sobre atracciones cercanas está disponible a continuación.",
          "secondPart": "Hay muchos espacios de estacionamiento cerca de la casa. Los aeropuertos más cercanos son Alicante (a 1 hora de distancia) y Murcia (a 36 minutos de distancia). Si necesitas un coche, puedes organizar un traslado con la empresa Calma."
        }
      },
      "rentInfo": {
        "title": "Información de alquiler",
        "text": {
          "firstPart": "Vale la pena mencionar que estamos presentes tanto en Booking.com como en Airbnb. Si no te sientes seguro, puedes reservar la propiedad a través de estos dos servicios populares. Sin embargo, para ahorrar dinero, siéntete libre de reservar directamente con nosotros enviando un mensaje o llamándonos para coordinar las fechas.",
          "secondPart": "Una vez que estés listo para hacer una reserva, por favor contacta con la Sra. Anita Violetta Kołodziejczyk. Ella es responsable de tu reserva y estará en el lugar para ayudarte con la misma."
        }
      },
      "transfer": {
        "title": "Transferencia",
        "text": {
          "firstPart": "Desde el aeropuerto se puede alquilar un coche. Puedo recomendar empresas o elegir un coche de alquileres conocidos en el sitio, por ejemplo: Odkryj Auto, Record Go. El autobús al pueblo circula raramente, pero directamente o vía Murcia.",
          "secondPart": "También hay transferencias y alquileres de coches (Viva Cars, !Hola!, Alicante Taxi, Calma). Contacto a través de WhatsApp o Messenger. Después de aterrizar, dirígete al nivel superior del aeropuerto, donde generalmente esperarás el coche en Starbucks."
        }
      }
    }
  },
  "contacts": {
    "monthPriceTitle": "Precio mensual (mensual)",
    "charts": {
      "title": "Gráficos de contactos"
    },
    "months": {
      "october": "Octubre",
      "november": "Noviembre",
      "christmasNewYear": "Navidad y Año Nuevo (2 semanas)",
      "march": "Marzo",
      "april": "Abril"
    },
    "fullPrice": "precio completo",
    "deposit": "Depósito: Reembolsable después de la estancia, 300 euros.",
    "information": {
      "title": "Procedimiento de reserva",
      "subtitle": "Cómo hacer su reserva: Guía paso a paso",
      "firstCol": "Estamos disponibles en Booking.com y Airbnb. Si prefieres ahorrar dinero, contáctanos directamente para hacer una reserva o solicitar asistencia. Verifica los detalles, como las aerolíneas, la ciudad de salida y los horarios de los vuelos, para reservar tus fechas en consecuencia",
      "secondCol": "El horario estándar de check-in es a las 16:00 y el de check-out es a las 11:00. Después de comprar tu billete, siempre puedes contactarnos, y trataremos de ajustarnos a tu horario.",
      "thirdCol": "La tarifa de limpieza es de 140 euros (pago único), y el set de ropa de cama cuesta 13 euros por persona. Para estancias superiores a 10 días, ofrecemos un 5% de descuento sobre el costo total",
      "fourthCol": "Los descuentos individuales pueden ser posibles en casos excepcionales con menos personas. El costo adicional para la novena persona es de 40 euros por día, pero solo en circunstancias excepcionales",
      "fifthCol": "En cuanto a los pagos, el primer pago es del 20-30% del monto total y se espera dentro de las 72 horas. El segundo pago es la mitad de la cantidad restante y debe hacerse aproximadamente a la mitad del tiempo antes de la fecha de llegada",
      "sixthCol": "El tercer pago es la cuota final antes de tu llegada, ya que el monto total debe estar acreditado en nuestra cuenta para hacer el check-in. Si tienes alguna pregunta o solicitud especial, no dudes en contactarnos en cualquier momento"
    },
    "accordion": {
      "phone": "Teléfono",
      "email": "Correo",
      "important": {
        "firstPart": "Por favor, ten paciencia;",
        "secondPart": "Cada uno de nosotros, además de alquilar, tiene otro trabajo."
      },
      "firstContact": {
        "title": "¿Todavía tienes preguntas? Llama a Ewelina Kwaśna",
        "customeField": "Dirección",
        "langPreference": "La Sra. Ewelina habla polaco, por lo que si tienes alguna pregunta, es mejor escribir en polaco."
      },
      "secondContact": {
        "title": "Para reservas, contacta con Anita Kolodziejczyk.",
        "customeField": "Página web",
        "langPreference": "La Sra. Anita habla polaco, español e inglés, por lo que si tienes alguna pregunta, es mejor escribir."
      }
    }
  },
  "surrounding": {
    "filtersMenu": {
      "filters": "Filtros:",
      "sort": "Ordenar",
      "limit": "Límite",
      "sortTypes": {
        "low": "Distancia: de menor a mayor",
        "high": "Distancia: de mayor a menor"
      },
      "limitTypes": {
        "three": "3 Elementos de la página",
        "nine": "9 Elementos de la página"
      }
    },
    "pagination": {
      "previous": "Anterior",
      "next": "Siguiente"
    },
    "placeMoreInfo": "Más info",
    "placeGenerateRoute": "Generar ruta",
    "placeHouse": "Casa",
    "enable": "Habilitar",
    "disable": "Deshabilitar"
  },
  "admin": {
    "calendar": {
      "welcome": "Bienvenido",
      "adminGreet": "Me alegro de verte",
      "from": "En",
      "to": "A",
      "initialDate": "Fecha inicial",
      "deadlineDate": "Fecha límite"
    },
    "surrounding": {
      "title": "Título",
      "subtitle": "Subtítulo",
      "description": "Descripción",
      "imageAltText": "Texto alternativo de la imagen",
      "image": "Imagen",
      "distance": "Distancia",
      "routeLink": "Enlace de la ruta",
      "coords": {
        "lat": "Latitud",
        "lng": "Longitud"
      }
    },
    "form": {
      "submit": "Enviar",
      "submitting": "Envío de"
    }
  },
  "footer": {
    "copyrights": "Todos los derechos reservados. Construido con"
  },
  "error": {
    "message": "Ya estamos trabajando para resolver el problema.",
    "reset": "Restablecer",
    "empty": "Esta lista está vacía",
    "pity": "Desafortunadamente, ocurrió un error."
  },"auth": {
  "email": {
    "title": "Correo electrónico",
    "description": "Esta es tu dirección de correo electrónico"
  },
  "password": {
    "title": "Contraseña",
    "description": "Ingresa tu contraseña"
  },
  "loginBtnText": "Iniciar sesión",
  "signupBtnText": "Registrarse",
  "submitting": "Enviando",
  "signup": {
    "title": "Crear una cuenta",
    "passwordConfirm": {
      "title": "Confirmar contraseña",
      "description": "Confirma tu contraseña"
    },
    "login": {
      "question": "¿Ya tienes una cuenta? Inicia sesión aquí",
      "linkText": "Inicia sesión aquí"
    }
  },
  "login": {
    "title": "Inicia sesión en tu cuenta",
    "signup": {
      "question": "¿Aún no tienes una cuenta?",
      "linkText": "Regístrate"
    }
  }
}

}`) as Translations;
