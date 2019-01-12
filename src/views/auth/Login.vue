<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4 lg4>
        <v-card class="elevation-1 pa-3">
          <v-form>
            <v-card-text>
              <div class="layout column align-center">
                <h1 class="flex my-4 primary--text text-xs-center">Login</h1>
              </div>
              <v-text-field
                append-icon="person"
                name="login"
                label="Login"
                type="text"
                v-model="form.email"
              ></v-text-field>
              <v-text-field
                append-icon="lock"
                name="password"
                label="Password"
                id="password"
                type="password"
                v-model="form.password"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-flex xs8 px-2>
                <router-link :to="'/password/reset'" active-class="active">
                  <a>Olvide la contrase&ntilde;a</a>
                </router-link>
              </v-flex>
              <v-flex xs4 text-xs-right>
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-flex>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      form: {
        email: "",
        password: ""
      },
      errors: {}
    };
  }
};
</script>

<style>
</style>
