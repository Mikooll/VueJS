new Vue({
  el: "#app",
  data: {
    title: "The VueJS Instance",
  },
  beforeCreate: function () {
    console.log("before create()");
  },
  created: function () {
    console.log("created()");
  },
  beforeMount: function () {
    console.log("beforMount()");
  },
  mounted: function () {
    console.log("mounted()");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate()");
  },
  updated: function () {
    console.log("updated()");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy()");
  },
  destroyed: function () {
    console.log("destroyed()");
  },
  methods: {
    destroy: function () {
      this.$destroy();
    },
  },
});
