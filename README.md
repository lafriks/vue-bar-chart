<p align="center">
  <h1>Vue Bar Graph</h1>
</p>
<p align="center">
    A simple and lightweight vue component for making charts that do not rely on large chart libraries and will not bloat your dependencies
</p>

*Forked from https://github.com/djaxho/pure-vue-chart*

<hr/>

<h3>Example</h3>

```
<vue-bar-graph
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
```

<img src="src/assets/charts.gif" alt="charts" width="350"/>

<p>When props are updated the graph will automatically animate to the new values.</p>

## Install
```
npm i vue-bar-graph
```
Import it:
```
import VueBarGraph from 'vue-bar-graph';
```
Register it in your component:
```
components: {
    VueBarGraph,
},
```
## Use it
```
<vue-bar-graph
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
```
## Options
<p>To further control the display of data, you can use simple props to manipulate the charts. Here are some examples:</p>

![](src/assets/chart-examples.png)

#### Most of the available props below are self-explanatory:
```
:points=[1,4,5,3,4]
:show-y-axis="false"
:show-x-axis="true"
:width="400"
:height="200"
:show-values="true"
:use-custom-labels="true"
:labels="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec']"
```

### Additional Features:
#### Trendline
You can add a simple linear trend line by using the following props:
```
:show-trend-line="true"
:trend-line-width="2"
trend-line-color="lightblue"
```
![](src/assets/trendline.png)

#### X-axis labels:
X-axis labels, by default will be from 1 - length-of-data.
But you can automatically use custom labels by using the prop `:use-custom-labels="true"`.
Or you can provide the data as an array of objects, each with a `value` and `label` like so:
```
:points=[{label: 'N', value: 41.1}, {label: 'NW', value: 1}, {label: 'W', value: 15}]
```

<h3>Contributing</h3>
I'm open to any issues or pull requests so long as
they are simple, easy to read, use the eslint settings in package.json, 
and follow commitizen-esque style commit formats. Just open an issue on github and start a discussion.
- vue-bar-graph issues - https://github.com/manpreet30/vue-bar-graph/issues

<h3>Authors or Acknowledgments</h3>

<ul>
  <li>Danny Jackson</li>
  <li>Lauris BH</li>
  <li>Manpreet Singh</li>
</ul>

<h3> List of features </h3>
<ul>
  <li>Simple bar charts</li>
</ul>

<h3>License</h3>

This project is licensed under the MIT License but please create pull requests to improve this package together rather that copying itto another project.
