<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          
          <li class="nav-item" v-for="menuItem in menuItems" :key="menuItem.url">
            <router-link :to="menuItem.url" class="nav-link">
                <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#dashboard"/></svg>
                {{ menuItem.text }}
            </router-link>
          </li>
          
        </ul>
      </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';
interface MenuItem {
  url: string
  text: string
}

const menuItems = ref<MenuItem[]>([
  {url: "/dashboard", text: "Dashboard"},
  {url: "/profile", text: "Profile"},
  {url: "/bank", text: "Bank"},
  {url: "/report", text: "Report"},
])
</script>

<style lang="scss">
  .sidebar {
    position: fixed;
    top: 0;
    /* rtl:raw:
    right: 0;
    */
    bottom: 0;
    /* rtl:remove */
    left: 0;
    z-index: 100; /* Behind the navbar */
    padding: 48px 0 0; /* Height of navbar */
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
  }

  @media (max-width: 767.98px) {
    .sidebar {
      top: 5rem;
    }
  }

  .sidebar-sticky {
    height: calc(100vh - 48px);
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  .sidebar .nav-link {
    font-weight: 500;
    color: #333;
  }

  .sidebar .nav-link .feather {
    margin-right: 4px;
    color: #727272;
  }

  .sidebar .nav-link.active,
  .sidebar .nav-link.router-link-active,
  .sidebar .nav-link.router-link-exact-active  {
    color: #2470dc;
  }

  .sidebar .nav-link:hover .feather,
  .sidebar .nav-link.active .feather {
    color: inherit;
  }

  .sidebar-heading {
    font-size: .75rem;
  }
</style>