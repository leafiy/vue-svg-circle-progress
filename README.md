# vue-svg-circle-progress
simple circle progress bar using SVG for VueJs2

![image](https://user-images.githubusercontent.com/870449/45437507-d640c800-b6ac-11e8-9d80-746c31dbed2e.png)


### using
```
import CircleProgress from './index.js'
export default {
  components:{
   CircleProgress
  }
}
```

`
<circle-progress :percentage="file.percentage"></circle-progress>
`

### props

| props         | defalut | type    |
| ------------- | ------- | ------- |
| size          | 36      | Number  |
| percentage    |         | Number  |
| strokeWidth   | 4       | Number  |
| ringColor     | #E9EBEE | String  |
| progressColor | #08D7B8 | String  |
| showNumber    | true    | Boolean |
|               |         |         |



