# Component Architecture

All components must:
- have single responsibility
- remain reusable
- remain composable
- remain scalable

Architecture:
Orchestrator → Primitive → Motion Hook

Never:
- combine fetching with rendering
- combine animation with business logic
- combine state and presentation unnecessarily