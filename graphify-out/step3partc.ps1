import sys, json
from pathlib import Path

ast = json.loads(Path('graphify-out/.graphify_ast.json').read_text(encoding="utf-8"))
sem = json.loads(Path('graphify-out/.graphify_semantic.json').read_text(encoding="utf-8"))

nodes = {n['id']: n for n in ast.get('nodes', [])}
for n in sem.get('nodes', []):
    if n['id'] not in nodes:
        nodes[n['id']] = n
    else:
        pass

edges = ast.get('edges', []) + sem.get('edges', [])
hyperedges = ast.get('hyperedges', []) + sem.get('hyperedges', [])

merged = {
    'nodes': list(nodes.values()),
    'edges': edges,
    'hyperedges': hyperedges
}
Path('graphify-out/graph.json').write_text(json.dumps(merged, indent=2, ensure_ascii=False), encoding="utf-8")
print(f'Final graph: {len(nodes)} nodes, {len(edges)} edges, {len(hyperedges)} hyperedges')
