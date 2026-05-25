# State Management Governance
State hierarchy priority:
1. Server-rendered data
2. Local component state
3. Context for lightweight shared state
4. Redux only for enterprise-scale global coordination

Default:
- local state first
- isolated orchestrators
- derived state where possible
- server rendering where possible
- colocated feature state

Use Context API for:
- theme systems
- modal systems
- navigation state
- lightweight shared UI state

Use Redux ONLY when:
- multiple distant systems require synchronized state
- enterprise filtering systems exist
- complex search coordination exists
- cross-page workflow state exists
- optimistic update orchestration becomes complex
- debugging state transitions is critical

Redux Mandatory Rules:
- use Redux Toolkit only
- feature-sliced store architecture
- typed selectors only
- typed dispatch only
- isolate async logic
- avoid oversized root stores

Redux Forbidden:
- globalizing local UI state
- storing transient animation state
- storing derived state unnecessarily
- monolithic reducers
- untyped selectors

Server State:
- prefer server rendering first
- avoid duplicating server state into client state unnecessarily
- preserve SSR consistency

Forbidden:
- prop drilling abuse
- oversized global stores
- duplicated state
- server data inside UI state unnecessarily
- mutation-heavy state architecture
- deeply nested reducer structures

State systems must remain:
- predictable
- composable
- scalable
- deterministic
- hydration-safe
- maintainable

Performance Rules:
- minimize rerenders
- isolate selectors
- memoize expensive derived values
- avoid unnecessary provider nesting

Luxury Frontend Principle:
State systems must never degrade:
- animation smoothness
- rendering consistency
- motion responsiveness
- mobile fluidity