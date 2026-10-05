---
layout: page
title: Schema grounding for robust mathematical reasoning in vision-language models
description: CSCE 753 course project: can you fix a small VLM's eyes without retraining it?
importance: 1
category: computer vision
---

# Can you fix a small model's "eyes" without retraining it?  
Small Vision-Language Models are fragile at math: redraw the same graph with thicker lines or swap a 3 for a 7 and the answer falls apart, even though the concept never changed. For a graduate course project (CSCE 753) my team asked whether we could close that reliability gap with **no fine-tuning**  purely by changing the model's input. We tested five training-free augmentations on the DynaMath benchmark across three sizes of Qwen3.5 (0.8B, 2B, 4B), using Avg@4 as the reliability metric.

**My piece was three input-level methods, each grounded in cited prior work and adapted to the math-graph setting:** Deep Schema Grounding (DSG, from Hsu et al.), a coordinate-overlay method (Scaffold, from Lei et al.'s SCAFFOLD framework), and a horizontal scan-line method (VISER, drawing on Izadi et al.'s work on the VLM binding problem).
- **DSG** decomposes a graph into a dependency chain — axis limits → grid increments → curve type → coordinates — and grounds each step one at a time, feeding every answer back as context before the model answers the real question.
- **VISER** draws three horizontal scan lines and tells the model to read top-to-bottom, forcing serial parsing on vertically-spread plots.
- **Scaffold** overlays a labeled 10×10 dot grid so the model can reference discrete coordinates instead of eyeballing them.
## What happened

| Method   | 0.8B   | 2B        | 4B     |
| -------- | ------ | --------- | ------ |
| Baseline | 44.66  | 49.65     | 51.95  |
| DSG      | 37.92  | **50.05** | 48.40  |
| VISER    | 29.29  | 46.41     | 45.41  |
| Scaffold | 18.41  | 27.00     | 30.44  |
DSG was the only method in the *whole study* to beat baseline at any non-4B scale — by a hair at 2B. Everything else came in under baseline, and Scaffold was severely harmful at every scale.
## What I learned 
Most of it "failed," but the failures were the interesting part:
- **A positive average can hide real damage.** DSG's 2B win masked drops across most individual subjects; it just rescued a few catastrophic outliers that dominated the averages.
- **Errors compound in a grounding chain.** A bad axis reading in step one corrupts every step after it, so DSG did well on multiple-choice but badly on precise float answers. The exception: Graph Theory under DSG at 4B beat baseline (58.85% vs. 55.73%) — relational reasoning genuinely benefits, which argues for applying DSG *selectively*.
- **Don't draw on the homework.** Both overlay methods paint over tick marks and labels, so the model sees a corrupted diagram and treats the markings as data. Coordinates belong in a side channel, not on the image.

The headline lesson: **the quality of injected structure matters far more than its presence.** Noisy grounding is worse than none, and below a certain model size, extra context confuses more than it helps.

--- 
*Joint project with Akib Mahmud (CV skeletonization) and Sushil Vemuri (code injection). Code: [github.com/TheBlackCat22/ReasonVLM](https://github.com/TheBlackCat22/ReasonVLM).*
