<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Presupuesto y plan de pauta digital
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0.order-1.order-lg-1(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img1.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-7.order-2.order-lg-2(data-aos="fade-left")
          p.mb-3.bg-color-5.p-3 El <b>presupuesto</b> y el <b>plan de pauta digital</b> permiten organizar los recursos económicos y las decisiones necesarias para desarrollar una campaña publicitaria en redes sociales. El presupuesto establece la inversión disponible, mientras que el plan de pauta determina cómo se distribuirá de acuerdo con el objetivo de la campaña.
          p La inversión debe guardar correspondencia con factores como el público seleccionado, la duración, el formato y el resultado esperado. Por esta razón, disponer de un presupuesto mayor no garantiza mejores resultados si los demás componentes de la estrategia no se encuentran adecuadamente definidos. El plan de pauta, por su parte, integra estos elementos antes de iniciar la campaña y permite establecer criterios para su ejecución y seguimiento. A partir de esta relación, es necesario comprender cómo se define el presupuesto, cuáles son sus modalidades de asignación y qué componentes conforman un plan de pauta digital.
      Separador
      //- Inicio Tema5.1
      .row
        #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.1 Concepto de presupuesto publicitario
      p(data-aos="fade-left") El <b>presupuesto publicitario</b> es la cantidad de recursos económicos destinada a la difusión de una campaña, anuncio o contenido promocional en medios digitales. Su definición debe responder al propósito de la campaña y a las condiciones establecidas para su ejecución.
      .row.justify-content-center.align-items-stretch.mb-3.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-3.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3 El presupuesto puede utilizarse para apoyar diferentes objetivos publicitarios, como reconocimiento, interacción, tráfico, captación de clientes potenciales o conversión. La inversión requerida puede variar de acuerdo con el alcance esperado, las características de la audiencia y el periodo durante el cual permanecerá activa la campaña. Antes de establecer el presupuesto, es necesario considerar los siguientes aspectos:
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mt-3
              i.fas.fa-bullhorn.me-3
              span Objetivo publicitario
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Público objetivo
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Plataforma seleccionada
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Formato publicitario
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Duración de la campaña
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Alcance esperado
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Acción esperada del usuario
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Posibilidad de realizar seguimiento y ajustes
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t5/img2.png', alt='', style="object-fit: cover;")
      .row.mb-5.justify-content-center.align-items-start        
        .col-12.col-sm-9.col-lg-4.mb-4.mb-lg-0.order-1.order-lg-2(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto.img-fluid(src='@/assets/curso/temas/t5/img3.png', alt='', style="max-width: 600px;")
        .col-12.col-lg-8.order-2.order-lg-1(data-aos="fade-left")
          p.mb-3.bg-color-2.p-3 Estos criterios permiten relacionar la inversión con las necesidades reales de la campaña. Un presupuesto limitado puede emplearse para probar mensajes, formatos o audiencias, mientras que una inversión mayor puede ampliar las posibilidades de difusión. Sin embargo, el desempeño también depende de la pertinencia del contenido, la segmentación y la coherencia de la estrategia.
          p Cuando una campaña contempla diferentes objetivos, el presupuesto puede distribuirse según las prioridades establecidas. De esta manera, la inversión se convierte en un <b>recurso estratégico</b> cuya importancia depende tanto de la cantidad disponible como de la forma en que se asigna.
      Separador
      //- Inicio Tema5.2
      .row
        #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.2 Presupuesto diario, presupuesto total y duración de campaña
      p(data-aos="fade-left") La pauta digital puede organizar la inversión mediante un <b>presupuesto diario</b> o un <b>presupuesto total</b>. La selección depende de la duración de la campaña y de la manera en que se pretende administrar el recurso.
      p(data-aos="fade-left") Las características de estas modalidades se presentan a continuación:
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t5/tarjeta01_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Presupuesto diario
                    p.mb-0 Corresponde a la cantidad de dinero asignada para cada día durante el periodo de la campaña. Permite controlar la inversión diaria y mantener una distribución progresiva cuando el anuncio debe permanecer activo durante varios días.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t5/tarjeta01_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Presupuesto total
                    p.mb-0 Corresponde a la cantidad completa destinada a toda la campaña. Puede utilizarse cuando existe un periodo definido de inicio y finalización, como en promociones, lanzamientos, eventos, convocatorias o temporadas comerciales.
              .col-sm-12.col-md-6.col-lg-4.mb-4.d-flex.flex-column
                .tarjeta.p-0.rounded-4.h-100.overflow-hidden.border.shadow.bg-color-6
                  figure.mb-0
                    img(src='@/assets/curso/temas/t5/tarjeta01_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Duración de campaña
                    p.mb-0 Establece el periodo durante el cual permanecerá activa la pauta. Debe guardar correspondencia con el objetivo, el presupuesto disponible, el tamaño de la audiencia y el tiempo necesario para generar la respuesta esperada.
            //- Fin Tarjetas
      p(data-aos="fade-left") La duración influye directamente en la distribución de los recursos. Una campaña breve puede concentrar la inversión en pocos días, mientras que una de mayor duración permite distribuirla progresivamente y realizar seguimiento durante un periodo más amplio.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img4.png')})` }"
        )
        .bloque-texto-g__texto.p-4
          p.mb-3 Para establecer la duración, es pertinente considerar:         
          ul.lista-ul.color-vinotinto-custom.mb-3
            li.d-flex.mt-3
              i.fas.fa-bullhorn.me-3
              span Fecha de inicio y cierre de la campaña. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Tiempo necesario para comunicar el mensaje. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Presupuesto disponible. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Objetivo publicitario. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Tamaño de la audiencia. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Tipo de producto, servicio o propuesta. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Periodo de decisión del usuario. 
            li.d-flex
              i.fas.fa-bullhorn.me-3
              span Necesidad de realizar seguimiento y ajustes.
      p(data-aos="fade-left") El <b>presupuesto, la duración y el tamaño de la audiencia</b> deben definirse de manera articulada. Una inversión reducida frente a una audiencia demasiado amplia puede limitar la difusión, mientras que una audiencia excesivamente pequeña puede ocasionar una circulación reiterada del anuncio entre las mismas personas.
      Separador
      //- Inicio Tema5.3
      .row
        #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.3 Estructura básica del plan de pauta digital
      p(data-aos="fade-left") El <b>plan de pauta digital</b> es un documento o esquema que organiza los principales componentes de una campaña publicitaria antes de su ejecución. Su propósito es establecer qué se promocionará, a quién se dirigirá la campaña, qué recursos se utilizarán, durante cuánto tiempo estará activa y qué resultado se espera alcanzar.
      p(data-aos="fade-left") Para cumplir esta función, el plan debe contener información suficiente para orientar la ejecución y facilitar posteriormente el seguimiento de la campaña. Los componentes básicos del plan de pauta se presentan a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Objetivo publicitario
                p Define el resultado que se espera alcanzar y orienta las demás decisiones del plan. Puede relacionarse con reconocimiento, interacción, tráfico, clientes potenciales, conversión o posicionamiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Público objetivo y segmentación
                p Precisa a quién se dirigirá la campaña y establece los criterios pertinentes para delimitar la audiencia, como ubicación, edad, intereses, comportamientos o relación previa con la marca.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Plataforma
                p Determina la red social seleccionada para desarrollar la pauta de acuerdo con las características de la audiencia y las condiciones de la campaña.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Formato publicitario
                p Establece el tipo de contenido que se empleará, como imagen, video, carrusel, historia o <i>reel</i>, en correspondencia con el objetivo y las características del público.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Mensaje principal
                p Define la idea central que se comunicará y debe mantener coherencia con la propuesta de valor, el objetivo y la identidad de la marca.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Llamado a la acción
                p Indica la respuesta que se espera del usuario, como registrarse, comprar, enviar un mensaje, visitar un canal digital o solicitar información.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_7.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Presupuesto
                p Establece la cantidad de recursos económicos destinados a la campaña y la modalidad mediante la cual se administrará la inversión.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_8.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Duración
                p Determina el periodo durante el cual permanecerá activa la campaña y debe relacionarse con el presupuesto, la audiencia y el propósito establecido.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_9.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pieza publicitaria
                p Corresponde al contenido que será promocionado y debe integrar el mensaje, el formato y los recursos necesarios para comunicar la propuesta.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_10.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Resultado esperado
                p Precisa el logro que se espera obtener mediante la campaña y permite establecer una referencia para analizar posteriormente su desempeño.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t5/tarjeta02_11.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Indicadores de seguimiento
                p Permiten realizar seguimiento a los resultados asociados con el objetivo, mediante datos relacionados con alcance, clics, interacciones, mensajes, registros, visitas o ventas, según corresponda.
      //- Fin Slideshow
      .row.align-items-center.mb-3(data-aos="fade-right")
        .col-lg-4.mb-4.mb-lg-0
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t5/img5.png", data-aos="zoom-in", style="width: 100%; height: 100%; object-fit: cover;")
        .col-lg-6.mb-4.mb-lg-0.d-flex.flex-column.justify-content-center
          p.mb-4.bg-color-4.p-2 La estructura del plan permite comprobar la <b>coherencia entre sus componentes</b> antes de destinar recursos a la campaña. Por ejemplo, si el propósito es captar clientes potenciales, el llamado a la acción debe conducir hacia un mecanismo que permita establecer contacto o recopilar información. Asimismo, el formato y el mensaje deben responder a las características de la audiencia seleccionada.
          p.mb-0 En consecuencia, el presupuesto determina los recursos económicos disponibles y el plan de pauta establece la manera en que estos se articulan con los demás componentes de la campaña. Esta planeación proporciona una base organizada para la ejecución y el seguimiento de la pauta publicitaria en redes sociales.
        .col-lg-2
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t5/img6.png", data-aos="zoom-in", style="width: 270px;")


</template>

<script>
export default {
  name: 'Tema5',
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
