<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p(data-aos="fade-left") La <b>publicidad digital en redes sociales</b> constituye una herramienta estratégica para fortalecer la comunicación, la promoción y el posicionamiento de marcas, productos, servicios, emprendimientos y proyectos. Estos entornos permiten establecer contacto con diferentes públicos, comunicar propuestas de valor, generar recordación y orientar acciones específicas. Sin embargo, el desarrollo de una campaña requiere una planeación que articule los objetivos de <i>marketing</i> y comunicación con las características de la audiencia, de manera que las decisiones respondan a una intención definida y no a acciones aisladas.
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-lg-8.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 La planeación publicitaria comprende la <b>definición de objetivos</b>, la identificación del <b>público objetivo</b>, la aplicación de criterios de <b>segmentación</b>, la asignación del <b>presupuesto</b> y la estructuración del <b>plan de pauta digital</b>. Estos elementos permiten establecer qué se pretende alcanzar, a quién se dirigirá la campaña, qué recursos estarán disponibles y cómo se organizará su ejecución. A su vez, orientan la creación de anuncios y piezas publicitarias en coherencia con el mensaje, el formato, la plataforma y la respuesta esperada de la audiencia.
          p En este componente se abordarán los fundamentos necesarios para <b>planear estrategias publicitarias y diseñar anuncios digitales en redes sociales</b>, a partir de la relación entre publicidad, <i>marketing</i> y posicionamiento digital. El recorrido temático comprende los objetivos publicitarios y su relación con el embudo digital, la selección y segmentación de públicos, el presupuesto y el plan de pauta, así como la construcción de anuncios mediante diferentes formatos, recursos creativos y <i>copy</i> publicitario. También se consideran la adaptación de las piezas a las características de cada plataforma, los lineamientos de marca, la coherencia gráfica, las buenas prácticas de diseño y la verificación de los anuncios antes de su publicación, con el propósito de desarrollar acciones publicitarias claras, coherentes y orientadas a resultados.
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/intro/img1.png', alt='', style="max-width: 600px;")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
