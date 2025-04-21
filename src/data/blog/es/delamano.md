---
author: JuanFernandoCastaneda
pubDatetime: 2022-09-25T15:20:35Z
modDatetime: 2025-01-20T03:15:57.792Z
title: Delamano
slug: delamano
featured: false
draft: false
status: lookingFor
tags:
  - React
  - Typescript
  - Redux
  - Lean4
  - HTML
  - CSS
description: Plataforma web para el aprendizaje de demostraciones de matemáticas discretas.
previewImagePath: /projects/delamano/preview.webp
urls:
  - https://github.com/JuanFernandoCastaneda/El-Cheemspleo
---

# Delamano

Esta es una plataforma web creada para apoyar a estudiantes de segundo semestre de Ingeniería de Sistemas en la Universidad de los Andes con su curso de Matemáticas Discretas.

La plataforma les da ejercicios relacionados con el curso, les permite ingresar los pasos que creen que solucionan cada ejercicio, y verifica si esos pasos son válidos. Dado que la Universidad de los Andes queda en Bogotá, una parte importante del sitio está en español.

Se inspiró en el [Lean Game Server de ADAM](https://adam.math.hhu.de/) y usa la misma licencia.

## La plataforma

<br><img src="https://github.com/user-attachments/assets/125a2626-6644-419a-96a4-8ef00673d897" aspect-ratio="1/1" width="60%"/><br>

En la página de inicio, el estudiante puede escoger el tema que quiere estudiar (los temas están basados en el programa real del curso en Uniandes).

<br><img src="https://github.com/user-attachments/assets/50e9dfae-29c9-4d8c-afbf-7942e7c4f285" aspect-ratio="1/1" width="60%"/><br>

Después de escoger un tema, se muestran los "mundos" (círculos grandes) y los "niveles" (círculos pequeños). Cada nivel es un ejercicio parecido a los que tienen que resolver en clase.

<br><img src="https://github.com/user-attachments/assets/bb688ffd-1e98-4727-9f77-5852f6d7679f" aspect-ratio="1/1" width="60%"/><br>

Dentro de cada nivel, la interfaz se divide en tres bloques: en el centro está el enunciado del ejercicio, a la izquierda hay pistas para resolverlo, y a la derecha los teoremas que pueden usar.

<br><img src="https://github.com/user-attachments/assets/b8d9fd21-d145-4ff4-af6c-805d81ffacc1" aspect-ratio="1/1" width="30%"/><br>

Por ejemplo, si el estudiante escribe `definicion_implicacion`, el estado de la prueba avanza. Una vez haya ingresado una secuencia de pasos lógicos que reduzca el enunciado a una tautología, la plataforma le confirma que la prueba es válida. Así pueden estudiar y practicar incluso cuando no hay nadie disponible para ayudarles.

## Cómo correr el proyecto

Para correr el proyecto, hay que instalar algunas dependencias no tan comunes:

* [Lean4](https://github.com/leanprover/lean4): un lenguaje de programación enfocado en pruebas formales, muy útil para trabajar con teoremas. Se puede instalar con VSCode.  
* [Elan](https://github.com/leanprover/elan): **si no quieres usar VSCode**, Elan te ayuda a gestionar instalaciones de Lean4.

También es necesario construir los niveles de la plataforma antes de usarla. Se puede hacer con `npm build_games`, pero por ahora eso instala la misma librería en todas las subcarpetas de los juegos (esto se va a arreglar en una futura versión). Si prefieres, puedes compilar solo un juego específico—revisa la definición del comando `build_games` para ver cómo.

Ya construido todo, simplemente corre `npm start` para lanzar la versión de desarrollo del sitio y empezar a jugar/explorar.
