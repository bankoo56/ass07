<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>

<div style="display: flex; justify-content: center; margin-bottom: 5vh;">
  <div class="card" style="width: 50rem; box-shadow: 5px 5px 30px; background-color: whitesmoke;">
    <div class="text-center font-weight-bold text-uppercase" style="font-size: 25px; margin-top: 1rem;">
      <i class="bi bi-megaphone"></i>
      announcement
      <i class="bi bi-megaphone"></i></div>
    <div class="card-body">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner" style="border-radius: 5px;">
        <div class="carousel-item active">
          <img src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/328625852_461688432698657_4447092139426367137_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=uie2oegAdzMAX9zdHeJ&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfDgyk-RDlT41H-JRRl4-hi6Nb9LzDVaZk5S83qxcwdtQQ&oe=63E33F77" class="d-block w-100" alt="..." style="height: 50rem;">
        </div>
        <div class="carousel-item">
          <img src="https://scontent.fbkk7-3.fna.fbcdn.net/v/t39.30808-6/313030598_416455580690771_365749320803407479_n.jpg?stp=dst-jpg_s640x640&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=cCWMaG31w2cAX9A6Cn6&_nc_oc=AQnFsoLce_DpY_PTs4MH36VRnljK-UW5Ch6ek1hR3dYq_5VcpoQyYzlZOYW_z_xRymc&_nc_ht=scontent.fbkk7-3.fna&oh=00_AfAQ2X4VWYtYSeunJ12JFRyTt7MAeiBSq-fDov4EcWxxbg&oe=63E37717" class="d-block w-100" alt="..." style="height: 50rem;">
        </div>
        <div class="carousel-item">
          <img src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/328674537_877668393381157_6924670978012438076_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=DXuTECh8Xv4AX_TC1u1&_nc_ht=scontent.fbkk7-2.fna&oh=00_AfD1HoZoIAVBhJAG5ehKIdkyUMWX4390207qdDd34yFGTw&oe=63E3B764" class="d-block w-100" alt="..." style="height: 50rem;">
        </div>
        <div class="carousel-item">
          <img src="https://www.mju.ac.th/th/images/BN_News1.jpg" class="d-block w-100" alt="..." style="height: 50rem;">
        </div>
      </div>
      <div class="text-center" style="margin: 1vh 0vh -1vh 3vh ; text-shadow: 1px 0px 4px darkslategray;">
      ติดตามข่าวสารเพิ่มเติมได้ที่ ⬇
      <a href="https://www.facebook.com/MJUNow" target="_blank">
      <h3 style="display: block;">
        <i class="bi bi-facebook" style="font-size:30px; color: blue;"></i>
        MJU Now <i class="bi bi-box-arrow-up-right"></i>
      </h3>
      </a>
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
