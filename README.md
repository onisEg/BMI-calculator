# BMI Calculator

A small browser exercise that reads height in centimetres and weight in kilograms, calculates BMI and updates the displayed value as either input changes.

[Open the live demo](https://oniseg.github.io/BMI-calculator/) · [View screenshot](https://raw.githubusercontent.com/onisEg/resume/23df91e50f87b60e1360d79edcc24cf77eb09b07/public/projects/bmi-calculator.webp)

## Worked example

1. Enter a height of `180` and a weight of `75`. The calculation converts the height to `1.8` metres and evaluates `75 / (1.8 × 1.8)`. The displayed result is `23.15`.
2. The function compares the unrounded value with 18.5, 25 and 30 and then displays the matching label. Only the numeric result is rounded to two decimal places.
3. Clearing either input, or entering zero or a negative value, takes the invalid-input branch and resets the label to an ellipsis.

## Run locally

From the repository root, serve the checked-in files with Python 3:

```sh
python -m http.server 8000
```

Open [localhost:8000](http://localhost:8000/) to load `index.html`. The browser reads the HTML, styles and assets directly. On Windows, `py -m http.server 8000` starts the same server.

## Source guide

| File or directory | What to look for |
| --- | --- |
| [index.html](index.html) | Height and weight inputs and the two output elements. |
| [js/main.js](js/main.js) | Input listeners, unit conversion, category selection and display formatting. |
| [css/style.css](css/style.css) | Calculator-specific styling. |

## Manual walkthrough

For simple boundary tests enter a height of `100` cm so the calculated value equals the weight. Compare `24.99` and `25`, then clear the weight. The interface should switch labels at the boundary and show “Invalid input” for the empty field.
