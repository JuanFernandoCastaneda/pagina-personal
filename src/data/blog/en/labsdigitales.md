---
author: JuanFernandoCastaneda
pubDatetime: 2022-07-25T15:20:35Z
title: Laboratorios digitales
slug: en/labsdigitales
featured: false
draft: false
status: finished
tags:
  - Javascript
  - Python
  - Svelte
  - FastAPI
  - HTML
  - CSS
  - Autoit
description:
  Digitalization of an optic experiment machine used for teaching physics students at Universidad de los Andes.
previewImagePath: /projects/labsdigitales/preview.webp
urls: 
  - https://github.com/JuanFernandoCastaneda/labs-digitales-front
  - https://github.com/JuanFernandoCastaneda/labs-digitales-back
---

## Context

This was my undergraduate thesis project.

It took place shortly after returning to in-person classes post-COVID. As a response to the pandemic, the university started investing in projects that promoted more flexible learning environments. One of those initiatives was called *Laboratorios Digitales* (Digital Labs). Its goal was to make some of the university’s physical labs accessible remotely — basically, to digitize them.

My project focused on researching the state of the university’s existing labs, evaluating how hard it would be to digitize them, and then building a pilot to digitize one. The pilot I ended up creating was for an optical experiments machine used by mid-program physics students (Phywe XR 4.0 expert unit, 35 kV).

<img src="/projects/labsdigitales/full.webp">

## Use of technologies

The way I managed to digitize the lab was by using AutoIt scripts that interacted with the machine’s graphical interface (which was the best option given how old and inflexible the software was). A backend built with FastAPI (Python) handled requests with instructions for the machine. It would update the AutoIt scripts accordingly, run them, and return the results. On the frontend side, I used Svelte (JavaScript) to let users input available instructions and watch the machine live as it ran the experiment.

The publication link is here: [http://hdl.handle.net/1992/59327](http://hdl.handle.net/1992/59327)
