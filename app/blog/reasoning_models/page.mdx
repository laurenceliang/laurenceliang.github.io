---
title: How Do Reasoning Models Work?
date: 2025-04-28
tags: essays
author: Laurence Liang
---

---

_Published as part of [LaunchYard.xyz](https://launchyard.xyz) - figures in process of being uploaded (currently transcribing to markdown!)_

---

![](https://images.unsplash.com/photo-1597838816882-4435b1977fbe?q=80&w=2049&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

_Photo credits: Unsplash/Alexandre Boucey_

Over the past few months, you may have noticed an increasing number of language models that are bundled with "reasoning capabilities". A critical reader might wonder: why should we be interested in "reasoning" models?

It turns out that "reasoning" - if implemented correctly - can have many tangible benefits:

- Small language models (1B-10B scale) can experience large leaps in model performance (i.e. s1 paper)
- Smaller models mean less costs associated with training and hosting them, while benefiting from relatively stronger performances
- Even larger models (presumably 100B+ scale) experience stronger performance (i.e. DeepSeek R1, OpenAI o1/o3 familly, just to name a few) when fitted with reasoning capabilities

Arguably, the promise of cheaper models and leaps in model performance is quite desirable. Given that there have been encouraging empirical results over the past several months, the following sections aim to explain how reasoning models typically work, and what next steps may be on the horizon.

## Context

The most widespread choice of language model today is the transformer, or a transformer derivative. After the "Attention Is All You Need" paper published in 2017, transformer models generally perform the strongest on natural language tasks relative to other architectures (i.e. LSTMs or GANs), making them a default choice for many applications.

However, transformer models seem to have some sort of deterministic trade-offs. As described in the 2020 OpenAI "Scaling Laws for Neural Language Models" paper, the analogy is that to achieve a 2x improvement in model performance, you need either a 10x increase in dataset size, compute time or model size.

Scaling laws for language models. Figure credits: “Scaling Laws for Neural Language Models” by Kaplan et al.

These numbers are an approximation (the actual ratios are a bit different), though the premise remains: in practical terms, a company that wants a linear increase in model performance would need to spend exponentially more in dataset size, compute time or model size.

Let's imagine that we want to train a language model. Using some fictional numbers, we would have to spend the following to minimize the word error rate:

- 1 error per every 100 words: \$100 in training costs
- 1 error per every 200 words: \$1,000
- 1 error per every 400 words: \$10,000
- 1 error per every 800 words: \$100,000
- 1 error per every 1600 words: \$1,000,000

It’s important to restate that the fictional ratios above are different from the actual ratios (as described in the scaling laws paper), though the linear performance vs exponential cost tradeoff analogy remains.

This is where reasoning models come in: you can take an existing transformer model, and by extending that model's output length instead of increasing the traditional "scaling laws variables", models suddenly experience leaps in performance. As we will show later on, the longer the reasoning step, the higher the accuracy. As a result, training a model to reason with longer outputted text is known as **inference time scaling**.

In short: reasoning models are almost like a supplement that models can take, after which they suddenly become measurably smarter at a similar operating cost.

## Assumptions Towards a Case for Reasoning Models

Reasoning models hold a competitive edge if the following assumptions hold:

- **Transformers remain a predominant model architecture.** Given that transformers are somewhat bound to scaling laws, reasoning capabilities are beneficial because they allow models to attain better performance unbound by the scaling laws' tradeoffs.
- **Text as a modality remains the most effective for reasoning.** Given that there exists an abundance of textual data to pre-train on, and given that natural language is a convenient interface for human developers to convey semantic and logical processes to models, text is a desirable modality.

Given that ML research is still very active, it would not be a surprise if (1) someone discovers a non-transformer architecture with more generous scaling laws - or (2) if some non-text modality is more effective at compressing information and logical processes. My take is that case (1) or (2) would diminish the competitive advantage that reasoning models hold with transformers. My point isn't to minimize the impact that reasoning models have, but rather to exercise caution that the premise for reasoning as a cost-effective model may only hold as long as these assumptions remain valid at scale.

## How Do Reasoning Models Work?

Reasoning models are trained to write longer outputs that describe their logical thinking steps in natural language.

Let's imagine a hypothetical example. If a user asks:

```
user: "solve x^3 = 8"
```

A non-reasoning model may output:

```
model: "x=2"
```

A reasoning model, however, would describe its reasoning in length in natural language. Its response could look like:

model:

```markdown
"""
<think>
The goal is to solve x^3=8.
There is a single variable to solve: x.
We need to isolate x, by taking the cube inverse of 8.
We know that 8^(1/3)=2
So x=2.
</think>
x=2
"""
```

where the reasoning steps are enclosed by the `<think>` tags, and the output is outside of the enclosed `<think>` tags.

While the use of detailed reasoning steps may seem redundant and trivial, training a model to describe its reasoning steps - in a process known as "chain of thought" (CoT) - has demonstrated stronger performance for longer reasoning steps for more challenging problems.

## What Evidence Do We Have, and What Techniques Are Being Used?

As there exists a vast amount of literature on reasoning topics, the following is by no means an exhaustive list, but rather a few selected highlights demonstrating encouraging signs that reasoning models perform strongly.

### Chain-of-Thought (CoT) Paper (2022).

This paper introduced prompting with a chain of thoughts: the initial prompt would contain an example of breaking down a problem into multiple steps, which would incite the language model to break down a subsequent problem similarly into intermediate steps. The authors discovered that CoT showed improved problem-solving accuracy at larger model scales on math-related benchmarks, as exemplified by the following figure from the authors’ paper:

Model performance on math benchmarks with respect to model size. Figure credit: “Chain-of-Thought Prompting Elicits Reasoning in Large Language Models” by Wei et al. (2022)

### InstructGPT Paper (2022).

Formally titled “Training language models to follow instructions with human feedback”, this OpenAI paper benchmarked language models being fine-tuned based on human feedback. A notable contribution from this paper is how it shows that fine-tuning a model to follow instructions is preferred by users over a baseline model. Furthermore, this paper also benchmarks how a reinforcement learning model generally outranks a supervised fine-tuned model. While this paper doesn’t directly address reasoning, its methodology bear some ressemblance to those that were employed in subsequent years to train reasoning models, showing the usefulness of post-training methods such as supervised fine tuning and reinforcement learning fine tuning. This paper also shows how these methods can allow a small 1.3B model to achieve similar performance compared to a 175B model for preferred outputs (to what extent a human user prefers the outputs), a similar comparison that reasoning model papers would employ (small models performing comparably to larger baseline models).

How a reinforcement learning fine-tuned model (PPO and PPO-tx) outranks a baseline model (GPT) and a supervised fine-tuned model (SFT). Figure credit: “Training language models to follow instructions with human feedback” by Ouyang et al.

### Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters paper (2024).

This paper compared pre-trained models to models that had inference time scaling (where the model spends more computing power on generating longer outputs describing its reasoning process) using certain inference time strategies. When benchmakred on math-related tasks, the authors found that in some cases, inference time scaled-models can outperform baseline pre-trained models, and the authors report that this also applies to smaller inference time-scaled models outperforming models an order of magnitude larger.

Comparing how 2 strategies for inference-time scaled models compare to baseline pre-trained models (stars). Figure credit: “Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Model Parameters” by Snell et al.

### DeepSeek R1 paper (2025).

While the DeepSeek R1 paper’s most striking claim was being able to train a model that could perform similarly or even surpass OpenAI’s o1 model on tasks requiring some degree of reasoning capabilities, there are multiple notable contributions that the paper makes:

- Introducing a “reinforcement-learning only” (RL-only) post-training method that performs strongly without the need for supervised fine-tuning, using a new RL policy published in 2024 called Group Relative Policy Optimization (GRPO)
- Coupling that RL-only method with a “cold start” set of post-training data, which reduces human language mixing in the model outputs
- Being able to reproduce benchmark scores comparable to OpenAI’s o1 model
- Then using distillation to train smaller Llama and Qwen architecture models that still perform very strongly

The result of these contributions was condensed in the results table of the DeepSeek R1 paper, shown as:

Figure credit: “DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning”

## Current Limitations?

- **Output length required for inference time scaling.** While it is established that longer output lengths correlate with stronger reasoning capabilities, this phenomenon also becomes a pre-requesite of sorts. As a result, it would be relevant to determine whether we can loosen the output length’s lower bound required to produce satisfiable model performance.

- **Lower bound on the parameter size of the reasoning model.** Similarly, it appears that the base model needs to have at least 1 billion parameters to have strong downstream reasoning capabilities. This seems to be a somewhat universal case across transformer models (the 1B lower bound for satisfactory model performance), but also acts as a drawback with respect to a lower bound of compute and memory needed to achieve desirable reasoning-related performance.

- **Optimal prompting strategy, search strategy and reward function. **Training a model to output a satisfactory chain of thoughts to reason seems like a solved problem on certain benchmarks (i.e. MATH-500) within a certain performance bound. However, identifying an optimal strategy to output an optimal chain of thoughts is challenging, especially when it comes to surpassing existing results, remains a challengin problem.

## Next Steps?

Photo credit: Unsplash/Hannah Reding

- **Multiple modalities.** A lot of widespread reasoning models rely on text as a dominant modality. It would be relevant to further determine whether other modalities - from audio and images, to robotic motion (i.e. acceleration and contact force data) and scientific data (i.e. gene expression levels or material properties, just to name a couple) - can also be used for upcoming reasoning models.

- **Long horizon tasks.** A difficult problem in reinforcement learning and robotics is long-horizon planning: the act of planning for something over a long timeframe. Practically speaking, one example would be asking a robot to enter a fast food restaurant, order a meal, take the public transit and deliver it on a specific table corner of a company office. Reasoning may have a similar challenge: current benchmarked tasks are non-trivial but still are within a certain problem solving bound. It reamins to be seen how reasoning models can tackle longer horizon tasks, such as getting a robot to deliver food across a challenging, open environment.

- **Model safety.** My take is that longer outputs create more vulnerabilities for (1) either a model to default to biased or harmful behaviours, and (2) additional entrypoints for malicious actors to inject harmful inputs into the reasoning model. As a result, it becomes relevant to understand how reasoning models can be vulnerable to harmful behaviours, and what can be done to flag and mitigate dangerous, toxic or biased model outputs.

## A Short Summary

Photo credit: Unsplash/Liis Glükmann

In summary, reasoning supercharges model performance with surprisingly limited additional costs, making the cost-benefit tradeoff quite desirable. This makes reasoning an encouraging field to further explore, both with regard to the research aspect and the practical product-side potential.
