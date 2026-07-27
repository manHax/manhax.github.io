import sys, json
from graphify.build import build_from_json
from graphify.cluster import score_all
from graphify.analyze import god_nodes, surprising_connections, suggest_questions
from graphify.report import generate
from pathlib import Path

extraction = json.loads(Path('graphify-out/.graphify_extract.json').read_text(encoding="utf-8"))
detection  = json.loads(Path('graphify-out/.graphify_detect.json').read_text(encoding="utf-8"))
analysis   = json.loads(Path('graphify-out/.graphify_analysis.json').read_text(encoding="utf-8"))

G = build_from_json(extraction, root='C:\\Manhakkim\\LEARN\\manhax.github.io', directed=False)
communities = {int(k): v for k, v in analysis['communities'].items()}
cohesion = {int(k): v for k, v in analysis['cohesion'].items()}
tokens = {'input': extraction.get('input_tokens', 0), 'output': extraction.get('output_tokens', 0)}

labels = {
    0: "Thesis Data Processing",
    1: "Professional Portfolio",
    2: "Skripsi Thesis Project",
    3: "Laptop Battery Post",
    4: "Frontend JS Scripts",
    5: "Thesis ML Code",
    6: "Jekyll Layout Templates",
    7: "VSCode Cheatsheet Post",
    8: "Profile Photo Concept",
    9: "Jekyll Configuration",
    10: "Old Profile Photo",
    11: "Blog Index Page",
    12: "My Mind Idea",
    13: "Praylarm App Project",
    14: "Rapid Vibe Coding",
    15: "App Demo Invite",
    16: "Thesis Setup Scripts",
    17: "Thesis Model Eval"
}

questions = suggest_questions(G, communities, labels)

report = generate(G, communities, cohesion, labels, analysis['gods'], analysis['surprises'], detection, tokens, 'C:\\Manhakkim\\LEARN\\manhax.github.io', suggested_questions=questions)
Path('graphify-out/GRAPH_REPORT.md').write_text(report, encoding="utf-8")
Path('graphify-out/.graphify_labels.json').write_text(json.dumps({str(k): v for k, v in labels.items()}, ensure_ascii=False), encoding="utf-8")
print('Report updated with community labels')
