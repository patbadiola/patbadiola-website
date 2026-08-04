# Local funnel pages

These folders replace the expiring GoHighLevel preview URLs.

## Naming convention

- Funnel folder: `funnels/<project-slug>/`
- Step folder: `step-01`, `step-02`, and so on
- Page file inside every step: `index.html`
- Keep all folder names lowercase and kebab-case.

## Replacing a placeholder

Replace the matching `index.html` file with the completed hard-coded page.
Do not rename the funnel or step folder because the portfolio modal points to
these exact paths.

From Step 1, link to Step 2 with:

```html
<a href="../step-02/index.html">Go to Next Page</a>
```

From Step 2, link back to Step 1 with:

```html
<a href="../step-01/index.html">Previous Step</a>
```

Return to the portfolio with:

```html
<a href="../../../index.html#projects">Back to Portfolio</a>
```

The placeholder pages already demonstrate the correct relative navigation.

