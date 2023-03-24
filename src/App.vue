<template>
<AppHeader appName="CSC vue app" />

<div class="container-fluid" id="app">
  <div class="row">
    <AppSideBar />

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <router-view/>
      </div>
    </main>

    <footer class="navbar navbar-dark bg-dark fixed-bottom bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">Company name</a>
      <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </footer>
  </div>
</div>

</template>

<script lang="ts" setup>
import AppSideBar from './components/AppSideBar.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<style lang="scss">
body {
  font-size: .875rem;
}

.feather {
  width: 16px;
  height: 16px;
}
</style>
