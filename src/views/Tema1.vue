<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Instrumentos financieros: activos, pasivos e instrumentos de patrimonio
    .bg-gradient-1.mb-5
      .row.caja-text-img-tema1.align-items-center.mx-0.mb-0(style="background-color: #8454EE")
        .col-xl-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img-1.png", alt="" style="max-width: 100px").m-auto
        .col-xl
          p.mb-0.text-white.fw-bold A continuación, se relacionan algunos conceptos que se deben tener en cuenta en el reconocimiento y medición de instrumentos financieros:

      .row.mb-5.ajuste-espacios-movil.pt-5
        .col-xl
          TabsA.color-acento-botones.mb-4
            .tarjeta.color-acento-botones--borde.p-4(titulo="Activo financiero")
              h4 Activo financiero
              .d-flex.flex-wrap.align-items-center.gap-3
                p.order-2.order-md-1.col-12.col-md Los activos financieros se clasifican de acuerdo al modelo de negocio del suscriptor en tres categorías: a su costo amortizado, a valor razonable con cambios en el patrimonio otro (resultado integral) o a valor razonable con cambios en pérdidas y ganancias dependiendo de las características de los flujos de efectivo descritos en el documento que protocoliza el instrumento financiero por ejemplo el cobro de los rendimientos generados por el activo o tener la intención de vender el activo. (Norma internacional de información financiera, 2016, p.9)
                img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-2.svg", alt="", style="max-width: 155px").m-auto
            .tarjeta.color-acento-botones--borde.p-4(titulo="Pasivo Financiero")
              h4 Pasivo Financiero
              .d-flex.flex-wrap.align-items-center.gap-3
                p.order-2.order-md-1.col-12.col-md Generalmente los pasivos financieros se miden a costo amortizado, excepto aquellos pasivos financieros que se mantienen para negociar, como por ejemplo los derivados, que se valoran a valor razonable con cambios en resultados.
                img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-3.svg", alt="", style="max-width: 155px").m-auto
            .tarjeta.color-acento-botones--borde.p-4(titulo="Patrimonio")
              h4 Patrimonio
              .d-flex.flex-wrap.align-items-center.gap-3
                p.order-2.order-md-1.col-12.col-md Un instrumento de patrimonio es cualquier contrato que ponga de manifiesto una participación residual en los activos de una entidad, después de deducir todos sus pasivos. (Norma Internacional de Contabilidad, s.f. p.2).
                img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-4.svg", alt="", style="max-width: 155px").m-auto
      p.mb-5 Para ampliar la información pertinente a los instrumentos financieros (activos, pasivos e instrumentos de patrimonio), haga clic en el siguiente enlace:

      .col-auto.d-flex.col-12.col-md-8.col-lg-5
        a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank" style="width: 100% !important; margin-bottom: -2rem")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p #[b Anexo]. Instrumentos financieros: activos, pasivos e instrumentos de patrimonio
    separador


    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Obligaciones con terceros
    
    p Son los principios, bases, acuerdos, reglas y procedimientos específicos adoptados por la entidad en la elaboración y presentación de los estados financieros.

    p.mb-5 #[b Una política contable debe contener:]

    .d-flex.flex-wrap.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        ul.lista-ul.mb-4
          li
            i.fas.fa-angle-right.txt--purple
            | Nombre de la política contable.
          li
            i.fas.fa-angle-right.txt--purple
            | Debe establecer los criterios de reconocimiento del hecho económico, medición inicial, medición posterior y las revelaciones requeridas.
          li
            i.fas.fa-angle-right.txt--purple
            | Objetivo de la política contable.
        .row.align-items-center.py-2.mx-0.mb-4(style="background-color: #FEEAD4")
          .col-auto
            figure(data-aos="fade-up")
              img.mb-4.mb-lg-0(src="@/assets/curso/tema1/img-6.svg", alt="" style="max-width: 81px").m-auto
          .col-xl
            p.mb-0 Norma Internacional de Información financiera NIIF 9 define cómo se deben reconocer y medir los instrumentos financieros.
        
        p.mb-0 La normativa que se debe tener en cuenta para la aplicación de Instrumentos Financieros es la siguiente:
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema1/img-5.svg", alt="", style="max-width: 505px").mx-auto.mb-4.ps-lg-4

    .titulo-sexto.color-acento-contenido.mb-2
      h5 Figura 1.
      span Normativa para la aplicación de instrumentos financieros
    .px-4.py-5.mb-5(style="background-color: #F3F0EA")
      figure
        img(src="@/assets/curso/tema1/img-7.svg" style="max-width: 540px").m-auto

    .d-flex.flex-wrap
      .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img-8.png" style="max-width: 502px").mx-auto
      .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
        p.mb-4 Una entidad optará entre aplicar dependiendo del grupo al que pertenece:
        ol.lista-ol
          li 
            .lista-ol--cuadro__vineta.v--green
              span a
            | Lo previsto en la Sección 11 y Sección 12 si pertenece al grupo número dos Pymes.
          li 
            .lista-ol--cuadro__vineta.v--green
              span b
            | Las disposiciones sobre reconocimiento y medición de la NIIF 9 Instrumentos financieros si pertenece al grupo número uno.
        p.mb-0.p-4.px-lg-5(style="background-color: #DDEFFD") Cuando se aplique un cambio de una política contable se hará de forma retroactiva, como si la nueva política contable se hubiese aplicado siempre. Cuando sea impracticable determinar los efectos en cada periodo específico de un cambio en una política contable sobre la información comparativa para uno o más periodos anteriores para los que se presente información, la entidad aplicará la nueva política contable a los importes en libros de los activos y pasivos al principio del primer periodo para el que sea practicable la aplicación retroactiva, el cual podría ser el periodo actual.

    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Instrumentos financieros
    p.mb-5 Para la ejecución de los instrumentos financieros es necesario conocer algunos elementos que son esenciales para el desarrollo e implementación de los mismos, estos elementos serán abordados a continuación.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
      .col
        h3 Activo financiero
    
    p.mb-5 Un activo financiero es cualquier activo que posea la forma de efectivo, instrumento de patrimonio neto de otra entidad o que represente un derecho contractual o un contrato que pueda ser liquidado utilizando instrumentos de patrimonio propio de la entidad, los activos financieros deben ser medidos al costo amortizado, pero si son mantenidos para negociar se miden a valor razonable con cambios en el resultado del ejercicio.

    .col-12.col-lg-10.col-xl-8.mx-auto.mb-5(data-aos="fade-right")
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 1. 
        span Factura
      .tabla-a.mb-4(data-aos="fade-up")
        table.table-type-1
          thead
            tr
              th Concepto
              th Valor
          tbody
            tr
              td.fw-bold Precio factura
              td.texto-right $ 502.500
            tr
              td.fw-bold Descuento
              td.texto-right $ 11.400
            tr
              td.fw-bold Base gravable
              td.texto-right $ 491.100
            tr
              td.fw-bold IVA 19 %
              td.texto-right $ 95.475
            tr
              td.fw-bold Total, facturado
              td.texto-right $ 586.575

    .d-flex.flex-wrap.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p.p-4.px-lg-5.mb-4(style="background-color: #DDEFFD")
          | #[b Ejemplo]
          br
          br
          | El 17/11/año 1 la sociedad Contable SAS vendió a crédito 5.000 unidades del producto ZV a $ 100,50 por unidad, se ha concedido sobre la factura un descuento de $ 11.400, El pago se realizará dentro de 2 años y el descuento es del 5 %.
        p El crédito constituye para el vendedor un activo financiero, pues es un derecho contractual.
        p Como es una transacción a largo plazo año, se debe reconocer el valor del dinero en el tiempo a la tasa del 5 % efectiva anual, lo que implica el cálculo del valor presente del valor de la venta neta (491.100) para reconocer al final del año 1 y 2 el ajuste por concepto de los gastos financieros así:  
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema1/img-9.png", alt="", style="max-width: 472px").mx-auto.mb-4.ps-lg-4

    .row.fondo-slider.mb-5.ajuste-espacios-movil(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-bg-table.jpg')})`}")
      .ajuste-slider
        SlyderA(tipo="b")
          .col-lg-8.mb-4.col-xs-12.mx-auto
            p.mb-4.fw-bold Al fin del año 1 reconocimiento posterior del componente financiero
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 2. 
              span Cálculo del valor facturado con descuento e IVA
            .tabla-a.mb-4(data-aos="fade-up")
              table.table-type-1
                thead
                  tr
                    th Clasificación
                    th Cuentas
                    th Debe
                    th Haber
                tbody
                  tr
                    td.fw-bold Activo largo plazo
                    td Clientes a largo plazo
                    td $ 22.272,11
                    td -
                  tr
                    td.fw-bold Ingreso
                    td Ingreso financiero
                    td -
                    td $ 22.272,11
          .col-lg-8.mb-4.col-xs-12.mx-auto
            p.mb-4.fw-bold Al final del año 2 reconocimiento posterior del componente financiero
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 3. 
              span Reconocimiento de ingreso financiero por cuentas a largo plazo
            .tabla-a.mb-4(data-aos="fade-up")
              table.table-type-1
                thead
                  tr
                    th Clasificación
                    th Cuentas
                    th Debe
                    th Haber
                tbody
                  tr
                    td.fw-bold Activo largo plazo
                    td Clientes a largo plazo
                    td $ 23.385,71
                    td -
                  tr
                    td.fw-bold Ingreso
                    td Ingreso financiero
                    td -
                    td $ 23.385,71
          .col-lg-8.mb-4.col-xs-12.mx-auto
            p.mb-4.fw-bold Por reclasificar el crédito del largo al corto plazo
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 4. 
              span Reclasificación de cuentas por cobrar de largo a corto plazo
            .tabla-a.mb-4(data-aos="fade-up")
              table.table-type-1
                thead
                  tr
                    th Clasificación
                    th Cuentas
                    th Debe
                    th Haber
                tbody
                  tr
                    td.fw-bold Activo corto plazo
                    td Clientes
                    td $ 563.189,29
                    td -
                  tr
                    td.fw-bold Activo largo plazo
                    td Clientes a largo plazo
                    td -
                    td $ 563.189,29
          .col-lg-8.mb-4.col-xs-12.mx-auto
            p.mb-4.fw-bold Reconocimiento por cobro de crédito
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Tabla 5. 
              span Registro del recaudo de cartera por venta a crédito
            .tabla-a.mb-4(data-aos="fade-up")
              table.table-type-1
                thead
                  tr
                    th Clasificación
                    th Cuentas
                    th Debe
                    th Haber
                tbody
                  tr
                    td.fw-bold Activo corto plazo
                    td Bancos
                    td $ 586.575
                    td -
                  tr
                    td.fw-bold Activo corto plazo
                    td Clientes
                    td -
                    td $ 586.575
    .row.mb-4.ajuste-espacios-movil.mb-5
      .col.ajuste-h4
        h4 Conceptos
    
    .row.mb-5.m-0.ajuste-espacios-movil
      .col-lg-6.espacio__cajas_movil
        .ajuste-caja-text-bloque4.h-100(data-aos="flip-left" style="background-color: #BCE0FC")
          .col
            figure.mb-3
              img(src='@/assets/curso/tema1/img-10.svg', alt='T' style="max-width: 95px").m-auto
            .row.mb-4.ajuste-espacios-movil.text-center
              .col.ajuste-h4
                h4.mb-0(style="background-color: #EDF7FE")  Costo amortizado
            p.mb-0 Es el #[b importe al que inicialmente fue valorado un pasivo financiero], menos los pagos de principal que se hubieran producido, #[b menos los intereses] correspondientes al período calculados] con la técnica del tipo de interés efectivo. (Super contable Sage, s.f p.9)
      .col-lg-6.espacio__cajas_movil
        .ajuste-caja-text-bloque4.h-100(data-aos="flip-left" style="background-color: #BCE0FC")
          .col
            figure.mb-3
              img(src='@/assets/curso/tema1/img-11.svg', alt='' style="max-width: 95px").m-auto
            .row.mb-4.ajuste-espacios-movil.text-center
              .col.ajuste-h4
                h4.mb-0(style="background-color: #EDF7FE") Método de la tasa de Interés Efectiva
            p.mb-0 Es un método para calcular el costo amortizado de un pasivo, calculando la tasa de descuento para igualar los flujos de efectivo, en el periodo cero o periodo de medición, es decir es la tasa que se le aplicará al instrumento financiero para calcular los intereses. Tomado de: Actualícese (2017, 17 de mayo).

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
      .col
        h3 Pasivos Financiero
    
    .d-flex.flex-wrap.mb-5
      .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img-12.png" style="max-width: 502px").mx-auto
      .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
        p.mb-4.p-4(style="background-color: #E6DCFB") Es cualquier pasivo que represente una obligación contractual de entregar dinero u otro activo financiero a otra entidad o de intercambiar activos financieros o pasivos financieros con otra entidad o un contrato que sea liquidado utilizando los instrumentos de patrimonio propio de la entidad, debe ser medido al costo amortizado utilizando la técnica del interés efectivo sin embargo si es para negociar incluidos los instrumentos derivados se mide a valor razonable con cambios en el estado de resultados. (Instrumentos financieros NIC 32 s.f p.9)
        p #[b Valor Razonable:] es la intermediación efectiva que se hace a través de la oferta y demanda de forma libre, dicho de otra forma, es la interacción de un comprador y un vendedor, que se obligan y comprometen a transar una cantidad de bien determinando un precio y unas condiciones específicas en un mercado libre.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
      .col
        h3 Reconocimiento y Medición

    .d-flex.flex-wrap.mb-5.fondo-slider(style="background: rgb(0,0,0); background: linear-gradient(0deg, transparent 0%, rgba(243,240,234,1) 25%, rgba(243,240,234,1) 75%, transparent 100%);")
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p.mb-4 #[b Medición Inicial:] Se genera en el momento en que se realiza el hecho económico incluidos los costos indirectos de constitución del título.
        p.mb-4 #[b Medición Posterior:] Se genera en los momentos futuros al reconocimiento inicial y comprende los ajustes propios del instrumento, dependiendo del modelo de negocio que implicó su reconocimiento como para negociar o para la venta, por ejemplo, de tal manera que cuando se presente la información financiera los instrumentos estén valorados correctamente.
        p.mb-4  Según la normatividad los instrumentos financieros que se pueden medir a costo amortizado son todos aquellos en los que se desea mantener el activo para cobrar sus flujos de efectivo contractuales como, por ejemplo:
        ul.lista-ul.mb-4
          li
            i.fas.fa-angle-right.txt--purple
            | TES
          li
            i.fas.fa-angle-right.txt--purple
            | Bonos
          li
            i.fas.fa-angle-right.txt--purple
            | Valor razonable todos aquellos que se adquieren con la intención de ser negociados.
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema1/img-13.svg", alt="", style="max-width: 505px").mx-auto.mb-4.ps-lg-4   


    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
      .col
        h3 Revelación

    .mb-5
      .row.caja-text-img-tema1.align-items-center.mx-0.mb-0(style="background-color: #8454EE")
        .col-xl-auto
          figure(data-aos="fade-up").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img-1.png", alt="" style="max-width: 100px").m-auto
        .col-xl
          p.mb-0.text-white.fw-bold Se debe revelar en las notas a estados financieros la naturaleza de los pasivos financieros, garantías, vencimientos, saldos pendientes de pago y cambios significativos. (NIIF 7)

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Obligaciones con terceros
    
    p.mb-5 Todos los desembolsos requeridos para obtener un crédito con una entidad financiera como: estudios de créditos, seguros, entre otros, se deben reconocer en el préstamo. A continuación, encuentra ejemplos que permiten acercarse a un ejercicio real y cotidiano.

    .d-flex.flex-wrap.align-items-center.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p.p-4.px-lg-5.mb-4.mb-lg-0(style="background-color: #FEEAD4")
          | #[b Ejemplo]
          br
          br
          | La empresa Contable SAS, adquiere un préstamo para desarrollar un proyecto de expansión, por $200.000.000 con una tasa de interés sobre el préstamo pactado en un 2,5%El interés pactado, 2,5% es el costo financiero que debe asumir por el préstamo recibido.
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema1/img-14.svg", alt="", style="max-width: 505px").mx-auto.mb-4.mb-lg-0.ps-lg-4 
    p.p-4.px-lg-5.mb-4(style="background-color: #DDEFFD")
      | #[b Ejemplo]
      br
      br
      | Una empresa, pacta con una entidad financiera una obligación de $120.000, se pacta que, al finalizar 6 años, la empresa entrega a la entidad financiera $138.000 al finalizar los seis años.

    p.mb-5 Determinó el interés efectivo incluida en la negociación utilizando la TIR.

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 6.
      span Flujo de caja y tasa de retorno

    .col-12.col-lg-10.col-xl-8.mx-auto
      .tabla-a.mb-4(data-aos="fade-up")
        table.table-type-1
          thead
            tr
              th PERIODO
              th MONTOS
          tbody
            tr
              td.fw-bold 0
              td.texto-right $ - 120.000.00
            tr
              td.fw-bold 1
              td.texto-right -
            tr
              td.fw-bold 2
              td.texto-right -
            tr
              td.fw-bold 3
              td.texto-right -
            tr
              td.fw-bold 4
              td.texto-right -
            tr
              td.fw-bold 5
              td.texto-right $ 138.000.00
            tr
              td.fw-bold 6
              td.texto-right 2,4 %

    p.mb-5 Tabla de amortización: para determinar los costos financieros a ajustar en cada periodo

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 7.
      span Tabla de amortización

    .tabla-a.mb-4(data-aos="fade-up")
      table.table-type-1
        thead
          tr
            th PERIODOS
            th MONTO INICIAL
            th INTERESES
            th MONTO FINAL
        tbody
          tr
            td.fw-bold 1
            td.texto-right $ 120.000.00
            td.texto-right $ 2.828.05
            td.texto-right $ 122.828.05
          tr
            td.fw-bold 2
            td.texto-right $ 122.28.05
            td.texto-right $ 2894.70
            td.texto-right $ 125.722.75
          tr
            td.fw-bold 3
            td.texto-right $ 125.722,75
            td.texto-right $ 2.962,92
            td.texto-right $ 128.685,66
          tr
            td.fw-bold 4
            td.texto-right $ 128.685,66
            td.texto-right $ 3.032,74
            td.texto-right $ 131.718,41
          tr
            td.fw-bold 5
            td.texto-right $ 131.718,41
            td.texto-right $ 3.104,22
            td.texto-right $ 134.822,63
          tr
            td.fw-bold 6
            td.texto-right $ 134.822,63
            td.texto-right $ 3.177,37
            td.texto-right $ 138.000,00
    separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Pasivos contingentes

    p.mb-5 Es una obligación posible porque depende de que en el futuro ocurra algo que está fuera del alcance de la empresa para que sea reconocido el compromiso, por lo que los pasivos contingentes no se reconocen, pero sí se revelan.

    .d-flex.flex-wrap.mb-5
      .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img-15.svg" style="max-width: 502px").mx-auto
      .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
        .row.mb-4.ajuste-espacios-movil
          .col.ajuste-h4
            h4.mb-0 Provisiones:
        p Son obligaciones en las cuales no hay certeza en cuanto al monto ni en cuanto a la fecha para su cancelación.
        p.p-4.mb-4(style="background-color: #E6DCFB")
          | #[b Ejemplo]
          br
          br
          | Una organización espera el resultado de una demanda interpuesta por competencia desleal, los abogados estiman que la empresa tiene una probabilidad alta de perder, el veredicto lo darán los jueces dentro de dos años y se estima el valor de la indemnización en $3.000.000 de pesos.
        p El hecho económico implica reconocer la provisión por valor de tres millones de pesos, pero como se estima para dentro de dos años su reconocimiento, el día de hoy se debe medir a su valor presente utilizando una tasa de descuento de mercado.
    separador

    #t_1_5.titulo-segundo.color-acento-contenido
      h2 1.5 Diferencia entre pasivo financiero e instrumento de patrimonio
    

    .d-flex.flex-wrap.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p.p-4.mb-4(style="background-color: #DDEFFD") El emisor de un instrumento financiero lo clasificará en el momento de su reconocimiento como un pasivo financiero, un activo financiero o un instrumento de patrimonio de conformidad con el acuerdo contractual que protocoliza el instrumento. Una forma de distinguir un pasivo financiero de un instrumento de patrimonio es que exista una obligación contractual que recae sobre una cualquiera de las partes de entregar activos o intercambiar pasivos y activos de manera desfavorable para el emisor.
        p Por ejemplo, si se trata de una acción preferencial, esta será reconocida como un pasivo financiero si el emisor está obligado a reembolsar por una cantidad acordada.

        p En el caso de un instrumento con opción de venta, es decir que el tenedor debe devolverlo al emisor a cambio de efectivo u otro activo se reconoce como un pasivo financiero.
        
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema1/img-16.png", alt="", style="max-width: 505px").mx-auto.mb-4.ps-lg-4   

    separador

    #t_1_6.titulo-segundo.color-acento-contenido
      h2 1.6 Instrumentos Financieros Pasivos y Activos

    p.mb-5 Para el caso de los instrumentos financieros pasivos y activos aplica la Norma Internacional de Información Financiera (NIIF) 9.

    .fondo-slider.pt-5.mb-5(style="background-color: #F3F0EA")
      .d-flex.flex-wrap.col-xl-10.mx-auto
        .col-lg-6.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
          p.fw-bold Clases:
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right.txt--purple
              | Bonos, certificados de depósito a término (CDT)
            li
              i.fas.fa-angle-right.txt--purple
              | Aceptaciones bancarias
            li
              i.fas.fa-angle-right.txt--purple
              | Pagarés
            li
              i.fas.fa-angle-right.txt--purple
              | Préstamos
            li
              i.fas.fa-angle-right.txt--purple
              | Cuentas por cobrar
          p.fw-bold Instrumentos financieros de cobertura, derivados.
          ul.lista-ul.mb-4
            li
              i.fas.fa-angle-right.txt--purple
              | Opciones
            li
              i.fas.fa-angle-right.txt--purple
              | #[em Forwards]
            li
              i.fas.fa-angle-right.txt--purple
              | Futuros
        .mx-auto.col-lg-6.order-1.order-lg-2
          img(src="@/assets/curso/tema1/img-17.svg", alt="", style="max-width: 505px").mx-auto.mb-4.ps-lg-4  

    p.mb-5 Los instrumentos de cobertura son derivados, es decir, activos cuya evolución depende de la que sigan otros (conocidos como subyacentes). Su popularidad se apoya, entre otros factores, en el hecho de que los futuros y muchas opciones se negocien en mercados organizados lo que permite que estos productos estén al alcance de pequeños inversores.

    .d-flex.flex-wrap.mb-5
      .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
        img(src="@/assets/curso/tema1/img-18.svg" style="max-width: 502px").mx-auto
      .d-flex.col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
        p.p-4.mb-4.mb-lg-0(style="background-color: #FEEAD4")
          | #[b Ejemplo]
          br
          br
          | La sociedad Contable SAS realiza el 1/1/AÑO 1 una suscripción de bonos no cotizados cuyas condiciones son las siguientes:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 8.
      span Características de la inversión en bonos
    .tabla-a.mb-4(data-aos="fade-up")
      table.table-type-1
        thead
          tr
            th Concepto
            th Valor
            th Unidad
        tbody
          tr
            td.fw-bold Suscripción
            td.texto-right 52
            td.texto-right Bonos
          tr
            td.fw-bold Valor emisión
            td.texto-right 7.000
            td.texto-right Pesos por bono
          tr
            td.fw-bold Valor reembolso
            td.texto-right 8.000
            td.texto-right Pesos por bono
          tr
            td.fw-bold Fecha reembolso
            td.texto-right 31/12/año 2
            td.texto-right -
          tr
            td.fw-bold Gastos de emisión
            td.texto-right 1000
            td.texto-right Pesos
          tr
            td.fw-bold Interés anua
            td.texto-right 3 %
            td.texto-right EA
    p Se requiere:

    p.mb-5 Contabilizar las operaciones derivadas.

    .row.fondo-slider.mb-5.ajuste-espacios-movil(:style="{'background-image': `url(${require('@/assets/curso/tema1/img-bg-table.jpg')})`, backgroundSize: 'cover'}")
      .ajuste-slider
        SlyderA(tipo="b")
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold Cálculo del interés efectivo
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 9.
                span Flujo de caja proyectado por inversión inicial y recuperación en el año 1
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th PERIODO
                      th MONTOS
                  tbody
                    tr
                      td.fw-bold 0
                      td.texto-right $ -363.000
                    tr
                      td.fw-bold AÑO 1
                      td.texto-right $ 10.920
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-19.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            p.col-12.fw-bold Tabla costo amortizado
            .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 10.
                span Tabla costo amortizado
            .tabla-a.mb-4(data-aos="fade-up")
              table.table-type-1
                thead
                  tr
                    th AÑOS
                    th SALDO INICIAL
                    th INTERÉS EFECTIVO
                    th INTERÉS EXPLÍCITO
                    th INTERÉS IMPLÍCITO
                    th SALDO
                tbody
                  tr
                    td.fw-bold AÑO 1
                    td $ 365.000,00
                    td $ 36.361,89
                    td $ 10.920,00
                    td $ 25.441,89
                    td $ 390.442
                  tr
                    td.fw-bold AÑO 2
                    td $ 390.441,89
                    td $ 38.896,45
                    td $ 10.920,00
                    td $ 27.976,45
                    td $ 418.418
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 1. Suscripción
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 11.
                span Año 1. Suscripción
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Valores representativos de deuda a largo plazo
                      td.texto-right $ 365.000,00
                      td.texto-right -
                    tr
                      td.fw-bold Bancos
                      td.texto-right -
                      td.texto-right $ 365.000,00
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-20.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 1. Cobro del interés explícito
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 12.
                span  Año 1. Cobro del interés explícito
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Bancos
                      td.texto-right $ 10.920,00
                      td.texto-right -
                    tr
                      td.fw-bold Ingresos de valores representativos de deuda
                      td.texto-right -
                      td.texto-right $ 10.920,00
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-21.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 1. Devengo del interés implícito
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 13.
                span Registro contable por emisión de valores a corto plazo
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Valores representativos de deudas a corto plazo
                      td.texto-right $ 365.000,00
                      td.texto-right -
                    tr
                      td.fw-bold Bancos
                      td.texto-right -
                      td.texto-right 365.000,00
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-22.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 1. Reclasificación de los títulos a corto plazo
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 14.
                span Registro contable por ingresos provenientes de valores representativos de deuda
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Bancos
                      td.texto-right $ 10.920,00
                      td.texto-right -
                    tr
                      td.fw-bold Ingresos de valores representativos de deuda
                      td.texto-right -
                      td.texto-right $ 10.920,00
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-23.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 2. Cobro del interés explícito
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 15.
                span Registro contable por emisión de valores representativos de deuda a largo plazo
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Valores representativos de deuda a largo plazo
                      td.texto-right $ 25.441,89
                      td.texto-right -
                    tr
                      td.fw-bold Ingresos de valores representativos de deuda
                      td.texto-right -
                      td.texto-right $ 25.441,89
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-24.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 2. Devengo del interés implícito
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 16.
                span Año 1. Devengo del interés implícito
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Valores representativos de deudas a corto plazo
                      td.texto-right $ 390.441,89
                      td.texto-right -
                    tr
                      td.fw-bold Valores representativos de deudas a largo plazo
                      td.texto-right -
                      td.texto-right $ 390.441,89
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-25.svg" style="max-width: 298px").mx-auto
          .d-flex.flex-wrap.col-xl-11.mx-auto
            .col-lg-7.mb-4.mb-lg-0.ps-lg-4(data-aos="fade-right")
              p.fw-bold AÑO 2 Reembolso de los títulos
              .titulo-sexto.color-acento-contenido.mb-3
                h5 Tabla 17.
                span Reclasificación de los títulos a corto plazo
              .tabla-a.mb-4(data-aos="fade-up")
                table.table-type-1
                  thead
                    tr
                      th CUENTA
                      th DÉBITOS
                      th CRÉDITOS
                  tbody
                    tr
                      td.fw-bold Bancos
                      td.texto-right $ 10.920,00
                      td.texto-right -
                    tr
                      td.fw-bold Ingresos de valores representativos de deuda
                      td.texto-right -
                      td.texto-right $ 10.920,00
            .col-lg-5.mb-4.mb-lg-0.mx-auto(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img-26.svg" style="max-width: 298px").mx-auto

    separador

    #t_1_7.titulo-segundo.color-acento-contenido
      h2 1.7 Reconocimiento, medición, presentación, revelación:
    p.mb-5 En el presente ítem se aborda conceptos que determinan el reconocimiento de los instrumentos de patrimonio, a su vez presenta ejemplos que acompañan el proceso de aplicabilidad.

    .row.mb-5.ajuste-espacios-movil.pt-5
      .col-xl
        TabsA.color-acento-botones.mb-4
          .tarjeta.color-acento-botones--borde.p-4(titulo="Activo financiero")
            h4 Reconocimiento:
            .d-flex.flex-wrap.align-items-center.gap-3
              p.order-2.order-md-1.col-12.col-md La entidad reconocerá un instrumento financiero en sus informes financieros cuando se convierta en parte del contrato o negocio jurídico conforme a las disposiciones de este.
              img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-27.svg", alt="", style="max-width: 155px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Activo financiero")
            h4 Medición Inicial
            .d-flex.flex-wrap.align-items-center.gap-3
              p.order-2.order-md-1.col-12.col-md Los activos y los pasivos financieros se valoran inicialmente por su valor razonable que es el precio del hecho económico salvo evidencia en contrario.
              img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-28.svg", alt="", style="max-width: 155px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Activo financiero")
            h4 Medición Posterior
            .d-flex.flex-wrap.align-items-center.gap-3
              p.order-2.order-md-1.col-12.col-md Es la forma de reconocer en los estados financieros de manera posterior, el importe del instrumento con el reconocimiento de los ajustes correspondientes dependiendo de la forma como es reconocido y medido el título.
                br
                br
                |La medición se efectúa de acuerdo con el modelo de negocio del suscriptor. A valor razonable con cambios en el resultado del ejercicio, a costo amortizado con el interés efectivo y a valor razonable con cambios en el patrimonio de la sociedad. 
              img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-29.svg", alt="", style="max-width: 155px").m-auto
          .tarjeta.color-acento-botones--borde.p-4(titulo="Activo financiero")
            h4 Presentación
            .d-flex.flex-wrap.align-items-center.gap-3
              p.order-2.order-md-1.col-12.col-md El emisor del título lo presentará clasificándolo en sus estados financieros totalmente o en la parte correspondiente, como un pasivo financiero, un activo financiero o un instrumento de patrimonio, de conformidad con las definiciones y características del hecho económico.
              img.mx-auto.order-1.order-md-2(src="@/assets/curso/tema1/img-30.svg", alt="", style="max-width: 155px").m-auto


    .d-flex.flex-wrap.mb-5
      .col-lg-7.mb-4.mb-lg-0.order-2.order-lg-1(data-aos="fade-right")
        p.p-4.mb-4(style="background-color: #F3F0EA") Ejemplo
          br
          br
          |La sociedad Contable SAS consultores adquiere un préstamo para compra de una propiedad inmobiliaria, por un valor de $128.000.000, le descuentan $400.000 para gastos de estudio del crédito. La tasa pactada es del 18 % EA, con pago a 5 cuotas anuales iguales.
        p Calculamos el valor de la cuota utilizando la herramienta pago en funciones financieras
          br
          br
          | =PAGO
          br
          |= $ 40.468.926,49
      .mx-auto.col-lg-5.order-1.order-lg-2
        img(src="@/assets/curso/tema1/img-31.png", alt="", style="max-width: 505px").mx-auto.mb-4.ps-lg-4   

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 18.
      span Amortización contractual 

    p Para el reconocimiento de los abonos a capital e intereses incluidos en cada cuota por pagar.

    .tabla-a.mb-5(data-aos="fade-right")
      table.table-type-1
        thead
          tr
            th AÑOS
            th SALDO INICIAL
            th CUOTA
            th ABONO A INTERESES
            th ABONO A CAPITAL
            th SALDO FINAL
        tbody
          tr
            td.fw-bold 1
            td.texto-right $ 128.000.000
            td.texto-right $ 40.468.926
            td.texto-right $ 22.400.000
            td.texto-right $ 18.068.926
            td.texto-right $ 109.931.074
          tr
            td.fw-bold 2
            td.texto-right $ 109.931.074
            td.texto-right $ 40.468.926
            td.texto-right $ 19.237.938
            td.texto-right $ 21.230.989
            td.texto-right $ 88.700.085
          tr
            td.fw-bold 3
            td.texto-right $ 88.700.085
            td.texto-right $ 40.468.926
            td.texto-right $ 15.522.515
            td.texto-right $ 24.946.412
            td.texto-right $ 63.753.673
          tr
            td.fw-bold 4
            td.texto-right $ 63.753.673
            td.texto-right $ 40.468.926
            td.texto-right $ 11.156.893
            td.texto-right $ 29.312.034
            td.texto-right $ 34.441.640
          tr
            td.fw-bold 5
            td.texto-right $ 34.441.640
            td.texto-right $ 40.468.926
            td.texto-right $ 6.027.287
            td.texto-right $ 34.441.640
            td.texto-right -

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/img-title.svg" style="max-width: 70px").m-auto
      .col
        h3 Reconocimiento inicial
    
    p.mb-5 La siguiente tabla presenta el registro contable correspondiente al reconocimiento inicial de una obligación financiera:
    .titulo-sexto.color-acento-contenido.mb-3
      h5 Tabla 19.
      span Reconocimiento inicial
    .tabla-a(data-aos="fade-left")
      table.table-type-1
        thead
          tr
            th CUENTA
            th DÉBITO
            th CRÉDITO
        tbody
          tr
            td.fw-bold Obligaciones financieras
            td.texto-right -
            td.texto-right $ 128.000.000,00
          tr
            td.fw-bold Costo amortizado
            td.texto-right $ 400.000,00
            td.texto-right -
          tr
            td.fw-bold Efectivo
            td.texto-right $ 127.600.000,00
            td.texto-right -


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

<style lang="sass">
.bg-gradient-1
  background: linear-gradient(0deg, #F3F0EA 0%, transparent 100%)
  margin-right: -3rem
  margin-left: -3rem
  padding-right: 3rem
  padding-left: 3rem
</style>
