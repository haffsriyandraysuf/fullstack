<template>
  <div id="app">
    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <i class="fas fa-bars fa-lg"></i>
      </v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <!-- <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="fas fa-search"
        label="Search"
        class="hidden-sm-and-down"
      />-->
      <v-spacer />
      <a href="#" class="signout nav-link" @click="signout">Sign Out</a>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template v-for="item in items">
          <v-row v-if="item.heading" :key="item.heading" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-center">
              <a href="#!" class="body-2 black--text">EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              class="nav-link"
              :to="child.route"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ child.text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else :key="item.text" :to="item.route" class="nav-link">
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    drawer: null,
    items: [
      {
        icon: "fas fa-tachometer-alt",
        text: "Dashboard",
        route: "/dashboard"
      },
      {
        icon: "fas fa-address-book",
        "icon-alt": "fas fa-address-book",
        text: "Label Waki",
        children: [
          { icon: "fas fa-address-books", text: "Price", route: "/price" }
        ]
      },
      {
        icon: "fas fa-angle-up",
        "icon-alt": "fas fa-angle-down",
        text: "Labels",
        model: true,
        children: [{ icon: "fas fa-plus", text: "Create label" }]
      },
      {
        icon: "fas fa-angle-up",
        "icon-alt": "fas fa-angle-down",
        text: "More",
        model: false,
        children: [
          { text: "Import" },
          { text: "Export" },
          { text: "Print" },
          { text: "Undo changes" },
          { text: "Other contacts" }
        ]
      },
      { icon: "fas fa-cog", text: "Settings" }
    ]
  }),
  methods: {
    ...mapActions({
      logOut: "auth/logout"
    }),
    signout() {
      this.logOut().then(() => {
        this.$router.replace({
          name: "welcome"
        });
      });
    }
  }
};
</script>

<style>
a.signout.nav-link {
  color: #fff !important;
  padding: 0 25px;
  font-family: "Nunito", sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  text-decoration: none;
}
</style>
