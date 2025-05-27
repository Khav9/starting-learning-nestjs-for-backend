<p align="center">
  <a href="https://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<h1 align="center">Welcome to My NestJS Project</h1>
<p align="center">by <strong>Khav Saroeun</strong></p>

<p align="center">
  🚀 This is my first project using <a href="https://nestjs.com" target="_blank">NestJS</a>, a progressive Node.js framework for building efficient and scalable server-side applications.
</p>
<p>summary <a href="https://strong-quarter-058.notion.site/Nestjs-1f973a76b49580a5a24ee9578bfd419a">Notion</a></p>

---

## 📘 Description

This is my first project using NestJS.  
The purpose of this project is to explore backend development using modern TypeScript practices. It is a simple, scalable, and well-structured foundation for building robust APIs and backend services.

---

## 🛠 Project Setup

Make sure you have [pnpm](https://pnpm.io/) installed globally.

```bash
pnpm install
```

🚀 Running the Project
``` bash
Copy
Edit
# Development
pnpm run start

# Watch mode (auto-restart on changes)
pnpm run start:dev

# Production build
pnpm run start:prod
```
✅ Running Tests
```bash
Copy
Edit
# Unit tests
pnpm run test

# End-to-end (e2e) tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
Copy
Edit
```


# 🧠 Git Essentials for Team Collaboration

## Branch Management

### 1. Create New Branch
Create a new branch to work on features/fixes without affecting main codebase.

git checkout -b feature/your-feature-name  # Create and switch to new branch

**Best Practice:**
- Use descriptive branch names (e.g., `feature/user-auth`, `bugfix/login-error`)
- Prefix with `feature/`, `bugfix/`, `hotfix/`, or `refactor/`

### 2. Switch Between Branches
```bash
git checkout branch-name          # Switch to existing branch
git switch branch-name            # Newer alternative to checkout
```

### 3. List All Branches
```bash
git branch                       # Local branches
git branch -a                    # All branches (including remote)
git branch -vv                   # Show tracking branches
```

## Sharing Work with Team

### 4. Push Branch to Remote
```bash
git push -u origin branch-name   # First push (sets upstream)
git push                         # Subsequent pushes (after upstream set)
```

### 5. Fetch Latest Changes
```bash
git fetch origin                 # Get latest branches/commits from remote
git fetch --prune                # Clean up deleted remote branches
```

### 6. Pull Latest Changes
```bash
git pull origin branch-name      # Fetch + merge
git pull --rebase origin branch-name # Fetch + rebase (cleaner history)
```

## Merging & Code Integration

### 7. Merge to Main Branch
```bash
git checkout main
git pull origin main             # Always update main first
git merge feature/branch-name --no-ff  # Merge with explicit merge commit
git push origin main
```

**Best Practice:**
- Use `--no-ff` to preserve feature branch history
- Consider using Pull Requests (PRs) for team review

### 8. Rebase Instead of Merge (Alternative)
```bash
git checkout feature/branch
git rebase main                 # Reapply your commits on top of main
git checkout main
git merge feature/branch        # Now fast-forward merge
```

## Cleanup

### 9. Delete Branches
```bash
git branch -d branch-name              # Delete local branch
git push origin --delete branch-name   # Delete remote branch
git branch -D branch-name              # Force delete unmerged branch
```

## Team Collaboration Essentials

### 10. Stashing Changes
```bash
git stash                       # Temporarily save uncommitted changes
git stash list                  # View stashes
git stash pop                   # Reapply most recent stash
```

### 11. Viewing Changes
```bash
git status                      # Current branch status
git diff                        # Unstaged changes
git diff --cached               # Staged changes
git log --oneline --graph       # Compact commit history
```

### 12. Resolving Merge Conflicts
1. After merge/rebase with conflicts:
```bash
git status                      # Show conflicted files
```
2. Edit files to resolve conflicts (look for `<<<<<<<` markers)
3. Mark as resolved:
```bash
git add resolved-file.js
git rebase --continue           # or git commit for regular merge
```

### 13. Tagging Important Commits
```bash
git tag v1.0.0                  # Create tag
git push origin v1.0.0          # Push tag to remote
```

### 14. Undoing Changes
```bash
git reset --soft HEAD~1         # Undo last commit but keep changes
git reset --hard HEAD~1         # Completely discard last commit
git revert commit-hash          # Create undo commit
```

## Advanced Team Workflows

### 15. Cherry-Picking Commits
```bash
git cherry-pick commit-hash     # Apply specific commit to current branch
```

### 16. Tracking Upstream Branches
```bash
git branch -u origin/branch-name  # Set existing branch to track remote
```

### 17. Submodules (For Project Dependencies)
```bash
git submodule add repo-url      # Add another repo as dependency
git submodule update --init     # Initialize submodules
```

## Best Practices for Teams
1. Always pull before pushing
2. Commit often, push when stable
3. Write meaningful commit messages
4. Use `.gitignore` for build files/env vars
5. Agree on branching strategy (Git Flow, Trunk-Based, etc.)
6. Code review via Pull Requests
7. Protect your main branch
8. Use pre-commit hooks for linting/tests
```

