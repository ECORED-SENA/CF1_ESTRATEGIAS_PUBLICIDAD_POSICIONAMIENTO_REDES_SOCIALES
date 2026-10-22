<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad             
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planeación y diseño publicitario en redes sociales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos, principios y procedimientos relacionados con la publicidad digital en redes sociales, las estrategias publicitarias, los objetivos de campaña, la segmentación de audiencias, el presupuesto de pauta, los formatos de anuncios, el <i>copy</i> publicitario y la adaptación de piezas según la plataforma.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué define el objetivo publicitario dentro de una campaña en redes sociales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El resultado que se espera alcanzar y la orientación de las decisiones de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Exclusivamente la cantidad de dinero que se va a gastar por día.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La red social específica donde obligatoriamente se debe publicar el anuncio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El diseño gráfico de la plantilla sin importar el mensaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es la principal característica de la segmentación geográfica?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Agrupar a las personas según su edad, género y nivel educativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Delimitar la audiencia según país, región, ciudad, municipio o radio de cobertura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Considerar únicamente los gustos y preferencias de navegación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Analizar las compras anteriores realizadas en la tienda virtual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué busca principalmente un objetivo de reconocimiento en una estrategia publicitaria?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cerrar ventas de forma inmediata mediante un formulario de pago.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Lograr que las personas identifiquen una marca, producto, servicio o proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Únicamente obtener datos de contacto de clientes potenciales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Monitorear el tráfico web de la competencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué describe el presupuesto diario en la pauta digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad total destinada a toda la campaña sin importar los días.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La cantidad de dinero asignada para cada día durante el periodo de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El valor de comisión que cobra la plataforma por cada clic.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El costo estimado de producción gráfica del anuncio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿A qué hace referencia el formato de carrusel en la publicidad digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'A una pieza gráfica fija con una sola imagen estática.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'A un video vertical exclusivo para historias de corta duración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'A la integración de varias imágenes o videos dentro de una misma publicación o anuncio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'A una encuesta interactiva dentro de la plataforma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es la función principal del <i>copy</i> publicitario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Desarrollar el componente textual que acompaña, explica o refuerza la pieza publicitaria.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Definir la inversión económica y el método de pago del anuncio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Configurar los parámetros técnicos de la red social.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Sustituir por completo cualquier recurso audiovisual en la pauta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué define la fase de consideración en el embudo digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El primer contacto con personas que jamás han oído hablar de la marca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El momento en que el usuario ya reconoce la marca o manifiesta algún nivel de interés para ampliar información.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El proceso exclusivo de facturación y entrega del producto físico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cancelación definitiva de la suscripción del cliente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué comprende la segmentación por comportamiento?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Acciones realizadas en entornos digitales como interacciones, clics, visitas, reproducciones o compras anteriores.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La ubicación exacta por coordenadas GPS de la oficina principal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La edad y el nivel socioeconómico del núcleo familiar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los colores corporativos elegidos para el manual de marca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué función cumple el llamado a la acción (CTA) en un anuncio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Indicar con claridad la respuesta que se espera del usuario tras recibir el anuncio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Medir el ancho de banda del servidor web de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ocultar la información de contacto para generar misterio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Modificar de forma automática el presupuesto total de la pauta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué caracteriza a una audiencia similar en la segmentación publicitaria?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se orienta hacia nuevos usuarios que comparten características con una audiencia existente que ya tiene vínculo con la marca.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Son perfiles falsos creados para simular interacciones masivas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Corresponde estrictamente a los empleados directos de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agrupa a competidores directos en el mercado digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Cuál es el propósito del plan de pauta digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar los componentes principales de una campaña (objetivo, público, formato, presupuesto, duración) antes de su ejecución.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diseñar el logotipo oficial de la empresa en vectores.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Redactar los contratos laborales del equipo de marketing.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Establecer los impuestos anuales de la entidad comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué define el enfoque de "Urgencia" en el <i>copy</i> publicitario?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Orientar hacia una acción dentro de un periodo determinado, aplicándose cuando la condición temporal corresponde con la oferta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Reportar fallas técnicas de la red social de manera inmediata.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Exigir al usuario que compre sin importar si necesita el producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Describir la historia antigua de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué rol cumple el posicionamiento digital en relación con la marca?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la percepción, la recordación y la presencia mediante una comunicación coherente con los atributos y la propuesta de valor.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Definir el valor monetario exacto del inventario físico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Comprar espacios publicitarios en medios impresos tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Eliminar por completo la necesidad de interactuar con clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué diferencia principal existe entre ventas y conversión?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La venta se orienta a promover la compra, mientras que la conversión es el cumplimiento de cualquier acción específica definida (registro, descarga, etc.), no necesariamente una venta.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La conversión solo aplica para transacciones en efectivo y la venta para tarjetas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'No existe ninguna diferencia conceptual en el <i>marketing</i> digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La venta es gratuita y la conversión requiere inversión obligatoria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué busca el objetivo de clientes potenciales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Establecer contacto con personas interesadas y obtener información mediante formularios o mensajes para continuar la relación comercial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Generar impresiones masivas sin importar si hay interacción humana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Vender productos de manera anónima y sin registros previos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bloquear a usuarios que visiten la tienda virtual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué se debe verificar antes de publicar una pieza publicitaria digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que el anuncio responda al objetivo, el mensaje sea comprensible, el formato corresponda con la plataforma y el CTA sea claro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Únicamente que el archivo de imagen tenga un peso menor a un megabyte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que la publicación se comparta de forma automática en todas las redes personales del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que no se utilicen colores institucionales en el diseño.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es la utilidad de las publicaciones promocionadas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ampliar el alcance de contenidos publicados inicialmente de manera orgánica asignándoles inversión hacia una audiencia determinada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Programar publicaciones automáticas para fines de semana.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Crear sitios web externos fuera de las redes sociales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Diseñar logotipos en formato 3D.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué caracteriza al formato de <i>Reels</i> en redes sociales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Contenidos audiovisuales breves y dinámicos que requieren claridad en el mensaje y un ritmo acorde con el consumo rápido.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Textos largos estáticos publicados en blogs institucionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Fotografías impresas en alta resolución para catálogos físicos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transmisiones en vivo de más de cinco horas continuas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué aborda el enfoque de "Confianza" en el <i>copy</i> publicitario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elementos relacionados con respaldo, experiencia o seguridad para fortalecer la credibilidad del mensaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Promociones falsas para capturar clientes desprevenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Descuentos exagerados sin stock disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Información confidencial de la tarjeta de crédito del comprador.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué función cumple el presupuesto total dentro de una campaña?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Destinar la cantidad completa de recursos económicos para una campaña con un periodo definido de inicio y finalización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cobrar una tarifa fija mensual a los empleados de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular los gastos de servicios públicos de la oficina.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Pagar comisiones bancarias internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
