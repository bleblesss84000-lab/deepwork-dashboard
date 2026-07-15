# Carrousel Instagram — Strava × Claude (9 slides)

Carrousel prêt à publier : **« J'ai donné mes données Strava à Claude »**.
Format 1080 × 1350 px (4:5), le format carrousel recommandé par Instagram.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `slides/slide-01.png` → `slide-09.png` | Les 9 slides prêtes à publier, dans l'ordre |
| `PROMPT-STRAVA.md` | Le prompt complet « coach running » à envoyer en DM à ceux qui commentent STRAVA |
| `strava-claude-carrousel.html` | La source du design (autonome, polices embarquées) — modifie le texte ici puis regénère |
| `tools/render.js` | Script de rendu PNG (Playwright + Chromium) |

## Fil narratif

Données → analyse → erreur détectée → programme personnalisé → limites → prompt offert.

1. **Hook** — J'ai donné mes données Strava à Claude
2. **Le problème** — Strava sait tout… mais ne dit pas quoi changer
3. **Étape 1** — Ce que j'ai donné à Claude (+ mention du connecteur officiel Strava ↔ Claude, lancé en juin 2026)
4. **Étape 2** — Le prompt (extrait volontairement incomplet → raison de commenter)
5. **Étape 3** — Ce que Claude a repéré (5 constats)
6. **Le déclic** (slide sombre) — la « zone grise » : tout à la même intensité
7. **Le résultat** — la semaine type générée
8. **Les limites** — non, ça ne remplace pas un coach (crédibilité)
9. **CTA** — commente « STRAVA » + sauvegarde le post

## ⚠️ À personnaliser avant publication

- **Slides 5, 6 et 7** : remplace les constats et la semaine type par **tes vrais résultats** obtenus avec tes propres données — c'est ce qui rend le post crédible. Modifie le texte dans le HTML puis regénère (voir plus bas).
- **Slide 1** : tu peux remplacer les deux logos par ta photo au centre (ajoute une `<img>` ronde entre les deux tuiles dans la section `SLIDE 1` du HTML).
- Le chiffre « juin » (connecteur Strava→Claude, réservé aux abonnés Strava, déploiement progressif depuis le 1er juin 2026) est exact à la date de création — vérifie qu'il est toujours d'actualité.

## Légende proposée

> Mes données Strava ne me servaient qu'à regarder mes performances.
> Claude les a transformées en conseils concrets et en programme d'entraînement. 🏃
>
> Le plus surprenant ? L'erreur qu'il a repérée en 30 secondes et que je faisais depuis des mois (slide 6 👀).
>
> Commente « STRAVA » et je t'envoie le prompt complet en DM.
> 💾 Sauvegarde le post pour le tester après ta prochaine course.
>
> (Non, ça ne remplace pas un coach — slide 8. Mais pour comprendre enfin tes données, c'est redoutable.)

Hashtags (pioche 5-10) : `#running #courseapied #strava #claudeai #ia #entrainement #runningmotivation #marathon #semimarathon #10km #coachrunning #runfrance`

Lien avec le Reel : « Dans ma dernière vidéo, je vous ai montré le résultat. Voici exactement les données que Claude a analysées. »

## Regénérer les PNG après modification du HTML

```bash
npm install playwright-core
node tools/render.js slides   # depuis le dossier carousel/
```

(Le script attend `carrousel-embedded.html` à côté de lui — adapte le chemin dans `render.js` vers `../strava-claude-carrousel.html` si besoin.)

## Design

- Palette : ivoire `#F4F0E8` (fond Claude), orange Strava `#FC4C02`, terracotta Claude `#C15F3C`, encre `#161513`
- Typo : **Anton** (titres), **Inter** (texte), **Lora italique** (citations) — embarquées en base64 dans le HTML
- Logos redessinés en SVG inline (aucune ressource externe)
