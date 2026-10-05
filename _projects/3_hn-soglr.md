---
layout: page
title: Hard negatives for contrastive learning
description: Does giving a CLIP-style model harder negatives make it smarter?
importance: 3
category: machine learning
---

Contrastive learning works by teaching a model what things *are* by showing it what they *aren't*. You pair an image with its correct text description, then push it away from incorrect ones — the negatives. Most frameworks just grab random negatives from the current batch, which are usually too easy. The model learns nothing from them.

The question we explored: if you deliberately give the model *harder* negatives — the ones it's most likely to confuse — does it get better at fine-grained retrieval? To find out, we built HN-SoGCLR, a lightweight extension of SoGCLR that identifies the top-k most similar *wrong* pairs in each batch and applies a margin penalty to push them farther from the correct match.

This was a joint project with Vijay Murugan. My part was optimizer search, training infrastructure, and running the HN-SoGCLR experiments.
## What I worked on 
**Getting the infrastructure right first.** Early training runs were much slower than they should have been. Profiling revealed the data loader was the bottleneck — too few workers left the GPU sitting idle most of the time. Bumping workers from 2 to 8 fixed it. I also set up Weights & Biases for experiment tracking, which made it possible to run far more configurations cleanly. Together these changes cut training time by about 60%, which was what made the optimizer sweep feasible.

**Optimizer search.** I tested SGDP, Nesterov, NovoGrad, and AdamP against the AdamW baseline across SoGCLR variants. The results were stark: SGD and Nesterov collapsed to near-zero recall. NovoGrad showed some promise. AdamW and AdamP were clearly the right family for this kind of global contrastive objective.

**HN-SoGCLR with AdamP.** Running the hard-negative variant with AdamP, it came in at 24.8% zero-shot top-1 — matching the best vanilla SoGCLR runs.
## What the results actually said
The honest finding: optimizer choice dominated everything. The gap between AdamW/AdamP and SGD-based runs was far larger than any difference between SoGCLR, iSoGCLR, and HN-SoGCLR. Hard negatives showed promise, but because the strong baselines were already using AdamP, it's hard to isolate how much of HN-SoGCLR's performance came from the loss modification versus just inheriting a good optimizer. More controlled ablations would be needed to answer the original question cleanly.

---
*Joint project with Vijay Murugan Appavu Sivaprakasam. Code: [github.com/Vasudev08/MachineLearningHW](https://github.com/Vasudev08/MachineLearningHW/tree/main/ClipTraining).*
