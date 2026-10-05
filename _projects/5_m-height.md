---
layout: page
title: Learning to estimate m-height
description: Replacing slow linear programs with neural networks for a coding-theory quantity.
importance: 5
category: machine learning
---

The problem comes from coding theory. You're sending a message through a noisy channel. You have:
- **k** — the length of the raw message
- **n** — the total length after adding redundancies to make it robust to noise
- **P** — the matrix used to project the message and add that robustness
- **m** — a "failure count"  

Given P, the goal is to predict a number called the **m-height** — a property of the code that's normally computed by solving many linear programs, which gets slow. The task: replace that with a neural network that approximates it directly, substantially faster.
## What I tried across three projects
The key insight from the start was that a single global model doesn't work. The relationship between P and the m-height changes heavily depending on the values of k and m, so I split everything into **9 expert datasets** — one per valid (k, m) configuration — and trained separate models for each.

**Project 1 — Finding the right architecture:**
Five experimental runs, each building on the last.
- Baseline (9 plain MLPs): average cost **1.314**
- Added heavy dropout → underfitting, cost went up to **1.482**
- Increased capacity → improved most configurations, but two — (k=4, m=5) and (k=5, m=4) — actually got *worse*
- **Dual architecture (final):** used a high-capacity model for the 7 stable configurations and a high-dropout "chaotic" model specifically for those two volatile ones → cost dropped to **1.088**
- Tried adding 20k extra LP-generated training samples → cost went back up to 1.43, so I scrapped it and kept Run 4

**Project 2 — Mathematical hints + augmentation:**
Added precomputed mathematical properties of P as extra inputs alongside the raw matrix, and experimented with column-permutation augmentation since the m-height doesn't change when you shuffle columns.

**Project 3 — Transformer:**
Treated each column of P as a token and used self-attention to capture relationships between columns, iterating through multiple architecture versions (stacking blocks, transfer learning between configurations). The permutation invariance that needed explicit augmentation in earlier projects falls out naturally from attention.
## What I took from it
The dual-architecture discovery in Project 1 was the most useful finding — when two configurations behave so differently that the same regularization actively hurts them, the right move is to give them their own model rather than force a compromise. Everything after that was about whether more structure (math hints, attention) could push the cost lower.
