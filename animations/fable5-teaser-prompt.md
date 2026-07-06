# Prompt vidéo — Teaser "Fable 5" (J-1)

Prompt prêt à coller dans un outil de génération vidéo IA (Sora, Runway, Kling, Veo, Higgsfield…).
Durée cible : 5-6 secondes, format vertical 9:16 (réseaux sociaux).

## Prompt (FR)

> Animation 3D épurée sur fond noir profond avec une légère lueur orange chaude en
> arrière-plan. Au centre, une horloge minimaliste orange (couleur terracotta/orange
> chaude, façon identité visuelle "Claude") avec de fins repères d'heures. Au centre de
> l'horloge, le logo Claude — un astérisque/soleil à sept branches arrondies, orange —
> tourne sur lui-même dans le sens des aiguilles d'une montre, comme les aiguilles d'une
> horloge, en accélérant progressivement (rotation qui s'intensifie, mouvement fluide et
> premium). Au sommet de l'accélération, flash lumineux blanc/orange et le logo explose
> en éclats du même motif qui volent vers l'extérieur en se dispersant et en s'estompant.
> L'horloge disparaît. Dans le silence qui suit l'explosion, le texte "Fable 5" apparaît
> en grand, typographie bold blanc cassé avec le "5" en orange, avec au-dessus la mention
> plus petite "Anthropic présente" et en dessous "Le nouveau modèle arrive". Un badge
> pastille orange "J-1" apparaît sous le texte et pulse doucement en boucle. Ambiance :
> premium, minimaliste, high-tech, chaleureuse (tons orange/terracotta sur noir),
> mouvement de caméra fixe, pas de texte parasite, éclairage doux avec glow.

## Prompt (EN)

> Clean minimalist 3D-style animation on a deep black background with a subtle warm
> orange glow. Centered: a minimal orange (warm terracotta, "Claude"-style) clock face
> with thin hour tick marks. At the clock's center, the Claude logo — a seven-point
> rounded orange asterisk/sunburst mark — spins in place clockwise like a clock hand,
> accelerating smoothly (premium, fluid motion, speeding up over ~3 seconds). At peak
> speed: a bright white/orange flash and the logo shatters into matching sunburst
> fragments that fly outward, scattering and fading. The clock fades away. In the beat
> after the explosion, bold off-white "Fable 5" wordmark scales/fades in (the "5" in
> orange), with a small "Anthropic presents" eyebrow above and "The new model is coming"
> subtitle below. An orange pill badge reading "J-1" (D-1) appears underneath and pulses
> gently in a loop. Mood: premium, minimal, high-tech yet warm (orange/terracotta on
> black), static camera, no stray on-screen text, soft glow lighting.

## Notes de production

- Palette : `#E8734A` (orange principal), `#FFA36C` (orange clair), `#C2410C` (orange
  foncé), fond `#14100d`/noir, texte crème `#FDF6EC`.
- Timing de référence (utilisé dans le visuel HTML fourni) :
  - 0.0–0.6 s : apparition horloge + logo
  - 0.6–3.2 s : rotation du logo, accélération
  - 3.15–3.6 s : flash + explosion en éclats
  - 3.85–4.6 s : reveal "Fable 5" + sous-titre
  - 4.35 s+ : badge "J-1" qui pulse en boucle
- Le fichier `fable5-teaser.html` (même dossier) est le visuel exécutable correspondant
  à ce prompt : il peut servir de storyboard/référence exacte, ou être capturé en écran
  pour obtenir directement un export vidéo (screen recording ou outil type Puppeteer).
