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
      titulo:
        'Cuestionario sobre planeación y diseño de estrategias publicitarias en redes sociales',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos, principios y procedimientos relacionados con la publicidad digital en redes sociales, las estrategias publicitarias, los objetivos de campaña, la segmentación de audiencias, el presupuesto de pauta, los formatos de anuncios, el copy publicitario y la adaptación de piezas según la plataforma.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza a la publicidad digital en redes sociales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Difunde mensajes y genera respuestas específicas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Se limita a publicaciones orgánicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evita segmentar a la audiencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo busca entretener usuarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica permite dirigir anuncios a grupos definidos de usuarios?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interacción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Segmentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Variedad de formatos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Flexibilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué función cumple la publicidad digital dentro del <i>marketing</i> digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Sustituye toda la estrategia de <i>marketing</i>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Elimina la propuesta de valor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Amplía mensajes y promueve acciones específicas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Define únicamente el diseño gráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué debe definir primero una estrategia publicitaria digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El objetivo de la campaña.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El color del anuncio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nombre del archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de comentarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué objetivo busca que las personas identifiquen una marca o propuesta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tráfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conversión.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reconocimiento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué objetivo dirige usuarios hacia una página web, catálogo o formulario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tráfico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reconocimiento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Fidelización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿En qué fase del embudo se busca una acción concreta del usuario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atracción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Consideración.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conversión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reconocimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué describe mejor al público objetivo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Todos los usuarios de una plataforma.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Personas a quienes se dirige la estrategia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo quienes ya compraron.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usuarios elegidos únicamente por edad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué criterio de segmentación se relaciona con la ubicación del usuario?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Demográfico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Geográfico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Intereses.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comportamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué debe guardar correspondencia con el objetivo de campaña al seleccionar públicos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La segmentación y el mensaje.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo el logotipo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El nombre del archivo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Únicamente la tipografía.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué representa el presupuesto publicitario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La duración total del anuncio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los recursos económicos destinados a difusión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El tamaño de la audiencia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El formato elegido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué caracteriza al presupuesto diario?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se asigna a toda la campaña.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se asigna para cada día.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo aplica a videos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No depende de la duración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Para qué sirve el plan de pauta digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organizar los componentes antes de ejecutar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar el objetivo publicitario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la segmentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir únicamente el presupuesto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué debe comunicar una pieza publicitaria digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una idea clara y un beneficio relevante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La mayor cantidad posible de texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Información sin relación con el público.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo elementos visuales decorativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué formato permite organizar varios beneficios o pasos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Imagen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Carrusel.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Historia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicación promocionada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Qué formato es pertinente para promociones temporales y llamados inmediatos?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Historias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Carrusel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Imagen fija.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Publicación promocionada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué es el copy publicitario?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El presupuesto asignado al anuncio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El componente textual que refuerza la pieza.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La segmentación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La duración de la campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué debe cumplir un llamado a la acción?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ser ambiguo para despertar curiosidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ser claro y corresponder con la experiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Repetir todo el anuncio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usarse únicamente en campañas de ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué implica adaptar un anuncio a diferentes plataformas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cambiar completamente la campaña.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar adecuadamente el mensaje en cada canal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mantener siempre idénticas dimensiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar el llamado a la acción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué debe verificarse antes de publicar una pieza publicitaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Objetivo, público, formato, mensaje y aspectos técnicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Solo la cantidad de texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Únicamente el presupuesto diario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo los colores de la marca.',
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
