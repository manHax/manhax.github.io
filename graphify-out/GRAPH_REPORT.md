# Graph Report - C:\Manhakkim\LEARN\manhax.github.io  (2026-07-27)

## Corpus Check
- 17 files · ~121,868 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 57 nodes · 53 edges · 18 communities (7 shown, 11 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Thesis Data Processing
- Professional Portfolio
- Skripsi Thesis Project
- Laptop Battery Post
- Frontend JS Scripts
- Jekyll Layout Templates
- VSCode Cheatsheet Post
- Profile Photo Concept
- Jekyll Configuration
- Old Profile Photo
- Blog Index Page
- My Mind Idea
- Praylarm App Project
- Rapid Vibe Coding
- App Demo Invite
- Thesis Model Eval

## God Nodes (most connected - your core abstractions)
1. `diskritisasi()` - 6 edges
2. `PT Dwidasa Samsara Indonesia` - 6 edges
3. `Improving Decision Tree with AdaBoost` - 5 edges
4. `helper_disk()` - 4 edges
5. `runAll()` - 4 edges
6. `runNoknn()` - 4 edges
7. `Mitos Baterai Laptop: Apakah Harus Selalu Dicolok?` - 4 edges
8. `praproses()` - 3 edges
9. `selecter()` - 3 edges
10. `tosplt()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Improving Decision Tree with AdaBoost` --semantically_similar_to--> `Final Thesis (Skripsi)`  [INFERRED] [semantically similar]
  projects/skripsi/index.html → index.html
- `Improving Decision Tree with AdaBoost` --cites--> `train_test`  [EXTRACTED]
  projects/skripsi/index.html → PENINGKATAN PERFORMANSI POHON KEPUTUSAN PADA DIAGNOSA PENYAKIT DIABETES MENGGUNAKAN ENSEMBLE ADABOOST/README.md
- `Post Layout` --references--> `Default Layout`  [EXTRACTED]
  _layouts/post.html → _layouts/default.html

## Import Cycles
- None detected.

## Communities (18 total, 11 thin omitted)

### Community 0 - "Thesis Data Processing"
Cohesion: 0.35
Nodes (11): diskritisasi(), entropy(), get_label_v(), get_max(), helper_disk(), ign_zero(), praproses(), runAll() (+3 more)

### Community 1 - "Professional Portfolio"
Cohesion: 0.25
Nodes (8): Bank Ganesha New Bangga, Bank Sahabat Sampoerna Mobile API, Bank Sahabat Sampoerna Web Admin & Internet Banking, Luqmanul Hakim, Ottocash / Ottopay, Portfolio of Luqmanul Hakim, PT Dwidasa Samsara Indonesia, Sampoerna Mobile Banking v2

### Community 2 - "Skripsi Thesis Project"
Cohesion: 0.33
Nodes (6): Final Thesis (Skripsi), train_test, AdaBoost, Decision Tree, Improving Decision Tree with AdaBoost, Pima Indians Diabetes

### Community 3 - "Laptop Battery Post"
Cohesion: 0.40
Nodes (5): Battery Care Mode, Calendar aging, Cycle aging, Mitos Baterai Laptop: Apakah Harus Selalu Dicolok?, Optimized Battery Charging

### Community 6 - "Jekyll Layout Templates"
Cohesion: 0.67
Nodes (3): Dark Mode Theme, Default Layout, Post Layout

## Knowledge Gaps
- **29 isolated node(s):** `train_test`, `manHax.github.io`, `Jekyll Configuration`, `Dark Mode Theme`, `Post Layout` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **11 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `train_test`, `manHax.github.io`, `Jekyll Configuration` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._