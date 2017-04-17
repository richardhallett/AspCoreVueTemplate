<template>
    <div id='app' class="container-fluid">
        <div class="row">
            <div class="col-sm-3">
                <menu-component />
            </div>
            <div class="col-sm-9">
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