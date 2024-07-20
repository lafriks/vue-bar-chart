# Vue Bar Graph

A simple and lightweight Vue.js 3 component for making charts that do not rely on large chart libraries and will not bloat your dependencies.

> For Vue.js 2.x use 1.x version.

*Forked from <https://github.com/djaxho/pure-vue-chart>*

---

## Example

```vue
<vue-bar-graph
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
```

![charts](src/assets/charts.gif)

When props are updated the graph will automatically animate to the new values.

## Install

```sh
npm i vue-bar-graph
```

Import it:

```js
import VueBarGraph from 'vue-bar-graph';
```

Register it in your component:

```js
components: {
    VueBarGraph,
},
```

## Use it

```vue
<vue-bar-graph
  :points="[3,5,2,5,4]"
  :width="400"
  :height="200"
/>
```

## Options

To further control the display of data, you can use simple props to manipulate the charts. Here are some examples:

![examples](src/assets/chart-examples.png)

**Most of the available props below are self-explanatory:**

```vue
:points=[1,4,5,3,4]
:show-y-axis="false"
:show-x-axis="true"
:width="400"
:height="200"
:show-values="true"
:use-custom-labels="true"
:labels="['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec']"
```

## Additional Features

### Trendline

You can add a simple linear trend line by using the following props:

```vue
:show-trend-line="true"
:trend-line-width="2"
trend-line-color="lightblue"
```

![trendline](src/assets/trendline.png)

### X-axis labels

X-axis labels, by default will be from 1 - length-of-data.
But you can automatically use custom labels by using the prop `:use-custom-labels="true"`.
Or you can provide the data as an array of objects, each with a `value` and `label` like so:

```vue
:points=[{label: 'N', value: 41.1}, {label: 'NW', value: 1}, {label: 'W', value: 15}]
```

## Contributing

I'm open to any issues or pull requests so long as
they are simple, easy to read, use the eslint settings in package.json,
and follow commitizen-esque style commit formats. Just open an issue on github and start a discussion.

- vue-bar-graph issues - <https://github.com/lafriks/vue-bar-graph/issues>

### Authors or Acknowledgments

- Danny Jackson
- Lauris BH

### List of features

- Simple bar charts

### License

This project is licensed under the MIT License but please create
pull requests to improve this package together rather that copying
into another project.
