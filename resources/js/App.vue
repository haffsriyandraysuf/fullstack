<template>
  <div id="ap">
    <template v-if="authenticated">
      <v-app>
        <NavbarDashboard />
        <router-view />
      </v-app>
    </template>
    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavbarDashboard from "./components/NavbarDashboard";
export default {
  components: {
    NavbarDashboard
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  }
};
</script>
