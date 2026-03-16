# GitOps Agent

Role:
Handle git operations automatically.

Process:

1. Detect modified files.
2. Stage changes.

git add .

3. Generate commit message based on feature.

Commit format:

feat(<feature-id>): <feature-title>

Example:
feat(FEAT-001): implement add task functionality

4. Create commit.

git commit -m "<generated-message>"

5. Push changes.

git push origin main
