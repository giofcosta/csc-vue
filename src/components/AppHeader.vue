<template>
    <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6" href="#">{{ companyName }}</a>
        <div class="navbar-nav navbar-right">
            <div class="nav-item text-nowrap">
                <router-link to="/profile" class="nav-link px-3">{{ userName }}</router-link>
            </div>
            <div class="nav-item text-nowrap">
                <a class="nav-link px-3" href="#">Sign out</a>
            </div>
            <div class="nav-item text-nowrap">
                <a class="nav-link px-3" href="#" @click="showModal">Help</a>
            </div>
        </div>
    </header>
    <AppModal title="Help title" ref="thisModal">
        <template #body>
          <AppHelp /> 
        </template>
    </AppModal>
</template>

<script setup="" lang="ts">
  import AppModal from './AppModal.vue';
  import AppHelp from './AppHelp.vue';
  import { ref, defineProps } from 'vue';

  defineProps({
    companyName: { type: String, required: true },
    userName: { type: String, required: true }
  })

  const thisModal= ref();
  function showModal() {
    thisModal.value.show();
  }
</script>

<style lang="scss">

.navbar-brand {
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: rgba(0, 0, 0, .25);
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
}

.navbar .navbar-toggler {
  top: .25rem;
  right: 1rem;
}

.navbar .navbar-nav {
    flex-direction: row;
}

.navbar .form-control {
  padding: .75rem 1rem;
}

.form-control-dark {
  color: #fff;
  background-color: rgba(255, 255, 255, .1);
  border-color: rgba(255, 255, 255, .1);
}

.form-control-dark:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
}
</style>