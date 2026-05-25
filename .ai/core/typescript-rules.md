# TypeScript Governance

Mandatory:
- strict mode
- explicit return types
- readonly where possible
- discriminated unions for state
- typed props everywhere

Forbidden:
- implicit any
- unknown prop shapes
- oversized generic abuse
- untyped API responses
- unsafe casting

All types must be:
- colocated logically
- reusable
- deterministic
- composable
- scalable

Architecture:
- separate API contracts
- separate UI contracts
- separate DTO mappings