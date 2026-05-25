# API Integration Contracts

All frontend systems must remain API-ready.

Mandatory:
- separate API models from UI models
- use DTO mapping layers
- sanitize API responses
- isolate async fetching logic
- preserve predictable contracts

Never:
- tightly couple UI to payload shape
- fetch directly inside presentation components
- mutate API responses directly

All systems must support:
- loading states
- error states
- retries
- pagination
- filtering
- future CMS integration
- future search integration

Architecture:
API Layer → DTO Mapping → Typed Contracts → Orchestrator → Presentation

API readiness:
- scalable response mapping
- future backend migration compatibility
- predictable async lifecycle