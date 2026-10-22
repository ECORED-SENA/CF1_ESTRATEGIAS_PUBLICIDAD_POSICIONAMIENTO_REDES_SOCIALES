<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Público objetivo y segmentación publicitaria
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img1.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-4.p-2 El <b>público objetivo</b> es el grupo de personas al que se dirige una estrategia publicitaria en redes sociales. Su definición permite orientar la comunicación hacia usuarios cuyas características, necesidades e intereses guardan relación con la marca, el producto, el servicio o la propuesta promocionada. Las audiencias digitales son diversas y presentan diferentes hábitos de consumo, intereses, necesidades y formas de interacción. Por esta razón, definir el público permite construir mensajes pertinentes y establecer criterios para dirigir la campaña.
          p La <b>segmentación publicitaria</b> complementa esta definición al dividir una audiencia amplia en grupos más específicos a partir de características comunes, como edad, ubicación, intereses, comportamientos digitales o relación previa con la marca. Esta delimitación permite utilizar los recursos publicitarios de manera más precisa. Por tanto, la definición del público y la segmentación deben guardar correspondencia con el objetivo de campaña. A partir de esta relación, es necesario reconocer las características de las audiencias, los principales criterios de segmentación y el procedimiento para seleccionar los públicos.
      Separador
      //- Inicio Tema4.1
      .row
        #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.1 Características y comportamiento de las audiencias digitales
      p(data-aos="fade-left") Las <b>audiencias digitales</b> están conformadas por usuarios que interactúan con contenidos, marcas, comunidades y plataformas en entornos digitales. Su participación puede expresarse mediante comentarios, reacciones, contenidos compartidos, publicaciones guardadas, mensajes, clics, visitas a perfiles o consultas de productos y servicios.
      .row.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img2.png", data-aos="zoom-in", style="width: 100%; height: 100%; object-fit: cover;")
        .col-lg-6.mb-4.mb-lg-0.d-flex.flex-column.justify-content-center
          p.mb-4.bg-color-4.p-2 Una de sus principales características es la <b>diversidad</b>, debido a que están integradas por personas con diferentes edades, intereses, ubicaciones, niveles educativos, hábitos de consumo, necesidades y formas de comunicación. En consecuencia, un mismo anuncio puede generar respuestas diferentes según las características de cada grupo.
          p.mb-0 El <b>comportamiento digital</b> corresponde a las acciones que los usuarios realizan dentro de las plataformas. Su análisis permite identificar, por ejemplo, los formatos con los que interactúan, los contenidos que consultan, los canales que utilizan y las acciones que realizan frente a una propuesta.
        .col-lg-2
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t4/img3.png", data-aos="zoom-in", style="width: 270px;")
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img4.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 Para precisarlo, es pertinente considerar los siguientes aspectos:          
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mt-3
              i.fas.fa-bullhorn.me-3
              span Edad aproximada y etapa de vida. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Ubicación geográfica. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Intereses personales o profesionales. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Necesidades relacionadas con el producto o servicio. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Tipo de contenido que consume. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Plataformas que utiliza con mayor frecuencia. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Nivel de interacción con la marca o el sector. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Problemas, deseos o expectativas frente a la oferta. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Acción que podría realizar después de recibir un anuncio.
      p Esta información permite adaptar el lenguaje, el diseño, el formato, el llamado a la acción y el canal. Por ejemplo, si un grupo interactúa principalmente con videos cortos, puede resultar pertinente emplear formatos audiovisuales; si consulta contenidos informativos, la comunicación puede requerir mensajes con mayor desarrollo. Comprender las características y el comportamiento de la audiencia constituye, entonces, la base para establecer los criterios con los que se realizará la segmentación publicitaria.
      Separador
      //- Inicio Tema4.2
      .row
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.2 Segmentación demográfica, geográfica, por intereses y comportamiento
      p(data-aos="fade-left") La <b>segmentación publicitaria</b> es el proceso mediante el cual una audiencia general se divide en grupos más específicos para dirigir los anuncios hacia personas que comparten determinadas características o comportamientos. Los principales criterios de segmentación se presentan a continuación:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3             
                .carousel-bg
                  .row.justify-content-center.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Demográfica
                            p Agrupa a las personas según características como edad, género, nivel educativo, ocupación, etapa de vida o composición familiar. Permite adecuar la comunicación de acuerdo con el perfil general del público.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Geográfica
                            p Delimita la audiencia según país, región, ciudad, municipio, zona o radio de cobertura. Resulta pertinente cuando la oferta se encuentra disponible en un territorio determinado o la campaña responde a una necesidad local.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Por intereses
                            p Considera gustos, preferencias, temas o actividades relacionados con la audiencia, como tecnología, moda, educación, deporte, gastronomía, emprendimiento, viajes o bienestar. Permite relacionar la campaña con asuntos que despiertan interés en el público.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Por comportamiento
                            p Considera acciones realizadas en entornos digitales, como interacciones, clics, visitas, reproducciones, mensajes o compras anteriores. Permite orientar las campañas hacia usuarios que han manifestado determinados comportamientos relacionados con la oferta.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Personalizada
                            p Se construye a partir de personas que ya han tenido alguna relación con la marca, como usuarios que visitaron un sitio web, realizaron una compra, se registraron, enviaron un mensaje o interactuaron con contenidos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t4/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Similar
                            p Se orienta hacia nuevos usuarios que comparten características con una audiencia existente. Permite ampliar el alcance de la campaña hacia públicos con perfiles relacionados con personas que ya mantienen algún vínculo con la marca.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t4/img5.png', style="width: 300px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t4/img6.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 La selección del criterio depende del objetivo publicitario. Una campaña de reconocimiento puede trabajar con una audiencia más amplia, mientras que una campaña orientada a la conversión puede requerir públicos con mayor relación con la oferta o con comportamientos que indiquen un interés previo.
          p La segmentación también requiere equilibrio. Una audiencia excesivamente amplia puede incluir personas con poca relación con la propuesta, mientras que una delimitación demasiado reducida puede restringir el alcance. Asimismo, los criterios seleccionados deben mantener coherencia con el mensaje, la oferta y las condiciones de la campaña.
      Separador
      //- Inicio Tema4.3
      .row
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.3 Selección de públicos según objetivos de campaña
      p(data-aos="fade-left") La selección de públicos consiste en determinar a qué grupo de usuarios se dirigirá una campaña de acuerdo con el objetivo establecido. Esta decisión relaciona las características de la audiencia con la respuesta que se espera generar. La relación entre los principales objetivos y la selección del público puede organizarse de la siguiente manera:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t4/img7.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Reconocimiento")
                p.mb-4 Puede dirigirse a públicos relativamente amplios que mantengan relación con la marca o el sector. La segmentación puede considerar ubicación, edad, intereses y otras características que permitan ampliar la presencia entre usuarios pertinentes.
              .row(titulo="Interacción")
                p.mb-4 Requiere públicos con afinidad hacia los contenidos y con posibilidades de participar mediante comentarios, reacciones, mensajes u otras acciones. Los intereses y comportamientos relacionados con la temática adquieren especial relevancia.
              .row(titulo="Tráfico")
                p.mb-4 Se orienta a personas con posibilidades de consultar información adicional en una página, catálogo, tienda virtual, formulario o perfil. La audiencia debe guardar relación con la oferta y con el contenido disponible en el canal de destino.
              .row(titulo="Clientes potenciales")
                p.mb-4 Requiere una audiencia más específica, integrada por personas que puedan necesitar el producto o servicio, tengan interés en la temática o hayan realizado acciones relacionadas con la oferta.
              .row(titulo="Conversión")
                p.mb-4 Prioriza usuarios con mayor cercanía a la acción esperada, como personas que han visitado un sitio, interactuado con contenidos, enviado mensajes, consultado productos o manifestado interés previamente.
      //- Fin Accordion 1
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img8.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 La selección del público debe realizarse mediante una secuencia organizada:
          
          ul.lista-ul.color-vinotinto-custom.mb-0
            li.d-flex.align-items-center.mb-2.mt-3
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 1
              span <b>Definir el objetivo principal</b> de la campaña.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 2
              span <b>Identificar el tipo de usuario</b> que puede responder a ese objetivo.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 3
              span <b>Reconocer las características demográficas y geográficas</b> pertinentes.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 4
              span <b>Determinar los intereses</b> relacionados con la oferta.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 5
              span <b>Analizar los comportamientos digitales</b> relevantes.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 6
              span <b>Seleccionar la plataforma</b> en la que se encuentra la audiencia.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 7
              span <b>Adaptar el mensaje</b> según el nivel de conocimiento del público.
            li.d-flex.align-items-center.mb-2
              span.px-2.py-1.fw-bold.rounded.me-3(style="background-color: #f7be29; color: #121212; min-width: 28px; text-align: center;") 8
              span <b>Revisar el tamaño de la audiencia</b> en relación con el presupuesto disponible.
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-3.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Esta selección también debe corresponder con la fase del <b>embudo digital</b>. En la atracción pueden emplearse públicos más amplios; en la consideración, usuarios con mayor nivel de interés; y, en la conversión, audiencias más cercanas a la acción esperada.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t4/img9.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-5(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Finalmente, debe existir coherencia entre <b>objetivo, público y mensaje</b>. Una campaña para promocionar un producto especializado requiere una audiencia relacionada con la oferta, mientras que una campaña de reconocimiento necesita suficiente amplitud para llegar a nuevos usuarios pertinentes. Esta correspondencia permite orientar la comunicación y proporciona la base para definir posteriormente el presupuesto y el plan de pauta publicitaria.
            
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
