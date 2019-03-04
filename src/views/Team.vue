<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>
    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in teams" :key="person.name">
          <v-card flat class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="black">
                <img :src="person.avatar"  >
              </v-avatar>
              
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        { name: 'Philip', role: 'Web Developer', avatar: '/images/avatar05.png'},
        { name: 'Rita', role: 'Web Design', avatar: '/images/avatar02.png'},
        { name: 'Marko', role: 'Database Developer', avatar: '/images/avatar04.png'},
        { name: 'Herry', role: 'Web Developer', avatar: '/images/avatar04.png'},
        { name: 'Sisca', role: 'Account Excecutive', avatar: '/images/avatar01.png'},
        { name: 'Wynne', role: 'UI Developer', avatar: '/images/avatar03.png'},
      ]
    }
  }
}
</script>