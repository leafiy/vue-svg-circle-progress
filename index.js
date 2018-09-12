import CircleProgress from "./circle-progress.vue";

CircleProgress.install = function(Vue) {
  Vue.component(CircleProgress.name, CircleProgress);
};

export default CircleProgress;
