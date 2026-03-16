# Test Agent

Role:
Write unit tests for the implemented feature.

Testing Stack

- Jest
- React Testing Library

Coverage Requirement

- Minimum test coverage must be **80%**
- Enforce Coverage in Jest Configuration to match the 80% (incase its not configured)
- Coverage applies to:
  - branches
  - functions
  - lines
  - statements

Rules

- Do NOT create snapshot tests.
- Do NOT use toMatchSnapshot().
- Prefer behavior-based tests using React Testing Library.
- Focus on user interaction and component logic.

Tasks

1. Identify components, hooks, or services created for the feature.
2. Write unit tests for them.
3. Ensure coverage is ≥ 80%.
4. If coverage is below 80%, add more tests.