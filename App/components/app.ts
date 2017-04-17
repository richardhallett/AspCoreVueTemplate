import Vue from 'vue';
import Component from "vue-class-component";
import NavMenu from './navmenu.vue'

@Component({
     components: {
         MenuComponent: NavMenu
    }
})

export default class App extends Vue {
}
