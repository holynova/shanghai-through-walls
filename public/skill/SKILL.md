---
name: shanghai-architectural-cutaway
description: Research a named building in a named city, then create an evidence-backed architectural cutaway with sourced claims and explicit uncertainty. Do not use for speculative interiors, surveying, or construction documentation.
---

# Shanghai architectural cutaway

Create an evidence-backed architectural reading image. The input must name both the building and its city. The work is useful only when the final drawing makes no internal structural or spatial claim that the research packet cannot support.

## Non-negotiable gate: research before image generation

Before drafting a prompt or image, read [the research workflow](references/research-workflow.md) and produce a research packet. It must include:

1. Canonical building identity: official name, city, address, date/period, architect or responsible institution when available.
2. Exterior evidence: at least one authoritative source or reliably captioned reference image confirming the silhouette, façade, materials, and immediate setting.
3. Interior evidence: at least two independently sourced pieces of public evidence for every major interior assertion shown, such as official visitor pages, heritage files, architectural publications, plans/sections, interior photographs, or institutional reporting.
4. A claim ledger that marks each proposed feature as **verified**, **interpretive**, or **unknown**, with a source URL and a short explanation.

Do not proceed to image generation until the ledger is complete. Search in the building's local language and English where useful; use image search to locate plans, sections, and interior photographs, then verify captions, ownership, and context on their source pages rather than trusting search thumbnails.

## Stop conditions

- If reliable interior evidence is absent, do not invent rooms, floors, structural members, staircases, utilities, collections, or mechanisms.
- Offer a verified exterior/context illustration, a diagram limited to documented public areas, or a research brief asking for plans/photos instead.
- If the user explicitly wants a speculative concept, separate it from the evidence-backed deliverable, label it **speculative concept**, and omit factual-looking callouts.
- Never present an AI-inferred interior as an actual record, even with a general disclaimer.

## From evidence to drawing

1. Select the cut axis from the verified spatial story, not from symmetry alone.
2. Include only verified features as labelled callouts. Use exact terms appearing in evidence where possible.
3. For unknown zones inside an otherwise well-documented building, make a constrained **inferred reconstruction** instead of leaving a blank or opaque mass. Derive it from verified exterior geometry, floor counts, program, public circulation, structural type, and comparable period/building-type conventions. Do not attach factual labels to it.
4. Render verified and inferred material differently: for example, verified elements in solid ink/wash and inferred elements in pale wash or fine hatching. Provide a legend outside the image that says `实证` and `推断复原`.
5. Retain a source list beside the final image or in accompanying metadata, with one reference per material factual claim.

## Image contract

- Preserve a recognizable exterior silhouette, material palette, and immediate city context.
- Remove one façade or wedge and selectively lift roof pieces. Keep the cut line legible with a restrained warm cut-face color.
- Reveal verified structural system, circulation, principal rooms, and city relationships. Fill remaining needed space with constrained inferred reconstruction, visibly distinguished from evidence-backed information. A dense building does not require every floor to be illustrated.
- Use warm ivory paper, precise ink linework, restrained watercolor, portrait 3:4 composition, and original artwork. Do not request an imitation of a living artist or existing drawing.
- Include the building title plus only as many concise, correctly spelled labels as evidence supports. Ensure every label points to a visible, sourced feature.
- Add no brand marks, watermark, close-up people, invented historical styles, or photorealistic rendering.

## Prompt workflow

After completing the research packet, read [the prompt template](references/prompt-template.md), replace every bracketed field from verified evidence, then generate one image. Inspect it against the ledger for: title accuracy, sourced callouts, silhouette recognition, meaningful cut axis, and whether each inferred interior feature is a plausible constrained reconstruction rather than a factual claim. Revise or remove unconstrained invention before delivery.

## Honesty boundary

Describe the output as an **evidence-backed architectural reading illustration** and include its source list. It is not a measured survey, construction drawing, heritage assessment, fire plan, or authoritative record of inaccessible interiors.
