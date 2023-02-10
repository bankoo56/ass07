<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

  <div style="margin-top: 8vh;">
    <div class="card"
      style="width: 100%; box-shadow: 5px 5px 30px; background-color: whitesmoke; padding: 0vh 2vh 5vh 2vh;">
      <p class="text-center font-weight-bold text-uppercase" style="font-size: 25px; margin-top: 2rem;">
        <i class="bi bi-megaphone"></i>
        NEWS
        <i class="bi bi-megaphone"></i>
      </p>
      <div class="card-body">
        <div id="carouselExample" class="carousel slide">
          <div class="carousel-inner" style="border-radius: 30px; box-shadow: 5px 5px 10px;">
            <div class="carousel-item active">
              <img src="https://erp.mju.ac.th/picture/banner/26f811d39dd044cf96a860fcdab87a3d.jpg" class="d-block w-100"
                alt="..." style="height: 25rem;">
            </div>
            <div class="carousel-item ">
              <img src="https://erp.mju.ac.th/picture/banner/4647e6fc8c2444f1a9ab26e4ab6de722.jpeg"
                class="d-block w-100" alt="..." style="height: 25rem;">
            </div>
            <div class="carousel-item ">
              <img src="https://erp.mju.ac.th/picture/banner/b910c6184cf846188c66a0de81f869f2.jpg" class="d-block w-100"
                alt="..." style="height: 25rem;">
            </div>
            <div class="carousel-item ">
              <img src="https://erp.mju.ac.th/picture/banner/f49ae4dedfb641c083d6fefe1bac01c4.jpg" class="d-block w-100"
                alt="..." style="height: 25rem;">
            </div>
            <div class="carousel-item ">
              <img src="https://erp.mju.ac.th/picture/banner/b5aaea3378d046f4beb7df2cf7962f46.jpg" class="d-block w-100"
                alt="..." style="height: 25rem;">
            </div>

          </div>
          <div style="padding-top: 3vh; ">
            <p class="text-center">⬇ ติดตามข่าวสารเพิ่มเติมได้ที่นี่ ⬇</p>
            <div class="text-center"
              style="display: flex; margin: 2vh 10vh 0vh 10vh; text-shadow: 1px 0px 4px darkslategray; justify-content: space-between;">
              <a href="https://www.facebook.com/MJUNow" target="_blank">
                <h3 style="display: block;">
                  <i class="bi bi-facebook" style="font-size:30px; color: blue;"></i>
                  MJU Now <i class="bi bi-box-arrow-up-right"></i>
                </h3>
              </a>
              <a href="https://www.instagram.com/maejouniversity/" target="_blank">
                <h3 style="display: block;">
                  <i class="bi bi-instagram" style="font-size:30px; color: purple;"></i>
                  maejouniversity <i class="bi bi-box-arrow-up-right"></i>
                </h3>
              </a>
              <a href="https://www.youtube.com/user/yuuppuuy" target="_blank">
                <h3 style="display: block;">
                  <i class="bi bi-youtube" style="font-size:30px; color: red;"></i>
                  MAEJO UNIVERSITY <i class="bi bi-box-arrow-up-right"></i>
                </h3>
              </a>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  align-items: center;
}

p {
  text-shadow: 1px 1px 5px;
  font-style: italic;
  font-size: 18px;
}
</style>