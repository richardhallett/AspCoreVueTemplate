<template>
    <div class="main-nav">
        <ul class="nav navbar-nav">
            <li>
                <router-link to="/" :exact="true">
                    <span class="glyphicon glyphicon-home"></span> Home
                </router-link>
            </li>
            <li>
                <router-link to="/counter">
                    <span class="glyphicon glyphicon-education"></span> Counter
                </router-link>
            </li>
            <li>
                <router-link to="/fetchdata">
                    <span class="glyphicon glyphicon-th-list"></span> Fetch data
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
