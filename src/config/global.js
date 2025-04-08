export default {
  global: {
    Name: 'Reconocimiento y medición de instrumentos financieros',
    Description:
      'La contabilidad, como herramienta financiera y operativa para las organizaciones se enfrenta continuamente a mayores retos originados por la exactitud y puntualidad con que se requiere la información que genera, por lo cual Colombia se ha visto beneficiada con la estandarización de la información establecida por la ley 1314 de 2009 y los decretos que la reglamentan; estos ofrecen la posibilidad de preparar información financiera enmarcada dentro de unos criterios de reconocimiento de los hechos económicos y de medición, que implican importes de los elementos de la información financiera acorde con las condiciones macroeconómicas de la región donde se preparan los estados financieros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo:
          'Instrumentos financieros: activos, pasivos e instrumentos de patrimonio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Política contable',
            hash: 't_1_1',
          },
          {
            numero: '1.1',
            titulo: 'Instrumentos Financieros',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tema 2',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
  complementario: [
    {
      tema: 'Política contable',
      referencia:
        'International Accounting Standards Board (IASB). (2014). <em>NIIF 9: Instrumentos Financieros</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-9-financial-instruments/',
    },
    {
      tema: 'Instrumentos financieros',
      referencia:
        'International Accounting Standards Board (IASB). (2005). <em>NIIF 7: Información a Revelar sobre Instrumentos Financieros</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ifrs-7-financial-instruments-disclosures/',
    },
    {
      tema: 'Diferencia entre pasivo financiero e instrumento de patrimonio',
      referencia:
        'International Accounting Standards Board (IASB). (2003). <em>NIC 32: Instrumentos Financieros - Presentación</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ias-32-financial-instruments-presentation/',
    },
    {
      tema: 'Reconocimiento, medición, presentación y revelación',
      referencia:
        'International Accounting Standards Board (IASB). (1998). <em>NIC 39: Instrumentos Financieros - Reconocimiento y Medición</em>. Fundación IFRS.',
      tipo: 'Página web',
      link:
        'https://www.ifrs.org/issued-standards/list-of-standards/ias-39-financial-instruments-recognition-and-measurement/ ',
    },
  ],
  glosario: [
    {
      termino: 'Depreciación',
      significado:
        'Es la disminución que sufren los activos fijos, que incluyen la propiedad planta y equipo que pierden valor con motivo de la inflación y el desgaste por su uso que se hacen obsoletos. ',
    },
    {
      termino: 'Método de Interés efectivo',
      significado:
        'Es un método de cálculo del costo amortizado de un activo o pasivo financiero y de distribución del ingreso por intereses o gasto por intereses a lo largo del periodo correspondiente. (Moya Moreno, 2015).',
    },
    {
      termino: 'Contabilidad',
      significado:
        'Es la técnica aplicada en el lenguaje comercial que organiza procesos financieros de forma cronológica y sistemática para apoyar en la toma de decisiones a la administración acerca de todos los procesos financieros en una empresa.',
    },
    {
      termino: 'Cuentas del pasivo',
      significado:
        'Es el reconocimiento de las obligaciones con proveedores, entidades financieras, mediante compromisos firmados y pactados a una fecha determinada, incluye los impuestos descontados antes de pagar en las fechas estipuladas por la administración de impuestos y aduanas nacionales DIAN.',
    },
    {
      termino: 'Cuenta',
      significado:
        'Es la estructura caracterizada por códigos o números que acorde a su naturaleza identifican partidas contables inherentes a estados financieros dentro de cada una de sus estructuras, sirven para construir contabilidad y dar un orden al lenguaje de los negocios, atendiendo siempre el principio universal de la partida doble.',
    },
    {
      termino: 'Debe y Haber',
      significado:
        'Es el reconocimiento que toda cuenta contable presenta aumentos y disminuciones acorde a la naturaleza de las cuentas, en ese sentido las cuentas de activos, presentan sus aumentos en el debe y disminuciones en el haber, para las cuentas del pasivo, los aumentos de realizan en el haber y las disminuciones en el debe, para las cuentas del patrimonio, los aumentos se realizan en el haber y las disminuciones en el debe, para los ingresos los aumentos se registran en el haber y las disminuciones en el debe, en el caso de los gastos los aumentos se efectúan en el debe al igual que las cuentas de costos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Actualicese (2020, 10 de diciembre) <em>Método de la tasa de interes efectiva</em>.',
      link:
        'https://actualicese.com/metodo-del-interes-efectivo-en-que-casos-se-aplica/',
    },
    {
      referencia: 'Legis (2020, 11 de diciembre) <em>Reserva legales</em>.',
      link:
        'https://www.gerencie.com/reserva-legal.html#Reserva_legal_en_la_sociedad_en_la_sociedad_anonima',
    },
    {
      referencia:
        'Leyes estatutarias (2020 11 de diciembre) Reserva estatutaria y ocasionales.',
      link: 'https://leyes.co/codigo_de_comercio',
    },
    {
      referencia:
        'Norma internacional de información financiera (2020, 10 de diciembre) <em>Activos financieros</em>.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/niif/9_NIIF.pdf ',
    },
    {
      referencia:
        'Norma internacional de información financiera (2020 10 de diciembre) <em>patrimonio</em>.',
      link:
        'https://www.mef.gob.pe/contenidos/conta_publ/con_nor_co/vigentes/nic/32_NIC.pdf',
    },
    {
      referencia:
        'Super contable Sage (2020 10 diciembre) Costo de amortización',
      link:
        'https://www.supercontable.com/informacion/Contabilidad/Definicion_de_Coste_Amortizado.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
