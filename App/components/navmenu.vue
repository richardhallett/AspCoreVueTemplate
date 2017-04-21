<template>
    <div class="main-nav">
        <ul>
            <li>
                <router-link to="/" :exact="true">
                    <span></span> Home
                </router-link>
            </li>
            <li>
                <router-link to="/counter">
                    <span></span> Counter
                </router-link>
            </li>
            <li>
                <router-link to="/fetchdata">
                    <span></span> Fetch data
                </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";

@Component
export default class NavMenu extends Vue {

}
</script>
