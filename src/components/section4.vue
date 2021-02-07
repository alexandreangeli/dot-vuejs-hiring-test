<template>
  <div id="section-4">
    <div class="section-4-accordion">
      <div
        v-for="(item, index) of accordionItems"
        :key="'item-' + index"
        class="section-4-accordion-item"
        :class="{ 'section-4-accordion-item-active': activeIndex === index }"
      >
        <div class="section-4-accordion-item-header">
          <div class="section-4-accordion-item-header-title">
            {{ item.title }}
          </div>
          <img
            class="section-4-accordion-item-header-down-arrow"
            src="/assets/arrow-down-white.png"
            @click="updateAccordion(index)"
          />
          <img
            class="section-4-accordion-item-header-up-arrow"
            src="/assets/arrow-up-gray.png"
            @click="closeAccordion()"
          />
        </div>
        <div class="section-4-accordion-item-body-wrapper">
          <div
            class="section-4-accordion-item-body"
            v-html="item.content"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section-4",

  data() {
    return {
      activeIndex: -1,
      accordionItems: [
        {
          title: "Lorem ipsum",
          content: `
      <img class="section-4-accordion-item-body-img" src="./assets/bg-1.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
        },
        {
          title: "Lorem ipsum",
          content: `
      <img class="section-4-accordion-item-body-img" src="./assets/bg-2.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
        },
        {
          title: "Lorem ipsum",
          content: `
      <img class="section-4-accordion-item-body-img" src="./assets/bg-3.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
        },
        {
          title: "Lorem ipsum",
          content: `
      <img class="section-4-accordion-item-body-img" src="./assets/bg-1.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
        },
        {
          title: "Lorem ipsum",
          content: `
      <img class="section-4-accordion-item-body-img" src="./assets/bg-2.png"/>
      <p class="section-4-accordion-item-body-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
      </p>
    `,
        },
      ],
    };
  },

  methods: {
    closeAccordion() {
      this.activeIndex = -1;
    },

    updateAccordion(index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss">
#section-4 {
  background-color: var(--gray-5);
  padding-top: 20px;
  padding-bottom: 20px;
}
@media screen and (min-width: 900px) {
  #section-4 {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.section-4-accordion-item:first-child .section-4-accordion-item-header {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.section-4-accordion-item:last-child .section-4-accordion-item-header,
.section-4-accordion-item:last-child .section-4-accordion-item-body-wrapper {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.section-4-accordion-item-active .section-4-accordion-item-header {
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.section-4-accordion-item:not(:last-child) .section-4-accordion-item-header {
  border-bottom: 1px var(--white) solid;
}

.section-4-accordion-item-header {
  background-color: var(--gray-3);
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
@media screen and (min-width: 900px) {
  .section-4-accordion-item-header {
    padding: 30px;
  }
}
.section-4-accordion-item-active .section-4-accordion-item-header {
  background-color: var(--white);
}

.section-4-accordion-item-header-title {
  margin: 0;
  font-weight: 700;
  font-size: 24;
  color: var(--white);
}
.section-4-accordion-item-active .section-4-accordion-item-header-title {
  color: var(--gray-3);
}

.section-4-accordion-item-header-down-arrow {
  cursor: pointer;
  object-fit: none;
}
.section-4-accordion-item-active .section-4-accordion-item-header-down-arrow {
  display: none;
}

.section-4-accordion-item-header-up-arrow {
  display: none;
  cursor: pointer;
  object-fit: none;
}
.section-4-accordion-item-active .section-4-accordion-item-header-up-arrow {
  display: block;
}

.section-4-accordion-item-body-wrapper {
  background-color: var(--white);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
}
.section-4-accordion-item-active .section-4-accordion-item-body-wrapper {
  overflow: auto;
  max-height: 400px;
  animation: hide-scroll 0.3s backwards;
}
@keyframes hide-scroll {
  from,
  to {
    overflow: hidden;
  }
}

.section-4-accordion-item-body {
  padding: 0 20px;
}
.section-4-accordion-item-active .section-4-accordion-item-body {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}
@media screen and (min-width: 900px) {
  .section-4-accordion-item-body {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
}

.section-4-accordion-item-body-img {
  max-width: 300px;
  width: 100%;
  box-sizing: border-box;
  border: var(--gray-2) 10px solid;
}
@media screen and (min-width: 900px) {
  .section-4-accordion-item-body-img {
    height: 200px;
    width: 300px;
    margin-right: 30px;
  }
}

.section-4-accordion-item-body-text {
  font-size: 16px;
  font-weight: 400;
  color: var(--gray-3);
  align-self: center;
  text-align: center;
}
@media screen and (min-width: 900px) {
  .section-4-accordion-item-body-text {
    text-align: justify;
  }
}
</style>
