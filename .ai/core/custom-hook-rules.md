# Custom Hook Standards

Hooks must:
- encapsulate reusable logic
- remain deterministic
- cleanup side effects
- remain composable

Forbidden:
- hooks with rendering responsibility
- hooks with DOM mutation side effects
- giant multi-purpose hooks
- oversized shared state hooks

Motion hooks:
- isolate animation lifecycle
- cleanup observers/listeners
- cleanup RAF loops
- cleanup timelines

State hooks:
- preserve predictable updates
- avoid duplicated state