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
                <ValidationObserver ref="form">
                  <v-form @submit.prevent="register">
                    <ValidationProvider
                      name="Name"
                      rules="required|alpha|min:3"
                      v-slot="{ errors }"
                    >
                      <v-text-field
                        v-model="form.name"
                        label="Enter your name"
                        prepend-icon="fas fa-user-alt"
                        type="text"
                        :error-messages="errors"
                      />
                    </ValidationProvider>
                    <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                      <v-text-field
                        v-model="form.email"
                        label="Enter your email"
                        prepend-icon="fas fa-envelope"
                        type="email"
                        :error-messages="errors"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      name="Password"
                      rules="required|min:6|alpha_num"
                      v-slot="{ errors }"
                      vid="confirmation"
                    >
                      <v-text-field
                        v-model="form.password"
                        id="password"
                        label="Password"
                        prepend-icon="fa fa-lock"
                        type="password"
                        :error-messages="errors"
                      />
                    </ValidationProvider>
                    <ValidationProvider
                      name="Confirm"
                      rules="required|confirmed:confirmation"
                      v-slot="{ errors }"
                    >
                      <v-text-field
                        v-model="form.confirm"
                        id="confirm"
                        label="Re-type Password"
                        prepend-icon="fa fa-key"
                        type="password"
                        :error-messages="errors"
                      />
                    </ValidationProvider>
                    <v-card-actions>
                      <v-btn block color="primary" type="submit">Create</v-btn>
                    </v-card-actions>
                    <v-card-text>
                      <router-link to="/login">Already have an account? Login!</router-link>
                    </v-card-text>
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

      if (this.$refs.form.validate()) {
        AuthService.register(data)
          .then(result => {
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  },
  mounted() {
    console.log("Component mounted.");
  }
};
</script>
