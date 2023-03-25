<template>
<AppHeader :companyName="company.business_name" :userName="user.username" />

<div class="container-fluid" id="app">
  <div class="row">
    <AppSideBar />

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <router-view/>
      </div>
    </main>

    <AppFooter />
  </div>
</div>

</template>

<script lang="ts" setup>
  import AppSideBar from './components/AppSideBar.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  import { useCompanyStore } from '@/store/modules/company';
  import { storeToRefs } from 'pinia';
  import { onMounted } from 'vue';
import { useUserStore } from './store/modules/user';
  
  const companyStore = useCompanyStore();
  const userStore = useUserStore();
  const { company } = storeToRefs(companyStore);
  const { user } = storeToRefs(userStore);
  onMounted(() => {
    companyStore.getCompany()
    userStore.getUser()
  });
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
