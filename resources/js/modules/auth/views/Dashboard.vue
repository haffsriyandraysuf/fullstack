<template>
  <div>
    <h1>Hello</h1>
    <ul>
      <li>
        <a href="#" @click="logout">Logout</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
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
