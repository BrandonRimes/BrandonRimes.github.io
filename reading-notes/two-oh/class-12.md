# Reading Assignment 12 / July 27

## Chart.JS

### Draw graphs onto the page

- setup:
  - **EITHER**
    - Include `<script src="https://cdn.jsdelivr.net/ npm/chart.js"></script>` in your page
  - **OR**
    - [Download Chart.JS](https://github.com/nnnick/Chart.js) or `npm install chart.js`
    - Copy **Chart.min.js** from folder into working directory.
    - Add `<script scr="Chart.min.js"></script>` to html head
  - **ALSO**
    - Create a `<canvas id="" width="" height=""></canvas>` element to contain the chart

- Instantiate the Chart class:

  - ```javascript
    // one of these
    const ctx = document.getElementById('chart-id');
    const ctx = document.getElementById('chart-id').getContext('2d');
    const ctx = $('#chart-id');
    const ctx = 'chart-id';

    // then this
    const chart = new Chart(ctx, {
      type: '',
      data: data,
    });
    ```

- Chart Types:
  - line
  - bar
  - radar
  - doughnut
  - pie
  - polarArea
  - bubble
  - scatter
  - area
  - mixed

- Sources:
  - [https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/)
  - [https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/](https://www.webdesignerdepot.com/2013/11/easily-create-stunning-animated-charts-with-chart-js/)
  - [https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)
