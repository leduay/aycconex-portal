import type { Lang } from './utils';

export interface ServiceDetail {
  title: string;
  catchphrase?: string;
  text: string;
}

export interface ServiceData {
  id: string;
  icon: string; // lucide icon name
  shortTitle: string;
  fullTitle: string;
  desc: string;
  color: string;
  details: ServiceDetail[];
  ctaText: string;
  ctaDesc: string;
}

const servicesES: ServiceData[] = [
  {
    id: 'representacion',
    icon: 'briefcase',
    shortTitle: 'Representación Comercial',
    fullTitle: 'Representación comercial y desarrollo de negocios',
    desc: 'Desarrollo y apertura de mercado. Actuamos como su extensión en el territorio, gestionando negociaciones y asegurando la fidelización.',
    color: '#005579',
    details: [
      {
        title: 'Desarrollo y apertura de mercado',
        text: 'Identificamos clientes potenciales que se alineen con los objetivos de la marca. Estudiamos el mercado para entender la competencia, la demanda y las normativas locales. Mejoramos el alcance y la visibilidad de las empresas representadas en el nuevo territorio.',
      },
      {
        title: 'Gestión comercial y negociación',
        text: 'Comunicación bilingüe, actuando como traductor técnico y cultural en negociaciones complejas. Gestionamos los términos comerciales y contratos para asegurar las mejores condiciones. Elaboramos y revisamos toda la documentación comercial necesaria para que la operación sea exitosa.',
      },
      {
        title: 'Fidelización y mejora continua',
        text: 'Evaluamos constantemente la satisfacción del cliente para optimizar los procesos de comercio exterior fortaleciendo las relaciones comerciales para asegurar la continuidad del negocio.',
      },
    ],
    ctaText: 'COTIZAR REPRESENTACIÓN',
    ctaDesc: 'Representamos sus intereses con total transparencia.',
  },
  {
    id: 'gestion-china',
    icon: 'factory',
    shortTitle: 'Servicios en China',
    fullTitle: 'Servicios Comerciales en China',
    desc: 'Búsqueda de suministradores, inspecciones de mercancía en fábrica y logística integral para importaciones seguras.',
    color: '#EF494C',
    details: [
      {
        title: 'Búsqueda de suministradores potenciales',
        catchphrase: 'Selección de proveedores con garantía de confianza.',
        text: 'Filtramos entre diversas opciones para presentarle solo fabricantes reales y verificados, eliminando intermediarios innecesarios y garantizando que el proveedor tenga la capacidad técnica que su empresa exige.',
      },
      {
        title: 'Negociación con proveedores',
        catchphrase: 'Mejores condiciones, mayores beneficios.',
        text: 'Obtenemos para su empresa los términos comerciales más favorables. No solo negociamos precios competitivos, sino también plazos de entrega, estándares de calidad y garantías sólidas, asegurando que cada acuerdo potencie su rentabilidad.',
      },
      {
        title: 'Elaboración y traducción de documentos comerciales',
        catchphrase: 'Flujo informativo sin barreras.',
        text: 'Elaboramos y traducimos documentos comerciales en español, mandarín e inglés. Nos aseguramos de que los términos técnicos estén correctamente expresados, eliminando las ambigüedades que suelen causar conflictos. Con AYCCONEX, lo que se firma en Uruguay es exactamente lo que se ejecuta en China.',
      },
      {
        title: 'Inspección de mercancía en origen',
        catchphrase: 'Somos sus ojos en la fábrica.',
        text: 'Eliminamos la incertidumbre, verificando físicamente que lo que usted compró sea exactamente lo que se cargue en el contenedor. Supervisamos cantidades, calidad de embalaje y estado del producto antes de que salga de China, asegurando que su inversión llegue a Uruguay tal como fue pactada.',
      },
      {
        title: 'Inspección de fábrica o proveedores',
        catchphrase: 'Evaluación 360° de su socio comercial.',
        text: 'Actuamos como sus auditores en terreno para calificar la confiabilidad de sus socios en origen. Entregamos un reporte detallado que incluye la situación legal del fabricante, su historial de exportación y condiciones de trabajo. Nuestra presencia física nos permite ver lo que una cámara no muestra, garantizando transparencia total en su cadena de suministro.',
      },
      {
        title: 'Gestión de transportación hacia destino',
        catchphrase: 'Logística Integral, de la fábrica a sus manos.',
        text: 'Coordinamos el traslado de su mercadería desde cualquier punto de China hasta su destino final en Uruguay. Nos encargamos de seleccionar las rutas más eficientes y los operadores logísticos más confiables, optimizando los tiempos de tránsito y reduciendo costos operativos para que su cadena de suministro nunca se detenga.',
      },
    ],
    ctaText: 'COTIZA TU IMPORTACIÓN AHORA',
    ctaDesc: 'Importe de China sin riesgos.',
  },
  {
    id: 'turismo-comercial',
    icon: 'plane',
    shortTitle: 'Turismo Comercial',
    fullTitle: 'Turismo Comercial a China',
    desc: 'Acompañamiento en ferias, visitas a fábricas y gestión de traslados internos. Su viaje de negocios 100% optimizado.',
    color: '#005579',
    details: [
      {
        title: 'Acompañamiento en ferias comerciales',
        catchphrase: 'Mucho más que una traducción.',
        text: 'En las ferias, el lenguaje de los negocios va más allá de las palabras. Con nuestra presencia, usted cuenta con expertos que entienden los tecnicismos de comercio y los códigos culturales de negociación. Facilitamos un diálogo fluido en mandarín, inglés y español para cerrar acuerdos con precisión y confianza desde el primer encuentro.',
      },
      {
        title: 'Traducción e interpretación',
        catchphrase: 'Comunicación Trilingüe Integral.',
        text: 'Facilitamos el diálogo fluido entre su empresa y sus socios en China. Ya sea en la traducción de documentos comerciales, reuniones de negocios o interpretación presencial durante misiones comerciales, AYCCONEX garantiza que la comunicación sea directa, transparente y eficiente, permitiéndole enfocarse en la toma de decisiones mientras nosotros eliminamos las barreras del idioma.',
      },
      {
        title: 'Visitas a fábricas de interés',
        catchphrase: 'Vea la realidad de su proveedor.',
        text: 'Mucho más que una visita; es su garantía de confianza. Le acompañamos físicamente a las instalaciones de sus proveedores en China para verificar su infraestructura, procesos de producción y capacidad real. Con AYCCONEX, usted conoce de primera mano a quién le está comprando, asegurando que la fábrica cumpla con los estándares que su empresa exige.',
      },
      {
        title: 'Intercambio con proveedores',
        catchphrase: 'Construyendo lazos de confianza.',
        text: 'Facilitamos el diálogo directo y personal con los tomadores de decisiones en China. No solo traducimos palabras, sino que actuamos como mediadores culturales para generar relaciones de confianza ( Guanxi ) sólidas y duraderas. Nos aseguramos de que su empresa sea percibida con la seriedad y el prestigio que merece, sentando las bases para una sociedad comercial exitosa.',
      },
      {
        title: 'Gestión de traslados internos',
        catchphrase: 'Movilidad total, su itinerario bajo control.',
        text: 'Coordinamos de forma integral sus traslados internos, evitando la complejidad del transporte en China, desde vehículos privados con conductores profesionales hasta trenes de alta velocidad y vuelos domésticos. Nos encargamos de la logística para que su única prioridad sea el éxito de sus reuniones comerciales.',
      },
    ],
    ctaText: 'SOLICITAR ACOMPAÑAMIENTO',
    ctaDesc: 'Asegure el éxito de sus reuniones comerciales.',
  },
  {
    id: 'exportacion',
    icon: 'ship',
    shortTitle: 'Exportación a China',
    fullTitle: 'Gestión de exportación a China',
    desc: 'Llevamos sus productos uruguayos al mercado asiático. Estudio de mercado y búsqueda de clientes potenciales.',
    color: '#EF494C',
    details: [
      {
        title: 'Estudio preliminar del mercado',
        catchphrase: 'Análisis de Competitividad.',
        text: 'Investigamos los precios de mercado, los canales de distribución más eficientes y el comportamiento de los compradores en China. Identificamos los nichos donde el producto uruguayo tiene mayores ventajas competitivas, permitiéndole ajustar su oferta comercial para maximizar sus márgenes y posibilidades de cierre.',
      },
      {
        title: 'Búsqueda de clientes potenciales en China',
        catchphrase: 'Conexión con la demanda en China.',
        text: 'Ponemos su producto frente al comprador indicado. Nos encargamos de la búsqueda y primer contacto con potenciales clientes en China, validando su interés real y capacidad de importación. Nuestro objetivo es convertir la prospección en órdenes de compra, facilitando el vínculo comercial inicial para que su exportación se concrete de forma rápida y segura.',
      },
      {
        title: 'Negociación con proveedores',
        catchphrase: 'Mejores condiciones, mayores beneficios.',
        text: 'Obtenemos para su empresa los términos comerciales más favorables. No solo negociamos precios competitivos, sino también plazos de entrega, estándares de calidad y garantías sólidas, asegurando que cada acuerdo potencie su rentabilidad.',
      },
      {
        title: 'Elaboración y traducción de documentos comerciales',
        catchphrase: 'Flujo informativo sin barreras.',
        text: 'Elaboramos y traducimos documentos comerciales en español, mandarín e inglés. Nos aseguramos de que los términos técnicos estén correctamente expresados, eliminando las ambigüedades que suelen causar conflictos. Con AYCCONEX, lo que se firma en Uruguay es exactamente lo que se ejecuta en China.',
      },
      {
        title: 'Gestión de transportación hacia destino',
        catchphrase: 'Conectividad logística integral en el mercado asiático.',
        text: 'Facilitamos la llegada de sus productos a los principales centros de consumo de China. Seleccionamos y coordinamos las rutas de transporte interno más rápidas y económicas, actuando como su nexo operativo en destino. Nos encargamos de que la transición entre el transporte internacional y la distribución local sea fluida, eliminando las complejidades de la logística interna china.',
      },
    ],
    ctaText: 'COTIZAR EXPORTACIÓN A CHINA',
    ctaDesc: 'Lleve su marca al gigante asiático.',
  },
  {
    id: 'cadena-suministros',
    icon: 'trending-up',
    shortTitle: 'Cadena de Suministros',
    fullTitle: 'Optimización de Cadena de Suministros China-Uruguay',
    desc: 'Auditamos y rediseñamos su logística. Determinamos Lead Time y stock óptimo para maximizar rentabilidad.',
    color: '#111827',
    details: [
      {
        title: 'Determinación del Lead Time China-Uruguay',
        text: 'Calculamos el ciclo logístico completo: desde la emisión de la orden de compra y el tiempo de producción en origen, hasta el tránsito marítimo, el despacho de aduanas en Montevideo y la entrega en su depósito. Identificamos las variables críticas que afectan cada etapa.',
      },
      {
        title: 'Definición de nivel de stock óptimo',
        catchphrase: 'El equilibrio perfecto entre disponibilidad y rentabilidad.',
        text: 'En AYCCONEX, ayudamos a su empresa a determinar la cantidad exacta de inventario necesaria para satisfacer la demanda sin inmovilizar capital innecesariamente ni arriesgarse a quiebres de stock.',
      },
      {
        title: 'Rediseño de procesos de abastecimiento desde China',
        catchphrase: 'No adaptamos su empresa a la logística; rediseñamos la logística para que sirva a su empresa.',
        text: 'Nos especializamos en auditar y reestructurar flujos de suministro desde el gigante asiático, eliminando las ineficiencias que erosionan sus márgenes de ganancia.',
      },
    ],
    ctaText: 'SOLICITAR AUDITORÍA LOGÍSTICA',
    ctaDesc: 'Mejore sus márgenes de ganancia.',
  },
];

const servicesEN: ServiceData[] = [
  {
    id: 'representacion',
    icon: 'briefcase',
    shortTitle: 'Commercial Representation',
    fullTitle: 'Commercial Representation and Business Development',
    desc: 'Market development and opening. We act as your extension in the territory, managing negotiations and ensuring client loyalty.',
    color: '#005579',
    details: [
      {
        title: 'Market development and opening',
        text: 'We identify potential clients that align with the brand\'s objectives. We study the market to understand the competition, demand and local regulations. We improve the reach and visibility of represented companies in the new territory.',
      },
      {
        title: 'Commercial management and negotiation',
        text: 'Bilingual communication, acting as a technical and cultural translator in complex negotiations. We manage commercial terms and contracts to ensure the best conditions. We prepare and review all commercial documentation necessary for the operation to be successful.',
      },
      {
        title: 'Loyalty and continuous improvement',
        text: 'We constantly evaluate customer satisfaction to optimize foreign trade processes, strengthening commercial relationships to ensure business continuity.',
      },
    ],
    ctaText: 'QUOTE REPRESENTATION',
    ctaDesc: 'We represent your interests with full transparency.',
  },
  {
    id: 'gestion-china',
    icon: 'factory',
    shortTitle: 'Management in China',
    fullTitle: 'Commercial Management in China',
    desc: 'Supplier search, factory merchandise inspections and comprehensive logistics for secure imports.',
    color: '#EF494C',
    details: [
      {
        title: 'Potential supplier search',
        catchphrase: 'Supplier selection with guaranteed trust.',
        text: 'We filter through various options to present only real and verified manufacturers, eliminating unnecessary intermediaries and guaranteeing that the supplier has the technical capacity your company demands.',
      },
      {
        title: 'Supplier negotiation',
        catchphrase: 'Better conditions, greater benefits.',
        text: 'We obtain the most favorable commercial terms for your company. We don\'t just negotiate competitive prices, but also delivery times, quality standards and solid guarantees, ensuring that every agreement enhances your profitability.',
      },
      {
        title: 'Commercial document preparation and translation',
        catchphrase: 'Information flow without barriers.',
        text: 'We prepare and translate commercial documents in Spanish, Mandarin and English. We ensure that technical terms are correctly expressed, eliminating ambiguities that often cause conflicts. With AYCCONEX, what is signed in Uruguay is exactly what is executed in China.',
      },
      {
        title: 'Origin merchandise inspection',
        catchphrase: 'We are your eyes in the factory.',
        text: 'We eliminate uncertainty by physically verifying that what you purchased is exactly what is loaded into the container. We supervise quantities, packaging quality and product condition before it leaves China, ensuring that your investment arrives in Uruguay exactly as agreed.',
      },
      {
        title: 'Factory or supplier inspection',
        catchphrase: '360° evaluation of your commercial partner.',
        text: 'We act as your on-ground auditors to qualify the reliability of your partners at origin. We deliver a detailed report that includes the manufacturer\'s legal situation, export history and working conditions. Our physical presence allows us to see what a camera doesn\'t show, guaranteeing total transparency in your supply chain.',
      },
      {
        title: 'Transportation management to destination',
        catchphrase: 'Comprehensive logistics, from factory to your hands.',
        text: 'We coordinate the transfer of your merchandise from any point in China to its final destination in Uruguay. We handle selecting the most efficient routes and the most reliable logistics operators, optimizing transit times and reducing operational costs so that your supply chain never stops.',
      },
    ],
    ctaText: 'QUOTE YOUR IMPORT NOW',
    ctaDesc: 'Import from China risk-free.',
  },
  {
    id: 'turismo-comercial',
    icon: 'plane',
    shortTitle: 'Commercial Tourism',
    fullTitle: 'Commercial Tourism to China',
    desc: 'Accompaniment at trade fairs, factory visits and internal transfer management. Your business trip 100% optimized.',
    color: '#005579',
    details: [
      {
        title: 'Trade fair accompaniment',
        catchphrase: 'Much more than a translation.',
        text: 'At trade fairs, the language of business goes beyond words. With our presence, you have experts who understand commercial technicalities and cultural negotiation codes. We facilitate fluid dialogue in Mandarin, English and Spanish to close deals with precision and confidence from the first meeting.',
      },
      {
        title: 'Translation and interpretation',
        catchphrase: 'Comprehensive Trilingual Communication.',
        text: 'We facilitate fluid dialogue between your company and your partners in China. Whether in commercial document translation, business meetings or in-person interpretation during commercial missions, AYCCONEX guarantees that communication is direct, transparent and efficient, allowing you to focus on decision-making while we eliminate language barriers.',
      },
      {
        title: 'Visits to factories of interest',
        catchphrase: 'See the reality of your supplier.',
        text: 'Much more than a visit; it\'s your guarantee of trust. We physically accompany you to your suppliers\' facilities in China to verify their infrastructure, production processes and real capacity. With AYCCONEX, you know firsthand who you\'re buying from, ensuring the factory meets the standards your company demands.',
      },
      {
        title: 'Supplier exchange',
        catchphrase: 'Building bonds of trust.',
        text: 'We facilitate direct and personal dialogue with decision-makers in China. We don\'t just translate words, but act as cultural mediators to build solid and lasting relationships of trust (Guanxi). We ensure that your company is perceived with the seriousness and prestige it deserves, laying the foundations for a successful commercial partnership.',
      },
      {
        title: 'Internal transfer management',
        catchphrase: 'Total mobility, your itinerary under control.',
        text: 'We comprehensively coordinate your internal transfers, avoiding the complexity of transportation in China, from private vehicles with professional drivers to high-speed trains and domestic flights. We handle the logistics so that your only priority is the success of your business meetings.',
      },
    ],
    ctaText: 'REQUEST ACCOMPANIMENT',
    ctaDesc: 'Ensure the success of your business meetings.',
  },
  {
    id: 'exportacion',
    icon: 'ship',
    shortTitle: 'Export to China',
    fullTitle: 'Export Management to China',
    desc: 'We take your Uruguayan products to the Asian market. Market study and search for potential clients.',
    color: '#EF494C',
    details: [
      {
        title: 'Preliminary market study',
        catchphrase: 'Competitiveness Analysis.',
        text: 'We research market prices, the most efficient distribution channels and buyer behavior in China. We identify niches where the Uruguayan product has greater competitive advantages, allowing you to adjust your commercial offer to maximize your margins and closing possibilities.',
      },
      {
        title: 'Potential client search in China',
        catchphrase: 'Connection with demand in China.',
        text: 'We put your product in front of the right buyer. We handle the search and first contact with potential clients in China, validating their real interest and import capacity. Our goal is to convert prospecting into purchase orders, facilitating the initial commercial link so that your export materializes quickly and safely.',
      },
      {
        title: 'Supplier negotiation',
        catchphrase: 'Better conditions, greater benefits.',
        text: 'We obtain the most favorable commercial terms for your company. We don\'t just negotiate competitive prices, but also delivery times, quality standards and solid guarantees, ensuring that every agreement enhances your profitability.',
      },
      {
        title: 'Commercial document preparation and translation',
        catchphrase: 'Information flow without barriers.',
        text: 'We prepare and translate commercial documents in Spanish, Mandarin and English. We ensure that technical terms are correctly expressed, eliminating ambiguities that often cause conflicts. With AYCCONEX, what is signed in Uruguay is exactly what is executed in China.',
      },
      {
        title: 'Transportation management to destination',
        catchphrase: 'Comprehensive logistics connectivity in the Asian market.',
        text: 'We facilitate the arrival of your products to the main consumption centers in China. We select and coordinate the fastest and most economical internal transport routes, acting as your operational link at destination. We ensure that the transition between international transport and local distribution is smooth, eliminating the complexities of Chinese internal logistics.',
      },
    ],
    ctaText: 'QUOTE EXPORT TO CHINA',
    ctaDesc: 'Take your brand to the Asian giant.',
  },
  {
    id: 'cadena-suministros',
    icon: 'trending-up',
    shortTitle: 'Supply Chain',
    fullTitle: 'China-Uruguay Supply Chain Optimization',
    desc: 'We audit and redesign your logistics. We determine Lead Time and optimal stock to maximize profitability.',
    color: '#111827',
    details: [
      {
        title: 'China-Uruguay Lead Time determination',
        text: 'We calculate the complete logistics cycle: from the issuance of the purchase order and production time at origin, to maritime transit, customs clearance in Montevideo and delivery to your warehouse. We identify the critical variables that affect each stage.',
      },
      {
        title: 'Optimal stock level definition',
        catchphrase: 'The perfect balance between availability and profitability.',
        text: 'At AYCCONEX, we help your company determine the exact amount of inventory necessary to satisfy demand without unnecessarily immobilizing capital or risking stockouts.',
      },
      {
        title: 'Redesign of supply processes from China',
        catchphrase: 'We don\'t adapt your company to logistics; we redesign logistics to serve your company.',
        text: 'We specialize in auditing and restructuring supply flows from the Asian giant, eliminating the inefficiencies that erode your profit margins.',
      },
    ],
    ctaText: 'REQUEST LOGISTICS AUDIT',
    ctaDesc: 'Improve your profit margins.',
  },
];

const servicesZH: ServiceData[] = [
  {
    id: 'representacion',
    icon: 'briefcase',
    shortTitle: '商业代理',
    fullTitle: '商业代理与业务发展',
    desc: '市场开发和开拓。我们作为您在该地区的延伸，管理谈判并确保客户忠诚度。',
    color: '#005579',
    details: [
      {
        title: '市场开发与开拓',
        text: '我们识别与品牌目标一致的潜在客户。我们研究市场以了解竞争、需求和当地法规。我们提高代表企业在新市场的覆盖面和知名度。',
      },
      {
        title: '商业管理与谈判',
        text: '双语沟通，在复杂谈判中充当技术和文化翻译。我们管理商业条款和合同以确保最佳条件。我们编制和审查所有必要的商业文件，使运营取得成功。',
      },
      {
        title: '忠诚度与持续改进',
        text: '我们不断评估客户满意度，优化外贸流程，加强商业关系以确保业务的连续性。',
      },
    ],
    ctaText: '报价商业代理',
    ctaDesc: '我们以完全透明的方式代表您的利益。',
  },
  {
    id: 'gestion-china',
    icon: 'factory',
    shortTitle: '中国管理',
    fullTitle: '中国商业管理',
    desc: '供应商搜索、工厂货物检验和综合物流，确保安全进口。',
    color: '#EF494C',
    details: [
      {
        title: '潜在供应商搜索',
        catchphrase: '值得信赖的供应商选择。',
        text: '我们在众多选择中筛选，只向您展示真实且经过验证的制造商，消除不必要的中间商，确保供应商具备您企业所需的技术能力。',
      },
      {
        title: '供应商谈判',
        catchphrase: '更好的条件，更大的利益。',
        text: '我们为您的企业获取最有利的商业条件。我们不仅谈判有竞争力的价格，还包括交货期、质量标准和可靠的保证，确保每项协议都能提高您的盈利能力。',
      },
      {
        title: '商业文件编制与翻译',
        catchphrase: '信息流通无障碍。',
        text: '我们用西班牙语、普通话和英语编制和翻译商业文件。我们确保技术术语得到正确表达，消除经常引起冲突的歧义。在AYCCONEX，在乌拉圭签署的内容就是在中国执行的内容。',
      },
      {
        title: '原产地货物检验',
        catchphrase: '我们是您在工厂的眼睛。',
        text: '我们通过实地验证消除不确定性，确保您购买的商品与装入集装箱的完全一致。我们在货物离开中国之前监督数量、包装质量和产品状态，确保您的投资按照约定到达乌拉圭。',
      },
      {
        title: '工厂或供应商检验',
        catchphrase: '商业伙伴360°评估。',
        text: '我们作为您的实地审计员评估您合作伙伴的可靠性。我们提供详细报告，包括制造商的法律状况、出口历史和工作条件。我们的实地存在使我们能够看到摄像头无法显示的内容，确保您供应链的完全透明。',
      },
      {
        title: '目的地运输管理',
        catchphrase: '综合物流，从工厂到您手中。',
        text: '我们协调您的货物从中国任何地点运送到乌拉圭的最终目的地。我们负责选择最高效的路线和最可靠的物流运营商，优化运输时间并降低运营成本，使您的供应链永不停歇。',
      },
    ],
    ctaText: '立即报价进口',
    ctaDesc: '无风险从中国进口。',
  },
  {
    id: 'turismo-comercial',
    icon: 'plane',
    shortTitle: '商务旅游',
    fullTitle: '中国商务旅游',
    desc: '贸易展览陪同、工厂参观和内部交通管理。您的商务旅行100%优化。',
    color: '#005579',
    details: [
      {
        title: '贸易展览陪同',
        catchphrase: '不仅仅是翻译。',
        text: '在展会上，商业语言超越了文字。有我们在场，您将拥有理解商业术语和文化谈判规范的专家。我们促进普通话、英语和西班牙语的流畅对话，从第一次会面起就以精准和信心达成协议。',
      },
      {
        title: '翻译和口译',
        catchphrase: '全面三语沟通。',
        text: '我们促进您公司与中国合作伙伴之间的顺畅对话。无论是商业文件翻译、商务会议还是商业考察期间的现场口译，AYCCONEX保证沟通直接、透明、高效，让您专注于决策，而我们消除语言障碍。',
      },
      {
        title: '感兴趣工厂参观',
        catchphrase: '看到供应商的真实情况。',
        text: '不仅仅是参观，更是您的信任保证。我们亲自陪同您前往中国供应商的设施，验证其基础设施、生产流程和实际能力。通过AYCCONEX，您可以亲身了解您的供应商，确保工厂符合您企业要求的标准。',
      },
      {
        title: '供应商交流',
        catchphrase: '建立信任纽带。',
        text: '我们促进与中国决策者的直接和个人对话。我们不仅翻译文字，还作为文化调解者建立牢固持久的信任关系（关系）。我们确保您的企业以其应得的严肃性和声望被看待，为成功的商业合作奠定基础。',
      },
      {
        title: '内部交通管理',
        catchphrase: '全面出行，行程尽在掌控。',
        text: '我们全面协调您的内部交通，避免中国交通的复杂性，从配有专业司机的私人车辆到高速铁路和国内航班。我们负责物流，让您唯一的优先事项是商务会议的成功。',
      },
    ],
    ctaText: '申请陪同服务',
    ctaDesc: '确保您商务会议的成功。',
  },
  {
    id: 'exportacion',
    icon: 'ship',
    shortTitle: '出口到中国',
    fullTitle: '中国出口管理',
    desc: '我们将乌拉圭产品带入亚洲市场。市场研究和潜在客户搜索。',
    color: '#EF494C',
    details: [
      {
        title: '初步市场研究',
        catchphrase: '竞争力分析。',
        text: '我们调研中国的市场价格、最高效的分销渠道和买家行为。我们识别乌拉圭产品具有更大竞争优势的利基市场，允许您调整商业报价以最大化利润和成交可能性。',
      },
      {
        title: '在中国搜索潜在客户',
        catchphrase: '连接中国需求。',
        text: '我们将您的产品呈现在合适的买家面前。我们负责搜索和首次联系中国的潜在客户，验证其真实兴趣和进口能力。我们的目标是将潜在客户转化为采购订单，促进初始商业联系，使您的出口快速安全地实现。',
      },
      {
        title: '供应商谈判',
        catchphrase: '更好的条件，更大的利益。',
        text: '我们为您的企业获取最有利的商业条件。我们不仅谈判有竞争力的价格，还包括交货期、质量标准和可靠的保证，确保每项协议都能提高您的盈利能力。',
      },
      {
        title: '商业文件编制与翻译',
        catchphrase: '信息流通无障碍。',
        text: '我们用西班牙语、普通话和英语编制和翻译商业文件。我们确保技术术语得到正确表达，消除经常引起冲突的歧义。在AYCCONEX，在乌拉圭签署的内容就是在中国执行的内容。',
      },
      {
        title: '目的地运输管理',
        catchphrase: '亚洲市场综合物流连接。',
        text: '我们促进您的产品到达中国主要消费中心。我们选择和协调最快速、最经济的内部运输路线，作为您在目的地的运营纽带。我们确保国际运输和本地分销之间的过渡顺畅，消除中国内部物流的复杂性。',
      },
    ],
    ctaText: '报价出口中国',
    ctaDesc: '将您的品牌带入亚洲巨人。',
  },
  {
    id: 'cadena-suministros',
    icon: 'trending-up',
    shortTitle: '供应链',
    fullTitle: '中国-乌拉圭供应链优化',
    desc: '我们审计和重新设计您的物流。确定前置时间和最优库存以最大化盈利能力。',
    color: '#111827',
    details: [
      {
        title: '中国-乌拉圭前置时间确定',
        text: '我们计算完整的物流周期：从采购订单发出和原产地生产时间，到海上运输、蒙得维的亚清关和交付到您的仓库。我们识别影响每个阶段的关键变量。',
      },
      {
        title: '最优库存水平定义',
        catchphrase: '可用性与盈利能力的完美平衡。',
        text: '在AYCCONEX，我们帮助您的企业确定满足需求所需的精确库存量，避免不必要的资金占用或缺货风险。',
      },
      {
        title: '从中国采购流程重新设计',
        catchphrase: '我们不让您的企业适应物流；我们重新设计物流以服务于您的企业。',
        text: '我们专注于审计和重组来自亚洲巨人的供应流程，消除侵蚀您利润率的低效性。',
      },
    ],
    ctaText: '申请物流审计',
    ctaDesc: '提高您的利润率。',
  },
];

const allServices: Record<Lang, ServiceData[]> = {
  es: servicesES,
  en: servicesEN,
  zh: servicesZH,
};

export function getServices(lang: Lang): ServiceData[] {
  return allServices[lang] || allServices.es;
}

export function getServiceById(lang: Lang, id: string): ServiceData | undefined {
  return getServices(lang).find((s) => s.id === id);
}
