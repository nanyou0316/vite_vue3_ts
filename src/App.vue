<template>
  <div  style="background-color: antiquewhite;padding: 20px 50px;">
    app
    <RouterView></RouterView>
    <!-- <div>
      <ul>
        <li>
          <RouterLink to="/home" active-class="isActive">home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" active-class="isActive">about</RouterLink>
        </li>
        <li>
          <RouterLink to="/xxxxx" active-class="isActive">404</RouterLink>
        </li>
      </ul>
    </div> -->
    <!-- RouterLink定制 -->
    <RouterLink to="/home" custom v-slot="{isActive,navigate}">
      <li :class="isActive?'isActive':''" @click="navigate">
          home
      </li>
    </RouterLink>
    <RouterLink to="/about" custom v-slot="{isActive,navigate}">
      <li :class="isActive?'isActive':''" @click="navigate">
          about
      </li>
    </RouterLink>
    <RouterLink to="/xxxxx" custom v-slot="{isActive,navigate}">
      <li :class="isActive?'isActive':''" @click="navigate">
          404
      </li>
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
li {
  list-style: none;

}
.isActive{
  color: red;
}
</style>
