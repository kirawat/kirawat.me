---
name: Google Sheets
dateCreated: 2025-06-11 23:37:00 +0700
---
## AI Function

> [!NOTE]
> It is important to note that the native `=AI()` function is currently available to a limited audience, primarily users enrolled in the Google Workspace Labs program or those with specific Google Workspace subscriptions that include Gemini for Google Workspace.

Its basic structure is:

```
=AI(prompt, [range])
```

* `prompt`: This is a required text string where you provide the instruction for the AI. I can be a direct command or a question.
* `range` (optional): This is a reference to the cell or range of cells that your prompt should act upon.

After entering the formula, Google Sheets will display a button to **Generate and Insert** the AI-powered response into the selected cell.