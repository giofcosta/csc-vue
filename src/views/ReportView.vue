<template>
    <div id="report">
        <vue-pdf-embed :source="pdfSource" />
    </div>
</template>

<script setup lang="ts">
import VuePdfEmbed from 'vue-pdf-embed';
import { ref } from 'vue';

const pdfSource = ref("https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf")
</script>


<style sco lang="scss">
#report {
    padding: 16px;
    background-color: #ccc;
    width: 100%;
    height: 100%;
}

.vue-pdf-embed>div {
    margin-bottom: 8px;
    box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    height: 100%;
}
</style>