<template>
  <div id="app">
    <v-card flat>
      <v-toolbar dense>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link class="links nav-link" to="/">Laravel</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <router-link class="links nav-link" to="login">Login</router-link>
        <router-link class="links nav-link" to="register">Register</router-link>
      </v-toolbar>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>
<style>
a.links.nav-link {
  color: #636b6f;
  padding: 0 25px;
  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
  text-transform: uppercase;
}
</style>
