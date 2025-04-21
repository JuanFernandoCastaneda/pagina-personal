---
author: JuanFernandoCastaneda
pubDatetime: 2022-09-25T15:20:35Z
modDatetime: 2025-01-20T03:15:57.792Z
title: Delamano
slug: en/delamano
featured: false
draft: false
status: lookingFor
tags:
  - ReactJs
  - Typescript
  - Redux
  - Lean4
  - HTML
  - CSS
description:
  Web platform made to learn proofs for discrete mathematics.
previewImagePath: /projects/delamano/preview.webp
urls: 
- https://github.com/JuanFernandoCastaneda/El-Cheemspleo
---

# Delamano

This is a web platform built to support second-semester CS students at Universidad de los Andes with their Discrete Math course.

The platform gives them exercises related to the class, allows them to input the steps they believe would solve each problem, and checks whether those steps are valid. Given that Universidad de los Andes is based in Bogotá, a significant part of the site is written in Spanish.

It was inspired by [ADAM's](https://adam.math.hhu.de/) Lean Game Server and uses the same license.

## The platform

<br><img src="https://github.com/user-attachments/assets/125a2626-6644-419a-96a4-8ef00673d897" aspect-ratio="1/1" width="60%"/><br>

On the landing page, students can choose a topic they want to work on (based on the actual syllabus at Universidad de los Andes).

<br><img src="https://github.com/user-attachments/assets/50e9dfae-29c9-4d8c-afbf-7942e7c4f285" aspect-ratio="1/1" width="60%"/><br>

After selecting a topic, they’ll see "worlds" (the big circles) and "levels" (the smaller ones). Each level is a discrete math exercise, like the ones they face in class.

<br><img src="https://github.com/user-attachments/assets/bb688ffd-1e98-4727-9f77-5852f6d7679f" aspect-ratio="1/1" width="60%"/><br>

Inside each level, the UI is split into three main parts: the middle block shows the exercise, the left block gives hints, and the right block lists the theorems they can use.

<br><img src="https://github.com/user-attachments/assets/b8d9fd21-d145-4ff4-af6c-805d81ffacc1" aspect-ratio="1/1" width="30%"/><br>

For instance, if a student types `definicion_implicacion`, the proof advances. Once they enter a full sequence of steps that leads the statement to a tautology, the platform confirms that their proof is correct. This way, students can practice and learn even when no one’s around to help.

## Running the project

To run the project, you'll need to install a couple of less-common dependencies:

* [Lean4](https://github.com/leanprover/lean4): a proof-oriented programming language that’s super useful for working with theorems. You can install it through VSCode.  
* [Elan](https://github.com/leanprover/elan): **if you don't want to use VSCode**, Elan helps you manage Lean4 installations.

You’ll also need to build the platform’s levels before using it. You can run `npm build_games` to do that, but this currently installs the same library in all game subfolders (which will be fixed in a future release). Alternatively, you can choose to build a specific game—check the `build_games` command definition to see how.

Once everything is built, run `npm start` to launch the development version and start playing around.
