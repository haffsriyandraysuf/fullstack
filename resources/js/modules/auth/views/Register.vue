<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form @submit.prevent="register">
                  <v-text-field
                    v-model="form.name"
                    label="Enter your name"
                    name="Name"
                    prepend-icon="fas fa-user-alt"
                    type="text"
                    required
                  />
                  <v-text-field
                    v-model="form.email"
                    label="Enter your email"
                    name="Email"
                    prepend-icon="fas fa-envelope"
                    type="text"
                    required
                  />
                  <v-text-field
                    v-model="form.password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="fa fa-lock"
                    type="password"
                    required
                  />
                  <v-text-field
                    v-model="form.confirm"
                    id="confirm"
                    label="Re-type Password"
                    name="confirm"
                    prepend-icon="fa fa-key"
                    type="password"
                    required
                  />
                  <v-card-actions>
                    <v-btn block color="primary" type="submit">Create</v-btn>
                  </v-card-actions>
                  <v-card-text>
                    <router-link to="/login">Already have an account? Login!</router-link>
                  </v-card-text>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import AuthService from "../services";
export default {
  name: "register",
  components: {},
  data: () => ({
    form: {
      name: "",
      email: "",
      password: "",
      confirm: ""
    }
  }),
  methods: {
    register() {
      let data = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        confirm: this.form.confirm
      };

      AuthService.register(data)
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
