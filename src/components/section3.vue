<template>
  <div id="section-3">
    <div class="section-3-rounded-img-container">
      <img class="section-3-rounded-img" src="img/bg-1.png" />
    </div>

    <div class="section-3-texts-container">
      <div class="section-3-title">LOREM IPSUM</div>
      <p class="section-3-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <p class="section-3-description section-3-description-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <p class="section-3-description section-3-description-italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
      <p class="section-3-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
        lacus vel facilisis.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section-3",
};
</script>

<style>
#section-3 {
  background-color: var(--gray-3);
  align-items: center;
  padding-top: 15px;
  padding-bottom: 30px;
}
@media screen and (min-width: 900px) {
  #section-3 {
    padding-top: 30px;
    display: flex;
    justify-content: space-between;
  }
}

.section-3-rounded-img-container {
  width: 270px;
  max-width: 270px;
  min-width: 270px;
  height: 270px;
  margin: 0 auto;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  border: var(--gray-1) 15px solid;
  align-self: baseline;
}
@media screen and (min-width: 900px) {
  .section-3-rounded-img-container {
    width: 390px;
    max-width: 390px;
    min-width: 390px;
    height: 390px;
    margin-right: 25px;
    margin-bottom: 0px;
  }
}

.section-3-rounded-img {
  display: inline;
  margin: 0 auto;
  height: 100%;
  width: auto;
}

.section-3-texts-container {
  max-width: 660px;
  text-align: center;
  margin: 0 auto;
}
@media screen and (min-width: 900px) {
  .section-3-texts-container {
    text-align: justify;
  }
}

.section-3-title {
  margin-top: 0;
  color: var(--white);
  font-size: 36;
  font-weight: 700;
}

.section-3-description {
  color: var(--white);
  font-size: 16;
  font-weight: 400;
}

.section-3-description-bold {
  font-weight: 700;
}

.section-3-description-italic {
  font-style: italic;
}
</style>
