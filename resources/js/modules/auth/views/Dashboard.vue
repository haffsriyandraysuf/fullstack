<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">hello</v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "dashboard",
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  },
  methods: {
    ...mapActions({
      LogOut: "auth/logout"
    }),
    logout() {
      this.LogOut().then(() => {
        this.$router.replace({
          name: "welcome"
        });
      });
    }
  }
};
</script>

<style>
</style>
