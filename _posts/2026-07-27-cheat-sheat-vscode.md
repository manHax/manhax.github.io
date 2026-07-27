---
title: Perbandingan Shortcut GoLand dan VS Code (Default Keymap)
tags:
- software
- tips
created: 2026-07-24 08:59:19.478000
updated: 2026-07-27 12:29:38.133000
favorite: false
published: true
date: '2026-07-27'
layout: post
---
# Perbandingan Shortcut GoLand dan VS Code (Default Keymap)

Perbandingan shortcut GoLand (default keymap) vs VS Code equivalent-nya (default VS Code keymap, asumsi pake Go extension).

## Navigasi

| Fungsi | GoLand | VS Code |
|---|---|---|
| Go to Definition | `Ctrl+B` / `Ctrl+Click` | `F12` / `Ctrl+Click` |
| Go to Declaration | `Ctrl+Alt+B` | `Ctrl+F12` |
| Find Usages / References | `Alt+F7` | `Shift+F12` |
| Go to File | `Ctrl+Shift+N` | `Ctrl+P` |
| Go to Symbol (in file) | `Ctrl+F12` | `Ctrl+Shift+O` |
| Go to Symbol (workspace) | `Ctrl+Shift+Alt+N` | `Ctrl+T` |
| Navigate Back / Forward | `Ctrl+Alt+Left/Right` | `Alt+Left/Right` |
| Go to Line | `Ctrl+G` | `Ctrl+G` |
| Recent Files | `Ctrl+E` | `Ctrl+R` |
| Show Call Hierarchy | `Ctrl+Alt+H` | `Shift+Alt+H` |

## Editing

| Fungsi | GoLand | VS Code |
|---|---|---|
| Rename (Refactor) | `Shift+F6` | `F2` |
| Reformat Code | `Ctrl+Alt+L` | `Shift+Alt+F` |
| Optimize Imports | `Ctrl+Alt+O` | otomatis via `goimports` on save, atau `Ctrl+Shift+P` → Organize Imports |
| Duplicate Line | `Ctrl+D` | `Shift+Alt+Down` |
| Delete Line | `Ctrl+Y` | `Ctrl+Shift+K` |
| Move Line Up/Down | `Shift+Alt+Up/Down` | `Alt+Up/Down` |
| Comment Line | `Ctrl+/` | `Ctrl+/` |
| Multi-cursor (select next occurrence) | `Alt+J` | `Ctrl+D` |
| Select All Occurrences | `Ctrl+Alt+Shift+J` | `Ctrl+Shift+L` |
| Expand Selection | `Ctrl+W` | `Shift+Alt+Right` |
| Shrink Selection | `Ctrl+Shift+W` | `Shift+Alt+Left` |

## Search & Replace

| Fungsi | GoLand | VS Code |
|---|---|---|
| Search Everywhere | `Shift Shift` (double shift) | `Ctrl+P` (file) / `Ctrl+Shift+P` (command) |
| Find in File | `Ctrl+F` | `Ctrl+F` |
| Find & Replace | `Ctrl+R` | `Ctrl+H` |
| Find in Files (project-wide) | `Ctrl+Shift+F` | `Ctrl+Shift+F` |
| Replace in Files | `Ctrl+Shift+R` | `Ctrl+Shift+H` |

## Run & Debug

| Fungsi | GoLand | VS Code |
|---|---|---|
| Run | `Shift+F10` | `Ctrl+F5` (Run Without Debugging) |
| Debug | `Shift+F9` | `F5` |
| Toggle Breakpoint | `Ctrl+F8` | `F9` |
| Step Over | `F8` | `F10` |
| Step Into | `F7` | `F11` |
| Step Out | `Shift+F8` | `Shift+F11` |
| Resume Program | `F9` | `F5` |
| Stop | `Ctrl+F2` | `Shift+F5` |
| Evaluate Expression | `Alt+F8` | debug console langsung |

## Code Generation & Refactor

| Fungsi | GoLand | VS Code |
|---|---|---|
| Generate (getter/setter/etc) | `Alt+Insert` | tergantung ekstensi, biasanya `Ctrl+Shift+P` → "Go: Generate..." |
| Quick Fix / Show Intentions | `Alt+Enter` | `Ctrl+.` |
| Extract Variable | `Ctrl+Alt+V` | `Ctrl+Shift+R` (via Refactor menu, gopls-dependent) |
| Extract Function | `Ctrl+Alt+M` | via Quick Fix (`Ctrl+.`) → Extract Function |

## Terminal & Panel

| Fungsi | GoLand | VS Code |
|---|---|---|
| Toggle Terminal | `Alt+F12` | `` Ctrl+` `` |
| Toggle Project/Explorer panel | `Alt+1` | `Ctrl+B` |
| Toggle Fullscreen Editor (Zen-ish) | `Ctrl+Shift+F12` | `Ctrl+K Z` (Zen Mode) |

## Go-specific (VS Code Go extension)

| Fungsi | Command Palette |
|---|---|
| Run Tests in File | `Go: Test File` |
| Run Test at Cursor | `Go: Test Function At Cursor` |
| Generate Test | `Go: Generate Unit Tests For File` |
| Add Import | `Go: Add Import` |
| Run `go vet` | `Go: Vet Current Package` |
| Restart gopls | `Go: Restart Language Server` |

---

**Tips:** kalau lo pengen shortcut GoLand-nya persis (biar gak perlu apalin ulang muscle memory), install extension **"IntelliJ IDEA Keybindings"** di VS Code — ini nge-remap sebagian besar shortcut ke gaya JetBrains.
