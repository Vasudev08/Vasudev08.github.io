---
layout: page
title: Agentic 3D reconstruction from a single image
description: An agentic LangChain pipeline that restores a single image and feeds 3D Gaussian Splatting.
importance: 2
category: computer vision
---

3D Gaussian Splatting can reconstruct a photorealistic 3D scene and render it in real time — but it has a demanding requirement: it needs many high-quality images of the object from well-aligned, known camera angles. Give it a single casual photo that's blurry or low-resolution, and the whole thing falls apart. The geometry collapses, depth becomes ambiguous, and the model overfits to noise.

The question we set out to answer: can you take *one* imperfect image and reconstruct a coherent 3D model from it? Our approach was an **agentic pipeline** — a system that looks at an image, figures out what's wrong with it, and dynamically chooses which restoration and view-generation models to run, in what order, before handing the result to 3DGS.
## The pipeline
The brain of the system is an agent built on LangChain and Gemini 2.5 Flash. Given an input image, it runs four phases: analyze the image's quality (brightness, contrast, blur, plus a VLM sub-agent for semantic checks), plan a sequence of operations with explicit reasoning, summarize that plan, and then execute it by calling the right models. It has a toolbox — image analysis, model execution, file management, view generation — and picks tools based on what each specific image needs rather than running a fixed cascade. To keep it runnable on a single 24GB GPU, models are loaded lazily, only when the agent actually calls them.
## The journey was mostly learning what *doesn't* work 
The honest story of this project is a chain of failures, each one narrowing the problem.

**Compute environment.** I started on TAMU's Grace supercomputer for the GPU power, but setup was painful, Docker containers had no internet access, and the queue-based system made iteration miserable. Moved to Google Colab (better, but 12-hour session limits), then finally to a local RTX 4070 workstation — the right call for fast, iterative development.

**View synthesis — the real wall.** The plan was to generate multiple synthetic views from the single image, then reconstruct from those. First try, Zero123++: it produced six perfectly nice-looking views, but COLMAP couldn't recover camera poses from them. SyncDreamer gave sixteen views with wider coverage — same failure. The lesson took a while to sink in: **diffusion models produce realistic images, but not geometrically consistent ones**, and consistency is exactly what pose estimation depends on. High-quality images aren't enough.

**The turning point.** Stable Virtual Camera (SVC) solved it. Instead of just generating views, SVC outputs the views *and* their exact camera intrinsics and extrinsics — so we could skip COLMAP entirely and feed everything straight into training. That produced our first successful single-image reconstruction.

**One more refinement.** NanoBanana was useless as a view generator (non-deterministic, inconsistent), but it worked well as a *preprocessing* step. The best configuration we found: enhance the image on a white background with NanoBanana, pass it through SVC, then remove the background from the synthetic views before training.
## What I took from it
The central insight — geometric consistency matters more than image quality — is the kind of thing you only really learn by watching a reconstruction diverge into colorful noise twice. Once that clicked, the choice of model (SVC over the prettier diffusion outputs) became obvious. And the agentic framing earned its place: because every degraded image is degraded differently, a system that reasons about each input and adapts its pipeline beats any fixed sequence of restoration steps.
 
---
*Joint project with David Zhao. Built with LangChain, Python, Google Gemini, and 3DGS (Nerfstudio Splatfacto).*
