<template>
  <div id="app">
    <Section1 />
    <Section2 />
    <Section3 />
    <Section4 />
    <Section5 />
    <Section6 />
  </div>
</template>

<script>
import Section1 from "./components/section1.vue";
import Section2 from "./components/section2.vue";
import Section3 from "./components/section3.vue";
import Section4 from "./components/section4.vue";
import Section5 from "./components/section5.vue";
import Section6 from "./components/section6.vue";

export default {
  name: "App",
  components: { Section1, Section2, Section3, Section4, Section5, Section6 },
};
</script>

<style>
:root {
  --black: #333333;
  --gray-1: #343434;
  --gray-2: #454545;
  --gray-2-75: rgba(69, 69, 69, 0.75);
  --gray-3: #6f6f6f;
  --gray-4: #707070;
  --gray-5: #bebebe;
  --white: #ffffff;
  --green-1: #2d3b09;
  --green-2: #546130;
}

* {
  font-family: inherit;
}

html {
  scroll-behavior: smooth;
  font-family: "Roboto", sans-serif;
}

::-webkit-input-placeholder {
  font-family: Helvetica;
}
:-moz-placeholder {
  font-family: Helvetica;
}
::-moz-placeholder {
  font-family: Helvetica;
}
:-ms-input-placeholder {
  font-family: Helvetica;
}

body {
  margin: 0;
  text-align: center;
}

#app > * {
  padding-left: 10px;
  padding-right: 10px;
}
@media screen and (min-width: 900px) {
  #app > * {
    padding-left: Max(calc((100vw - 1336px) / 2), 100px);
    padding-right: Max(calc((100vw - 1336px) / 2), 100px);
  }
}

*:invalid {
  box-shadow: none;
}
</style>
