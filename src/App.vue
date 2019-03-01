<template>
  <v-app class="lighten-4 blue">
    <v-content>
      <NavBar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: { NavBar },
  data () {
    return {
      //
    }
  }
}
</script>
