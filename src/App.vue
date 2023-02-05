<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app >
  
      <v-app-bar style=" background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMp6kUw_1rBpkFK9w6bVV3x2OTUX-DrmTycA&usqp=CAU);">  
        <v-tabs>
            <v-tab class="font-tab">
              <RouterLink to="/"><i class="bi bi-newspaper"></i> News</RouterLink>
            </v-tab >
            <v-tab class="font-tab">
              <RouterLink to="/course"><i class="bi bi-journal-text"></i> รายชื่อวิชาในแผนการเรียน</RouterLink>
            </v-tab>
            <v-tab class="font-tab">
              <RouterLink to="/ad"><i class="bi bi-basket"></i> เพิ่มถอนรายวิชา</RouterLink>
            </v-tab>
          </v-tabs>  
      </v-app-bar>
      
      <RouterView />
  </v-app>

</template>

<style c>
.v-toolbar__content, .v-toolbar__extension {
    justify-content: center;
}
</style>


