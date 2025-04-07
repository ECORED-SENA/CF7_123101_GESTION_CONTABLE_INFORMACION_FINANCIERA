<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Instrumentos de patrimonio
    .d-flex.flex-wrap.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p.mb-4 Un instrumento de patrimonio es un negocio respaldado por un contrato que pone de manifiesto una participación residual en los activos de una entidad después de deducir todos los pasivos.
        .row.align-items-center.py-2.mx-0.mb-4(style="background-color: #FEEAD4")
          .col-auto
            figure(data-aos="fade-up")
              img.mb-4.mb-lg-0(src="@/assets/curso/tema2/img-2.svg", alt="" style="max-width: 81px").m-auto
          .col-xl
            p.mb-0 Algunos ejemplos de instrumentos de patrimonio, son las acciones ordinarias, ciertos tipos de acciones preferentes, así como, las opciones u otro tipo de derechos o bonos para la suscripción o compra de acciones ordinarias de la empresa.
        p.mb-4 A continuación, se relaciona un ejemplo específico de ello :
          br
          br
          |Una obligación (contrato) que será cancelado por la entidad entregando o recibiendo una cantidad acordada de sus instrumentos de patrimonio propio a cambio de un importe fijo en efectivo o cualquier otro activo financiero será un instrumento de patrimonio.
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema2/img-1.svg", alt="", style="max-width: 505px").mx-auto.mb-4.ps-lg-4  
    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Reconocimiento, medición, presentación, Revelación:
    
    .bg-gradient-2
      .row.caja-text-img-tema1.align-items-center.mx-0.mb-0(style="background-color: #8454EE")
        .col-xl-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img-1.png", alt="" style="max-width: 100px").m-auto
        .col-xl
          p.mb-0.text-white.fw-bold En el presente ítem se aborda conceptos que determinan el reconocimiento de los instrumentos de patrimonio, a su vez presenta ejemplos que acompañan el proceso de aplicabilidad.
        
      .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
        .col
          h3 Reconocimiento:
      
      p.mb-5 Una entidad reconocerá la emisión de acciones o de otros instrumentos de patrimonio cuando emita esos instrumentos y otra parte esté obligada a proporcionar efectivo u otros recursos a la entidad a cambio de éstos. (Pasivos y patrimonio 2009, s.f).

        .row.mb-5.m-0.ajuste-espacios-movil
          .col-lg-4.espacio__cajas_movil
            .ajuste-caja-text-bloque4.h-100(data-aos="flip-left" style="background-color: #E2DACC")
              .col
                figure.mb-3
                  img(src='@/assets/curso/tema2/img-3.svg', alt='' style="max-width: 105px").m-auto
                p.text-center.fw-bold 01
                p.text-center Si los instrumentos de patrimonio se emiten antes de que la entidad reciba el efectivo u otros recursos, la entidad presentará el importe por cobrar como una compensación al patrimonio en su estado de situación financiera, no como un activo.
          .col-lg-4.espacio__cajas_movil
            .ajuste-caja-text-bloque4.h-100(data-aos="flip-left" style="background-color: #E2DACC")
              .col
                figure.mb-3
                  img(src='@/assets/curso/tema2/img-3.svg', alt='' style="max-width: 105px").m-auto
                p.text-center.fw-bold 02
                p.text-center Si la entidad recibe el efectivo u otros recursos antes de que se emitan los instrumentos de patrimonio, y no se puede requerir a la entidad el reembolso del efectivo o de los otros recursos recibidos, la entidad reconocerá el correspondiente incremento en el patrimonio en la medida de la contraprestación recibida.
          .col-lg-4.espacio__cajas_movil
            .ajuste-caja-text-bloque4.h-100(data-aos="flip-left" style="background-color: #E2DACC")
              .col
                figure.mb-3
                  img(src='@/assets/curso/tema2/img-3.svg', alt='' style="max-width: 105px").m-auto
                p.text-center.fw-bold 03
                p.text-center En la medida en que los instrumentos de patrimonio hayan sido suscritos, pero no emitidos y la entidad no haya todavía recibido el efectivo o los otros recursos, la entidad no reconocerá un incremento en el patrimonio.


      .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
        .col
          h3 Medición:

    p.mb-5 Con los nuevos marcos normativos es improbable que el patrimonio contable multiplicado por el porcentaje de participación represente una estimación fiable del valor razonable de una inversión en instrumento de patrimonio sin cotización pública.

    



</template>

<script>
export default {
  name: 'Tema2',
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
