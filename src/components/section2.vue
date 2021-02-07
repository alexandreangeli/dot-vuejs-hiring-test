<template>
  <div id="section-2">
    <img
      class="section-2-carousel-arrow section-2-carousel-arrow-left-white"
      src="img/arrow-left-white.png"
      @click="previousSection2CarouselPage"
    />
    <div
      class="section-2-carousel-container"
      ref="section-2-carousel-container"
    >
      <div
        v-for="(page, pageIndex) of carouselPages"
        :key="'page-' + pageIndex"
        class="section-2-carousel-page"
      >
        <div
          v-for="(item, itemIndex) of page"
          :key="'page-' + pageIndex + '-item-' + itemIndex"
          class="section-2-carousel-card"
        >
          <img class="section-2-carousel-card-img" :src="item.img" />
          <div class="section-2-carousel-card-title">
            {{ item.title }}
          </div>
          <div class="section-2-carousel-card-description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </div>
    <img
      class="section-2-carousel-arrow section-2-carousel-arrow-right-white"
      src="img/arrow-right-white.png"
      @click="nextSection2CarouselPage"
    />
  </div>
</template>

<script>
export default {
  name: "Section-2",

  data() {
    return {
      activeIndex: 0,
      currentPage: 1,
      windowWidth: window.innerWidth,
      section2CarouselItems: [
        {
          img: "img/bg-1.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-2.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-3.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-3.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-1.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-2.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-2.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-3.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
        {
          img: "img/bg-1.png",
          title: "LOREM IPSUM",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        },
      ],
    };
  },

  computed: {
    cardsPerPage() {
      return this.windowWidth >= 900 ? 3 : 1;
    },
    lastPage() {
      return Math.ceil(this.section2CarouselItems.length / this.cardsPerPage);
    },
    carouselPages() {
      let carouselPages = [];
      for (
        let i = 0;
        i < this.section2CarouselItems.length;
        i += this.cardsPerPage
      ) {
        carouselPages.push(
          this.section2CarouselItems.slice(i, i + this.cardsPerPage)
        );
      }
      return carouselPages;
    },
  },

  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },

  methods: {
    nextSection2CarouselPage() {
      this.updateSection2Carousel(this.currentPage + 1);
    },

    previousSection2CarouselPage() {
      this.updateSection2Carousel(this.currentPage - 1);
    },

    updateSection2Carousel(page) {
      if (page > this.lastPage) {
        page = 1;
      } else if (page < 1) {
        page = this.lastPage;
      }
      this.currentPage = page;

      let carouselContainer = this.$refs["section-2-carousel-container"];

      carouselContainer.scrollLeft =
        (carouselContainer.scrollWidth * (this.currentPage - 1)) /
        this.lastPage;
    },
  },
};
</script>

<style>
#section-2 {
  padding-top: 20px;
  padding-bottom: 90px;
  background-color: var(--gray-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
@media screen and (min-width: 900px) {
  #section-2 {
    padding-top: 35px;
    padding-bottom: 60px;
  }
}

.section-2-carousel-arrow {
  cursor: pointer;
  object-fit: none;
  position: absolute;
  bottom: 30px;
}
@media screen and (min-width: 900px) {
  .section-2-carousel-arrow {
    position: relative;
    bottom: 100px;
  }
}

.section-2-carousel-arrow-left-white {
  left: 28%;
}
@media screen and (min-width: 900px) {
  .section-2-carousel-arrow-left-white {
    left: 0;
  }
}

.section-2-carousel-arrow-right-white {
  right: 28%;
}
@media screen and (min-width: 900px) {
  .section-2-carousel-arrow-right-white {
    right: 0;
  }
}

.section-2-carousel-container {
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.section-2-carousel-container::-webkit-scrollbar {
  display: none;
}

.section-2-carousel-page {
  min-width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
}
@media screen and (min-width: 900px) {
  .section-2-carousel-page {
    display: grid;
    padding: 0;
    grid-template-columns: 33.33% 33.33% 33.33%;
  }
}

.section-2-carousel-page-active {
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
}

.section-2-carousel-card {
  margin: 0px;
}
@media screen and (min-width: 900px) {
  .section-2-carousel-card {
    margin: 15px;
  }
}

.section-2-carousel-card-img {
  box-sizing: border-box;
  width: 100%;
  border: 10px var(--gray-3) solid;
  max-width: 280px2;
}

.section-2-carousel-card-title {
  padding: 20px 0;
  font-weight: 700;
  color: var(--white);
  font-size: 24px;
}
@media screen and (min-width: 900px) {
  .section-2-carousel-card-title {
    padding: 20px 0;
  }
}

.section-2-carousel-card-description {
  font-weight: 400;
  color: var(--white);
  font-size: 16px;
}
</style>
