<template>
  <v-app id="inspire">
    <Navbar />
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <ValidationObserver ref="form">
                  <v-form @submit.prevent="login">
                    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                      <v-text-field
                        v-model="form.email"
                        label="Enter your email"
                        prepend-icon="fas fa-envelope"
                        :error-messages="errors"
                        type="text"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      name="Password"
                      rules="required|min:6|alpha_num"
                      v-slot="{ errors }"
                    >
                      <v-text-field
                        id="password"
                        v-model="form.password"
                        label="Password"
                        prepend-icon="fa fa-lock"
                        type="password"
                        :error-messages="errors"
                      />
                    </ValidationProvider>
                    <v-card-actions>
                      <v-btn block color="primary" type="submit">Login</v-btn>
                    </v-card-actions>
                    <!-- <v-card-text>
                      New to this website?
                      <router-link to="/register">Create an account.</router-link>
                    </v-card-text>-->
                  </v-form>
                </ValidationObserver>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "../../../components/Navbar";
import { mapActions } from "vuex";
export default {
  name: "login",
  components: {
    Navbar
  },
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    ...mapActions({
      signIn: "auth/signIn"
    }),
    login() {
      if (this.$refs.form.validate()) {
        this.signIn(this.form).then(() => {
          this.$router.replace({
            name: "dashboard"
          });
        });
      }
    }
  }
};
</script>
