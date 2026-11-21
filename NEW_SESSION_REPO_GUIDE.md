# Guide: Start a New Claude Session Connected to Your Portfolio Repo

**Repo:** `fallengospel/GabD-PortfolioExperience`
**Why a new session:** A session's allowed repositories are set when it starts. The old session could read the repo but GitHub refused pushes from it, so you need to start a fresh session with the repo selected.

---

## Step 1: Put a first file in the repo (on GitHub)

The repo is empty. Cloud sessions only work with a repo that already has at least one commit, so add a file first. Using the handoff file also means the new session can read it straight from the repo.

1. Open https://github.com/fallengospel/GabD-PortfolioExperience
2. Click **uploading an existing file** (or **Add file → Upload files**).
3. Drag in `PORTFOLIO_HANDOFF.md` (and this guide, if you want).
4. Click **Commit changes**, committing directly to the `main` branch.

---

## Step 2: Give the Claude GitHub App access to the repo

1. Go to https://github.com/apps/claude/installations/new
   (or GitHub → **Settings → Applications → Installed GitHub Apps → Claude → Configure**).
2. Pick the **fallengospel** account.
3. Under **Repository access**, choose **Only select repositories** and add `GabD-PortfolioExperience`, or choose **All repositories**.
4. Click **Save**.

> If it's a private repo, this step is required. If it's public, Claude can read it without the app, but pushing still needs it.

---

## Step 3: Connect GitHub to your Claude account (one time)

1. Go to https://claude.ai/code and sign in.
2. If prompted, click to connect GitHub and approve the authorization on GitHub.
3. If you're asked to create an environment, keep the defaults (**Default**, Trusted network access) and finish.

> **Team/Enterprise note (DXFORM workspace):** If you see *"GitHub access is required for Claude Code cloud sessions"* instead of a sign-in button, an Owner of your Claude organization must turn on the GitHub connector at **Organization settings → Connectors**. Then reload claude.ai/code.

---

## Step 4: Start the new session with the repo selected

**Option A (shortcut):** Open this link. It preselects the repo:

https://claude.ai/code?repositories=fallengospel/GabD-PortfolioExperience

**Option B (manual):**

1. Go to https://claude.ai/code
2. Click the **repository selector** below the message box.
3. Search for and select `fallengospel/GabD-PortfolioExperience`.
4. Leave the branch on `main`.

Then choose a permission mode (**Accept edits** lets Claude build and push without stopping for each change; **Plan** shows a plan first).

---

## Step 5: Send your first message

Paste something like this:

```
Read PORTFOLIO_HANDOFF.md in the repo first and follow its
"Instructions for the next session". Confirm you can push to this repo,
then wait for my project list before building the portfolio site.
```

If you didn't upload the handoff file in Step 1, paste its full contents into the message instead.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Repo doesn't appear in the selector | Redo Step 2 and make sure `GabD-PortfolioExperience` is in the app's repository access. Reload claude.ai/code. |
| Repo appears but the session fails to start | The repo may still be empty. Redo Step 1. |
| Claude says push was denied (403) | The repo wasn't selected when the session started. Start another session using Step 4. |
| Only a GitHub login button shows | Finish Step 3. On a Team plan, ask your org Owner to enable the GitHub connector. |
| "Claude Code isn't available on your account" | Your seat doesn't include Claude Code. Switch organization or ask your org Owner for a seat that includes it. |

Reference: https://code.claude.com/docs/en/web-quickstart
