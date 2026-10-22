export default {
  global: {
    Name: 'Planeación y diseño publicitario en redes sociales',
    Description:
      'Este componente aborda la planeación de estrategias publicitarias en redes sociales y el diseño de anuncios digitales, considerando objetivos de <i>marketing</i>, público objetivo, segmentación, presupuesto, formatos, creatividad, <i>copy</i>, llamados a la acción, lineamientos de marca y buenas prácticas para fortalecer la comunicación publicitaria en entornos digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Publicidad digital en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de publicidad digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Importancia de la publicidad en redes sociales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Relación entre publicidad, <i>marketing</i> y posicionamiento digital ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Estrategias publicitarias en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Planeación de la estrategia publicitaria digital',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Propósito comercial de la publicidad en redes sociales',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Objetivos publicitarios y embudo digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Objetivos de reconocimiento, interacción y tráfico',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Objetivos de clientes potenciales, ventas y conversión',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Relación entre objetivos publicitarios y fases del embudo digital ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Público objetivo y segmentación publicitaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Características y comportamiento de las audiencias digitales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Segmentación demográfica, geográfica, por intereses y comportamiento',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Selección de públicos según objetivos de campaña ',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presupuesto y plan de pauta digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de presupuesto publicitario',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Presupuesto diario, presupuesto total y duración de campaña',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Estructura básica del plan de pauta digital ',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Anuncios y piezas publicitarias digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y función del anuncio publicitario digital',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Características del contenido promocional en redes sociales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo:
              'Relación entre anuncio, público, objetivo, mensaje y plataforma  ',
            hash: 't_6_3',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Formatos, creatividad y <i>copy</i> publicitario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo:
              'Formatos publicitarios: imagen, video, carrusel, historias, <i>reels</i>, publicaciones promocionadas y anuncios interactivos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo:
              'Creatividad publicitaria, mensaje promocional e intención comunicativa',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              '<i>Copy</i> publicitario, tono de comunicación y llamados a la acción  ',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Audiencia digital',
      significado:
        'Conjunto específico de personas o grupos a quienes una marca dirige sus mensajes en entornos digitales. Se define a partir de características demográficas, intereses, comportamientos y necesidades, con el propósito de identificar a quienes pueden estar interesados en un producto o servicio y optimizar la comunicación.',
    },
    {
      termino: '<i>Copy</i> publicitario',
      significado:
        'Texto persuasivo utilizado en publicidad, <i>marketing</i> y ventas para motivar al público a realizar una acción específica, como comprar un producto o suscribirse a un servicio. Su objetivo es comunicar el valor de una oferta y mostrar cómo puede satisfacer determinadas necesidades o deseos.',
    },
    {
      termino: 'Estrategia publicitaria',
      significado:
        'Conjunto de acciones planificadas por una empresa para promocionar un producto o servicio entre los consumidores. Su objetivo es posicionar una marca y alcanzar al público objetivo mediante diferentes canales de comunicación.',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'Estrategia de <i>marketing</i> que utiliza canales y plataformas en línea para promocionar productos o servicios. Se orienta al público objetivo mediante mensajes, formatos y recursos adaptados a sus características, intereses y comportamientos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camacho, K. (2026, 24 de marzo). Qué son las audiencias en <i>marketing</i> + ejemplos reales. DesignPlus.',
      link: 'https://designplus.co/blog/marketing-digital/que-son-audiencias-marketing/',
    },
    {
      referencia:
        'Londoño, P. (2020, 17 de diciembre). Estrategias de publicidad: definición, tipos y ejemplos. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/estrategias-de-publicidad-0',
    },
    {
      referencia:
        'Moreno, J. (2023). Qué es un copy, cómo se crea y ejemplos exitosos. HubSpot.',
      link: 'https://blog.hubspot.es/marketing/que-es-un-copy',
    },
    {
      referencia:
        'Romero, A. (2024, 22 de mayo). Publicidad digital: qué es, tipos y beneficios. Periódico Publicidad.',
      link: 'https://www.periodicopublicidad.com/articulo/estudios/publicidad-digital-tipos-beneficios/20240522124124142626.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
