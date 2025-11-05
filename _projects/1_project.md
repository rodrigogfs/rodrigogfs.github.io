---
layout: page
title: Aprendizado semissupervisionado online para predição de mudanças críticas em software
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

Fomento: CNPq - Processo 409693/2022-7 - Chamada CNPq/SEMPI/MCTI/FNDCT Nº 54/2022 Pró-TIC IA2
Fomento: CNPq - Processo 421807/2022-9 - Chamada CNPq/AWS Nº 64/2022 - Acesso às Plataformas de Computação em Nuvem da AWS (Cloud Credits for Research

Produzir sistemas de software cada vez maiores e mais complexos em maior velocidade é um grande desafio para a indústria. Essa demanda ocasiona defeitos de software que têm um impacto significativo na aceitação do produto. Estima-se que correções em softwares custem mundialmente 381 bilhões de dólares anualmente. Reduzir e corrigir defeitos de software são problemas importantes, ainda mais com a forte pressão para produção de soluções rápidas. Essa velocidade das entregas faz com que desenvolvedores priorizem determinadas partes do código-fonte para inspeção e teste. A qualidade dessa priorização pode levar ao sucesso ou à falha no desenvolvimento de um sistema de software. Nesse contexto, várias abordagens de aprendizado de máquina foram propostas para prever mudanças críticas (indutoras de defeitos) no código-fonte assim que essas mudanças são implementadas. Tais métodos podem ajudar desenvolvedores a identificar as partes do código-fonte mais suscetíveis a defeitos e alocar mais recursos para testá-las. No entanto, as predições produzidas por essas abordagens podem não ser confiáveis devido a mudanças no processo subjacente de geração de defeitos que foi aprendido, pois tal processo pode ter desvios de conceitos, o que torna as predições obsoletas. Como esses desvios de conceitos podem acontecer a qualquer momento, os desenvolvedores não têm confiança se o modelo aprendido está atualizado ou não, o que pode causar erros graves de predição e levar a atrasos nas entregas. Esta pesquisa irá estudar novos algoritmos de aprendizado semissupervisionado online com seleção automática de hipóteses sobre os dados para acelerar a adaptação a desvios de conceito na predição de mudanças críticas em softwares. As soluções encontradas por este projeto, quando integrados a sistemas de controle de versão de software, fornecerão alertas precoces, confiáveis e automatizados de alterações indutoras de defeitos ao longo da vida útil dos projetos de software.

<!-- Every project has a beautiful feature showcase page.
It's easy to include images in a flexible 3-column grid format.
Make your photos 1/3, 2/3, or full width.

To give your project a background in the portfolio page, just add the img tag to the front matter like so:
-->
    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/logo_lfc.jpg" title="LFC" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
