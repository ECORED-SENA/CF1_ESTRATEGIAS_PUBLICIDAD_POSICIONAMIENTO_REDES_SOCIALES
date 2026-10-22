<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Anuncios y piezas publicitarias digitales
      .row.justify-content-center.align-items-stretch
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-4.p-3.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Los <b>anuncios y las piezas publicitarias digitales</b> transforman los objetivos de una campaña en contenidos dirigidos a una audiencia específica. Mediante estos recursos, una marca puede comunicar una oferta, destacar un beneficio, generar interés, promover una acción o fortalecer su presencia en entornos digitales. Una pieza publicitaria debe responder a lo establecido previamente en la estrategia. Por esta razón, su construcción requiere coherencia entre el <b>objetivo</b>, el <b>público</b>, el <b>mensaje</b>, el <b>formato</b>, la <b>plataforma</b> y el <b>llamado a la acción</b>. 
        .col-12.col-md-12.col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t6/img1.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-3(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Estos elementos determinan qué se comunica y qué respuesta se espera de la audiencia. Además, la pieza debe mantener correspondencia con la identidad de la marca y comunicar una idea principal de manera comprensible. A partir de estos criterios, es necesario reconocer la función del anuncio, las características del contenido promocional y la relación entre sus componentes.
      Separador
      //- Inicio Tema6.1
      .row
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Concepto y función del anuncio publicitario digital
      p(data-aos="fade-left") El <b>anuncio publicitario digital</b> es una pieza de comunicación diseñada para promocionar una marca, producto, servicio, evento, idea o propuesta en medios digitales. En redes sociales puede adoptar diferentes formatos según las características de la plataforma y el propósito de la campaña.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img2.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 Su función es comunicar una propuesta de valor a un público determinado y orientar una respuesta relacionada con el objetivo publicitario. También permite diferenciar la oferta frente a otras alternativas mediante atributos, beneficios y elementos comunicativos coherentes con la identidad de la marca. Antes de desarrollar un anuncio, es pertinente considerar las siguientes preguntas:
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mt-3
              i.fas.fa-bullhorn.me-3
              span ¿Qué se quiere comunicar? 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span ¿A quién se dirige el mensaje? 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span ¿Qué beneficio se desea destacar? 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span ¿Qué acción se espera del usuario? 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span ¿Cómo se relaciona el anuncio con el objetivo de campaña? 
      p(data-aos="fade-left") Estas preguntas permiten centrar la construcción de la pieza en su propósito y evitan que el diseño se convierta en un elemento independiente de la estrategia. La función del anuncio también puede variar según la fase del <b>embudo digital</b>. En atracción puede presentar la marca y despertar interés; en consideración puede comunicar beneficios o diferenciales; en conversión puede promover una acción concreta; y en fidelización puede contribuir a mantener la relación con personas que ya han tenido contacto con la marca.
      Separador
      //- Inicio Tema6.2
      .row
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.2 Características del contenido promocional en redes sociales
      p(data-aos="fade-left") Para que una pieza promocional comunique de manera efectiva, es necesario integrar diferentes características que favorezcan la comprensión del mensaje, su coherencia con la marca y la respuesta esperada de la audiencia.
      .row.justify-content-center.align-items-center           
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      Separador
      //- Inicio Tema6.3
      .row
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Relación entre anuncio, público, objetivo, mensaje y plataforma
      p(data-aos="fade-left") La efectividad de una pieza publicitaria depende de la articulación entre sus diferentes componentes. El público determina a quién se dirige la comunicación; el objetivo establece el resultado esperado; el mensaje concentra la idea principal; el formato define la forma de presentar el contenido; la plataforma establece el entorno de difusión; y el llamado a la acción orienta la respuesta del usuario. Esta relación se organiza de la siguiente manera:
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
                          img(src='@/assets/curso/temas/t6/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Público objetivo
                            p Define las personas a quienes se dirige la pieza. Sus características, intereses, necesidades y comportamientos orientan las decisiones comunicativas del anuncio.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Objetivo publicitario
                            p Determina el resultado que se espera alcanzar y establece la finalidad que debe cumplir la pieza dentro de la campaña.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Mensaje
                            p Comunica la idea central, el beneficio o la propuesta de valor que se desea transmitir a la audiencia. Debe ser comprensible y pertinente para el público seleccionado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Formato
                            p Determina la manera en que se presenta el contenido mediante los recursos disponibles en la plataforma y debe responder al mensaje y al comportamiento de la audiencia.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Plataforma
                            p Establece el canal donde circulará el anuncio y condiciona aspectos relacionados con los formatos, las dinámicas de consumo y las posibilidades de interacción.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t6/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Llamado a la acción
                            p Orienta al usuario hacia la respuesta esperada, como solicitar información, registrarse, comprar, acceder a un enlace o enviar un mensaje.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                      figure
                        img(src='@/assets/curso/temas/t6/img3.png', style="width: 300px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      .row.justify-content-center.align-items-stretch.mb-3.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-1
          p.mb-3 Antes de publicar una pieza, es pertinente revisar su coherencia mediante los siguientes criterios:
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span El anuncio responde al objetivo de la campaña.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span El mensaje es comprensible para el público seleccionado.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span El formato corresponde con la plataforma.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span El diseño mantiene relación con la identidad de la marca.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span El llamado a la acción es claro y pertinente.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span La pieza comunica un beneficio o una propuesta de valor.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span La información está organizada y evita elementos que puedan generar confusión.
            li.d-flex.align-items-center.mb-2
              i.fas.fa-bullhorn.me-3
              span La acción propuesta puede realizarse mediante el canal definido.
        .col-lg-5.d-flex.order-1.order-lg-2
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t6/img4.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") La articulación de estos elementos permite que el anuncio funcione como parte de la estrategia y no como una pieza aislada. Una vez establecidos estos criterios, es posible profundizar en la selección de formatos y en la construcción creativa y textual del contenido publicitario.


</template>

<script>
export default {
  name: 'Tema6',
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
