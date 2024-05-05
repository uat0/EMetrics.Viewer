<template>
    <NavBar />
    <router-view></router-view>
</template>

<script>
onMounted(() => {
    
})
import { onMounted } from 'vue';
import NavBar from './components/NavBar.vue'
export default {
    components: { NavBar }
}
</script>

<style>
</style>