<template>
    <div id='app'>
        <div>
            <div>
                <menu-component />
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import App from './app'
export default App
</script>

<style>
body {
    
}
</style>