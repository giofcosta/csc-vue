<template>
    <div class="card">
        <div class="card-header">
            Address
        </div>
        <div class="card-body">
            <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="15">
                <Marker :options="{ position: center }" />
            </GoogleMap>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
const center = { lat: 40.689247, lng: -74.044502 }
const apiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
console.log(apiKey)
</script>