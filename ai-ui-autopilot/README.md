# AI UI Autopilot

This project demonstrates autonomous UI development using VSCode Copilot.

Development is driven by documentation.

Agents read markdown instructions and execute development steps automatically.

Agents

- Orchestrator Agent
- Architect Agent
- UI Developer Agent
- TEST Agent
- QA Agent
- GitOps Agent

Workflow

1. Read product requirements
2. Develop feature
3. Validate feature
4. Commit feature
5. Push to repository

How our system works
User Prompt
   ↓
Orchestrator
   ↓
Read product-requirements.md
   ↓
For each Feature
   ↓
Architect Agent
   ↓
UI Agent
   ↓
Test Agent (Unit Tests)
   ↓
QA Agent (Validation)
   ↓
GitOps Agent (commit + push)
   ↓
Next Feature
