<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Estrategias publicitarias en redes sociales
      p(data-aos="fade-left") Una <b>estrategia publicitaria digital</b> organiza las decisiones y acciones necesarias para desarrollar una campaña en medios digitales. Su función es establecer una ruta coherente entre la necesidad que origina la campaña y las acciones que se desarrollarán para atenderla.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Planeación de estrategias publicitarias en redes sociales
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")                      
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t2/img1.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Planeación de la estrategia publicitaria digital
      p(data-aos="fade-left") Una estrategia publicitaria digital organiza las decisiones y acciones necesarias para desarrollar una campaña en medios digitales. Su función es establecer una ruta coherente entre la necesidad que origina la campaña y las acciones que se desarrollarán para atenderla.
      .row.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img2.png", data-aos="zoom-in", style="width: 100%; height: 100%; object-fit: cover;")
        .col-lg-6.mb-4.mb-lg-0.d-flex.flex-column.justify-content-center
          p.mb-4.bg-color-4.p-2 La planeación permite anticipar decisiones, establecer prioridades y evitar que la publicidad se desarrolle mediante acciones aisladas. También facilita mantener correspondencia entre la estrategia general de la organización y las acciones publicitarias que se ejecutarán en redes sociales.
          p.mb-0 En este sentido, la estrategia funciona como un marco de actuación que orienta la campaña antes de profundizar en aspectos específicos como los <b>objetivos publicitarios</b>, la <b>segmentación de públicos</b>, el <b>presupuesto</b>, el <b>plan de pauta</b> y la <b>construcción de las piezas publicitarias</b>, contenidos que se desarrollan en los apartados posteriores.
        .col-lg-2
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img3.png", data-aos="zoom-in", style="width: 270px;")
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Propósito comercial de la publicidad en redes sociales
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-12.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-5.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El <b>propósito comercial</b> establece la contribución que se espera de una campaña frente a una necesidad concreta de la organización, emprendimiento o proyecto. Su definición permite vincular la comunicación publicitaria con resultados que aporten al desarrollo de la actividad comercial.
        .col-12.col-md-12.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.img-fluid.rounded-3(src="@/assets/curso/temas/t2/img4.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.align-items-center
            p.mb-0 Este propósito puede relacionarse con la necesidad de fortalecer la presencia de una oferta, generar oportunidades de contacto con personas potencialmente interesadas o favorecer acciones asociadas con la actividad comercial. Su definición debe partir de la situación que se pretende atender y de la contribución que se espera obtener mediante la publicidad.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img5.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 Para precisarlo, es pertinente considerar los siguientes aspectos:          
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mt-3
              i.fas.fa-bullhorn.me-3
              span Necesidad comercial que se pretende atender.
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Objetivo de <i>marketing</i> al que contribuirá la campaña.
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Propuesta de valor relacionada con la necesidad identificada.
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Resultado comercial esperado.
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Recursos disponibles para desarrollar la acción publicitaria.          
          p.mb-0 La claridad del propósito comercial permite establecer prioridades y proporciona el punto de partida para definir posteriormente los <b>objetivos publicitarios</b>. De esta manera, el propósito responde a la necesidad comercial de la organización, mientras que los objetivos precisan los resultados que deberá alcanzar la campaña.
</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
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
