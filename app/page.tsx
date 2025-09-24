'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';

export default function Home() {
  const router = useRouter();

  const features = [
    {
      title: "Apoyo Psicológico Accesible",
      description: "Conecta con psicólogos profesionales especializados en el bienestar estudiantil, disponibles cuando los necesites.",
      details: ["Sesiones virtuales", "Psicólogos especializados", "Horarios flexibles"]
    },
    {
      title: "Herramientas de Bienestar",
      description: "Recursos prácticos y ejercicios diseñados específicamente para gestionar el estrés académico y emocional.",
      details: ["Ejercicios de relajación", "Técnicas de estudio", "Gestión del tiempo"]
    },
    {
      title: "Comunidad de Apoyo",
      description: "Conecta con otros estudiantes que enfrentan desafíos similares en un ambiente seguro y empático.",
      details: ["Grupos de apoyo", "Foros seguros", "Mentoría entre pares"]
    },
    {
      title: "Recursos Educativos",
      description: "Contenido valioso sobre salud mental, técnicas de estudio y desarrollo personal para estudiantes.",
      details: ["Artículos especializados", "Videos educativos", "Guías prácticas"]
    },
    {
      title: "Seguimiento Personalizado",
      description: "Monitorea tu progreso emocional y académico con herramientas que se adaptan a tus necesidades.",
      details: ["Diario emocional", "Métricas de bienestar", "Objetivos personalizados"]
    },
    {
      title: "Confidencialidad Total",
      description: "Tu privacidad es nuestra prioridad. Toda la información se maneja con el más alto nivel de confidencialidad.",
      details: ["Cifrado end-to-end", "Políticas de privacidad", "Consentimiento informado"]
    }
  ];

  const services = [
    {
      title: "Sesiones de Terapia",
      description: "Conecta con psicólogos especializados en salud mental estudiantil para sesiones individuales o grupales.",
      benefits: ["Psicólogos certificados", "Modalidad virtual", "Horarios flexibles"]
    },
    {
      title: "Herramientas de Autocuidado",
      description: "Accede a ejercicios, meditaciones y técnicas para manejar el estrés y la ansiedad académica.",
      benefits: ["Ejercicios guiados", "Meditaciones", "Técnicas de respiración"]
    },
    {
      title: "Grupos de Apoyo",
      description: "Participa en grupos temáticos donde puedes compartir experiencias con otros estudiantes.",
      benefits: ["Grupos temáticos", "Moderación profesional", "Ambiente seguro"]
    },
    {
      title: "Recursos Académicos",
      description: "Herramientas para mejorar tu rendimiento académico mientras cuidas tu bienestar emocional.",
      benefits: ["Técnicas de estudio", "Gestión del tiempo", "Prevención del burnout"]
    }
  ];

  const testimonials = [
    {
      quote: "HappyMe me ayudó a encontrar el equilibrio entre mis estudios y mi bienestar emocional. Las sesiones con mi psicóloga fueron fundamentales para superar mi ansiedad académica.",
      author: "María González",
      university: "Estudiante de Psicología, UNAM",
      results: "Reducción del 80% en ansiedad académica"
    },
    {
      quote: "La comunidad de apoyo me hizo sentir que no estaba sola. Poder compartir mis experiencias con otros estudiantes fue muy sanador.",
      author: "Carlos Mendoza",
      university: "Estudiante de Ingeniería, ITESM",
      results: "Mejora del 90% en su estado de ánimo"
    },
    {
      quote: "Las herramientas de autocuidado me enseñaron técnicas que uso todos los días. Ahora puedo manejar mejor la presión de los exámenes.",
      author: "Ana Rodríguez",
      university: "Estudiante de Medicina, UAM",
      results: "Aumento del 70% en su rendimiento académico"
    }
  ];

  const pricing = [
    {
      name: "Estudiante",
      price: "Gratis",
      description: "Acceso básico para estudiantes universitarios",
      features: [
        "Herramientas de autocuidado",
        "Recursos educativos",
        "Comunidad de apoyo",
        "1 sesión de consulta gratuita",
        "Soporte por chat"
      ]
    },
    {
      name: "Premium",
      price: "$15",
      period: "/mes",
      description: "Para estudiantes que necesitan apoyo continuo",
      features: [
        "Todo lo de Estudiante",
        "Sesiones ilimitadas con psicólogos",
        "Seguimiento personalizado",
        "Grupos de apoyo premium",
        "Recursos exclusivos",
        "Soporte prioritario"
      ],
      popular: true
    },
    {
      name: "Institucional",
      price: "Personalizado",
      description: "Para universidades y instituciones educativas",
      features: [
        "Todo lo de Premium",
        "Dashboard institucional",
        "Reportes de bienestar estudiantil",
        "Capacitación para personal",
        "Integración con sistemas universitarios",
        "Soporte dedicado"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image 
                  src="/happy-me-logo.png" 
                  alt="HappyMe Logo" 
                  width={40} 
                  height={40}
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-semibold text-gray-900">HappyMe</span>
            </div>
            
            {/* Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Inicio
              </a>
              <a href="#caracteristicas" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Características
              </a>
              <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Servicios
              </a>
              <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Testimonios
              </a>
              <a href="#precios" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">
                Precios
              </a>
            </nav>
            
            <div className="flex items-center space-x-6">
              <Button variant="ghost" onClick={() => router.push('/login')} className="text-gray-600 hover:text-gray-900">
                Iniciar Sesión
              </Button>
              <Button onClick={() => router.push('/register')} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white">
                Comenzar Gratis
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-slate-50/80"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-300/15 to-blue-400/15 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/10 to-blue-300/10 rounded-full blur-2xl"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-slate-100 border border-blue-200/50 mb-6 sm:mb-8">
            <span className="text-sm font-medium text-gray-700">💙 Tu bienestar emocional es nuestra prioridad</span>
          </div>
          
          {/* Logo principal */}
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 relative">
              <Image 
                src="/happy-me-logo.png" 
                alt="HappyMe - Apoyo emocional para estudiantes" 
                width={160} 
                height={160}
                className="w-full h-full drop-shadow-lg"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Apoyo emocional y psicológico
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700 mt-2">
              para estudiantes universitarios
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Conecta con psicólogos especializados, accede a herramientas de bienestar 
            y únete a una comunidad que entiende los desafíos de la vida universitaria.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Button 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => router.push('/register')}
            >
              Comenzar Gratis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3 border-blue-300 text-blue-700 hover:bg-blue-50 w-full sm:w-auto hover:border-blue-400 transition-all duration-300"
            >
              Conocer Más
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 px-4 sm:px-0">
            Sin costo inicial • Acceso inmediato • Confidencialidad garantizada
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              Todo lo que necesitas para tu bienestar
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
              Herramientas especializadas diseñadas para apoyar tu salud mental y éxito académico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 sm:p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-xs sm:text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              Nuestros servicios
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
              Soluciones integrales para el bienestar emocional y académico de los estudiantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group p-5 sm:p-6 hover:shadow-lg transition-all duration-300 border-gray-100 hover:border-blue-200 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50/50">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{service.title.charAt(0)}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-xs sm:text-sm leading-relaxed">{service.description}</p>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-xs text-gray-500 flex items-center group-hover:text-gray-600 transition-colors duration-300">
                        <div className="w-1 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mr-2 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-slate-50 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              Historias de éxito reales
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
              Descubre cómo otros estudiantes han transformado su bienestar emocional y académico.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group p-6 sm:p-8 bg-white/70 backdrop-blur-md border-white/30 hover:bg-white/85 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200/60 h-full flex flex-col">
                <div className="flex items-start mb-4 sm:mb-6">
                  <div className="flex text-yellow-400 text-lg sm:text-xl">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="group-hover:scale-110 transition-transform duration-300" style={{transitionDelay: `${i * 50}ms`}}>★</span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed relative">
                  <span className="text-4xl text-gray-200 absolute -top-2 -left-2">"</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                </blockquote>
                <div className="flex flex-col h-full mt-auto justify-center">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-base group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-gray-900 text-base group-hover:text-blue-600 transition-colors duration-300 truncate">{testimonial.author}</div>
                      <div className="text-sm text-gray-600 truncate">{testimonial.university}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50/80 to-blue-100/60 backdrop-blur-sm rounded-lg px-4 py-3 border-l-4 border-blue-500 shadow-sm group-hover:shadow-md transition-all duration-300">
                    <div className="text-sm font-semibold text-blue-700 group-hover:text-blue-800 transition-colors duration-300">{testimonial.results}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
              Planes accesibles para estudiantes
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0">
              Comienza gratis y elige el plan que mejor se adapte a tus necesidades.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {pricing.map((plan, index) => (
              <Card key={index} className={`group p-6 sm:p-8 relative transition-all duration-300 hover:-translate-y-1 ${plan.popular ? 'border-2 border-blue-500 shadow-xl bg-gradient-to-br from-blue-50/50 to-slate-50/50' : 'border-gray-200 hover:shadow-lg hover:border-blue-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-lg">
                      Más Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-xl">{plan.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-sm sm:text-base text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-100 rounded-full mr-2 sm:mr-3 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full text-sm sm:text-base transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl' : 'bg-gray-100 hover:bg-gray-200 text-gray-900 hover:shadow-md'}`}
                  onClick={() => router.push('/register')}
                >
                  {plan.name === 'Institucional' ? 'Contactar Ventas' : 'Comenzar'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">10K+</div>
              <div className="text-blue-100 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">Estudiantes apoyados</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">95%</div>
              <div className="text-blue-100 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">Mejora en bienestar</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-blue-100 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">Psicólogos especializados</div>
            </div>
            <div className="group">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-blue-100 text-xs sm:text-sm group-hover:text-white transition-colors duration-300">Soporte disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-slate-100 border border-blue-200/50 mb-6 sm:mb-8">
            <span className="text-sm font-medium text-gray-700">💙 Únete a miles de estudiantes felices</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            ¿Listo para cuidar tu bienestar emocional?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            Únete a la comunidad de estudiantes que han transformado su vida universitaria 
            con el apoyo de HappyMe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => router.push('/register')}
            >
              Comenzar Gratis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-sm sm:text-base px-6 sm:px-8 py-3 border-blue-300 text-blue-700 hover:bg-blue-50 w-full sm:w-auto hover:border-blue-400 transition-all duration-300 hover:scale-105"
            >
              Agendar Consulta
            </Button>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
            Acceso inmediato • Sin compromiso • Tu bienestar es nuestra prioridad
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 relative">
                  <Image 
                    src="/happy-me-logo.png" 
                    alt="HappyMe Logo" 
                    width={32} 
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-lg sm:text-xl font-semibold text-gray-900">HappyMe</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md">
                La plataforma de bienestar emocional que conecta estudiantes universitarios 
                con el apoyo psicológico y herramientas que necesitan para triunfar.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm">
                  Instagram
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm">
                  Facebook
                </Button>
                <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-700 text-xs sm:text-sm">
                  TikTok
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Servicios</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Sesiones de Terapia</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Herramientas de Bienestar</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Grupos de Apoyo</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Recursos Educativos</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Seguimiento Personalizado</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Empresa</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Acerca de HappyMe</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Nuestro Equipo</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Carreras</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Prensa</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">Recursos</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Blog de Bienestar</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Comunidad</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Guías Prácticas</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Webinars</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-500">
              &copy; 2025 HappyMe. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm text-gray-500">
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Privacidad</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Términos</a>
              <a href="#" className="hover:text-blue-600 transition-colors duration-200">Confidencialidad</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
