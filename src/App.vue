<template>
  <v-app>
    <v-content class="mx-4 mb-4">
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
