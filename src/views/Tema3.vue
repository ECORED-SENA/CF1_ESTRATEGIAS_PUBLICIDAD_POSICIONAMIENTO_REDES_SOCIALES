<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Objetivos publicitarios y embudo digital
      p(data-aos="fade-left") Los <b>objetivos publicitarios</b> establecen los resultados que se esperan alcanzar mediante una campaña en redes sociales. Su definición orienta las decisiones relacionadas con el diseño del anuncio, la audiencia, los recursos y los criterios que permitirán analizar los resultados obtenidos.
      .row.justify-content-center.align-items-stretch.mb-3.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 Estos objetivos pueden variar según la respuesta esperada de la audiencia. Algunas campañas buscan generar reconocimiento o interacción; otras pretenden dirigir usuarios hacia un canal digital, captar clientes potenciales o conseguir acciones concretas, como registros o ventas.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t3/img1.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") El <b>embudo digital</b> permite relacionar estos objetivos con el momento en que se encuentra el usuario frente a la marca. Algunas personas apenas tienen un primer contacto con la propuesta, mientras que otras ya manifiestan interés o están preparadas para realizar una acción. Esta relación permite organizar los objetivos dentro de una ruta que comprende las fases de <b>atracción, consideración, conversión y fidelización.</b> A partir de esta relación, es necesario reconocer las características de los diferentes objetivos publicitarios y su correspondencia con cada fase del embudo digital.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Objetivos de reconocimiento, interacción y tráfico
      p(data-aos="fade-left") Los objetivos de <b>reconocimiento, interacción y tráfico</b> permiten generar y fortalecer los primeros acercamientos entre la marca y su audiencia. Aunque responden a finalidades diferentes, pueden articularse progresivamente dentro de una estrategia. Los principales objetivos y sus características se presentan a continuación:
      //- Pestañas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
        TabsC.color-acento-contenido.mt-1
          .py-3.py-md-4(titulo="Reconocimiento")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_1.png')
              .col-md-6
                h4 Reconocimiento
                p Busca que las personas identifiquen una marca, producto, servicio o proyecto. Resulta pertinente cuando se desea llegar a nuevos públicos o fortalecer la recordación mediante contenidos que comuniquen con claridad la identidad y la propuesta de la marca.
          .py-3.py-md-4(titulo="Interacción")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_2.png')
              .col-md-6
                h4 Interacción
                p Promueve la participación mediante reacciones, comentarios, mensajes, respuestas, visitas al perfil, contenidos compartidos o guardados. Para estimular estas acciones, el contenido debe responder a los intereses y necesidades de la audiencia y proporcionar una razón clara para participar.
          .py-3.py-md-4(titulo="Tráfico")
            .row.align-items-center
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta01_3.png')
              .col-md-6
                h4 Tráfico
                p Dirige usuarios hacia un canal digital específico, como una página <i>web</i>, tienda virtual, catálogo, <i>blog</i>, formulario, <i>landing</i> page o perfil comercial. El anuncio debe precisar el beneficio de acceder al destino e incorporar un llamado a la acción coherente con el recorrido propuesto.
      //- Fin Pestañas horizontales
      p(data-aos="fade-left") Estos objetivos pueden desarrollarse de manera articulada: el reconocimiento facilita el primer contacto con la marca, la interacción fortalece la relación con la audiencia y el tráfico conduce a los usuarios hacia espacios donde pueden ampliar información o continuar su recorrido.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Objetivos de clientes potenciales, ventas y conversión
      p(data-aos="fade-left") Los objetivos de <b>clientes potenciales, ventas y conversión</b> se orientan hacia respuestas concretas de usuarios que presentan un mayor nivel de interés en la oferta. Sus diferencias principales se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta02_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Clientes potenciales
                    p.mb-0 Busca establecer contacto con personas interesadas y obtener información que permita continuar la relación comercial. Puede recurrir a formularios, mensajes directos, registros, solicitudes de cotización, reservas, suscripciones u otros mecanismos de contacto.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta02_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Ventas
                    p.mb-0 Se orienta a promover la compra de productos o servicios. La comunicación debe proporcionar información pertinente sobre beneficios, características, diferenciales, precio, disponibilidad o condiciones de compra y mantener coherencia con la experiencia posterior del usuario.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta02_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Conversión
                    p.mb-0 Corresponde al cumplimiento de una acción específica definida previamente para la campaña. Puede consistir en una compra, registro, descarga, solicitud de información, reserva, inscripción, envío de un mensaje o suscripción; por tanto, no necesariamente corresponde a una venta.
            //- Fin Tarjetas
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img2.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 En estos objetivos, el <b>llamado a la acción</b> debe indicar con claridad qué se espera del usuario. Entre las opciones que pueden emplearse se encuentran:
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mt-3
              i.fas.fa-bullhorn.me-3
              span Solicitar información
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Registrarse
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Comprar
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Reservar una cita
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Descargar un recurso
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Enviar un mensaje
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Consultar una oferta
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Completar un formulario
      p.mb-0 La selección del llamado a la acción debe guardar correspondencia con el objetivo establecido. Asimismo, la comunicación debe transmitir claridad y confianza durante todo el recorrido, especialmente cuando se solicitan datos personales o se promueven acciones comerciales.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Relación entre objetivos publicitarios y fases del embudo digital 
      p(data-aos="fade-left") El <b>embudo digital</b> organiza los objetivos publicitarios según el nivel de relación que mantiene el usuario con la marca. Este enfoque reconoce que el recorrido puede comprender diferentes momentos de conocimiento, interés, decisión y continuidad. La relación entre las fases del embudo y los objetivos publicitarios se presenta a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Atracción
                p Corresponde al primer contacto con personas que aún no conocen la propuesta o mantienen poca relación con ella. Se vincula principalmente con objetivos de reconocimiento y posicionamiento inicial, destinados a captar la atención y favorecer la identificación de la marca.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Consideración
                p Se presenta cuando el usuario ya reconoce la marca o manifiesta algún nivel de interés. Se relaciona con objetivos de interacción y tráfico que permiten ampliar información, conocer beneficios, identificar diferenciales y profundizar en la propuesta de valor.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Conversión
                p Busca que el usuario realice una acción concreta, como comprar, registrarse, solicitar información, descargar un recurso, reservar o inscribirse. La comunicación debe facilitar la decisión y reducir las barreras para completar la acción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Fidelización
                p Procura mantener la relación con quienes ya interactuaron, compraron, se registraron o manifestaron interés. Puede orientarse a fortalecer la recordación, estimular nuevas interacciones, promover la recompra, generar recomendaciones o consolidar la comunidad.
      //- Fin Slideshow
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t3/img3.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 Cada fase requiere acciones acordes con el momento del usuario. En la <b>atracción</b>, pueden emplearse contenidos breves destinados a generar reconocimiento; en la <b>consideración</b>, contenidos que amplíen información y conduzcan hacia otros canales; en la <b>conversión</b>, mensajes directos y llamados a la acción específicos; y, en la <b>fidelización</b>, contenidos de valor, novedades o beneficios que contribuyan a mantener el vínculo.
          p De esta manera, los objetivos indican el <b>resultado que se pretende alcanzar</b>, mientras que el embudo permite ubicarlo dentro del proceso de relación entre la marca y la audiencia. Su articulación proporciona una ruta para desarrollar campañas coherentes con los diferentes momentos del recorrido del usuario.



</template>

<script>
export default {
  name: 'Tema3',
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
