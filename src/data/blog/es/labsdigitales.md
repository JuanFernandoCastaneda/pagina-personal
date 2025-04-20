---
author: JuanFernandoCastaneda
pubDatetime: 2022-07-25T15:20:35Z
title: Laboratorios digitales
slug: labsdigitales
featured: false
draft: false
tags:
  - Javascript
  - Python
  - Svelte
  - FastAPI
  - HTML
  - CSS
  - Autoit
description:
  Digitalización de una máquina de experimentos ópticos usada para el aprendizaje de estudiantes de física.
urls: 
  - https://github.com/JuanFernandoCastaneda/labs-digitales-front
  - https://github.com/JuanFernandoCastaneda/labs-digitales-back
---

## Contexto

Este fue mi proyecto de tesis de pregrado. 

Fue poco después del retorno a clases después de la pandemia del COVID. Como consecuencia, la universidad empezó a invertir en proyectos que permitieran entornos de aprendizaje más flexibles. Uno de estos se llamó Laboratorios Digitales. Laboratorios digitales buscaba hacer accesibles algunos de los laboratorios físicos de la universidad para que estuvieran disponibles también de forma remota (digitalizarlos). 

Mi proyecto de grado consistió en investigar la situación de los laboratorios que tenía la universidad, para evaluar qué tan difícil era digitalizarlos, y luego hacer un piloto para digitalizar uno de ellos. El piloto que terminé haciendo fue sobre una máquina de experimentos ópticos, que usaban estudiantes de mitad de carrera de física (Phywe XR 4.0 expert unit, 35 kV).

La forma en que logré digitalizarla fue a través de scripts en Autoit que interactuaban con la interfaz gráfica (la mejor opción dada la antigüedad del programa y su poca extensibilidad). Un backend en FastAPI (Python) recibía peticiones con las instrucciones que debía ejecutar la máquina. Este modificaba los scripts en Autoit y los ejecutaba, para luego retornar los resultados. Un frontend en Svelte (Javascript) permitía al usuario ingresar las instrucciones disponibles, y ver a la máquina en vivo mientras se ejecutaba el experimento.

El link de la publicación es el siguiente [http://hdl.handle.net/1992/59327](http://hdl.handle.net/1992/59327)
