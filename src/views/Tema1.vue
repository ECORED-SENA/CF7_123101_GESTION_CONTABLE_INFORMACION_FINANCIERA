<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instrumentos financieros: activos, pasivos e instrumentos de patrimonio
    
    .row.caja-text-img-tema1.align-items-center.m-0(style="background-color: #8454EE")
      .col-xl-auto
        figure(data-aos="fade-up").d-none.d-xl-block
          img(src="@/assets/curso/tema1/img-1.png", alt="" style="max-width: 100px").m-auto
      .col-xl
        p.mb-0.text-white.fw-bold A continuación, se relacionan algunos conceptos que se deben tener en cuenta en el reconocimiento y medición de instrumentos financieros:
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
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
