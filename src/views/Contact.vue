<template>
  <section>
    <template v-if="flagSearch === false">
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm7>
            <v-card class="elevation-12">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <form v-loading @submit.prevent="onSubmit" id="contact-form">
                <v-card-text>
                  <v-text-field
                    v-model="form.name"
                    :error-messages="nameErrors"
                    label="Nombre"
                    @input="$v.form.name.$touch()"
                    @blur="$v.form.name.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    @input="$v.form.email.$touch()"
                    @blur="$v.form.email.$touch()"
                  ></v-text-field>
                  <v-text-field
                    v-model="form.subject"
                    :error-messages="subjectErrors"
                    label="Asunto"
                    @input="$v.form.subject.$touch()"
                    @blur="$v.form.subject.$touch()"
                  ></v-text-field>
                  <v-textarea
                    v-model="form.message"
                    auto-grow
                    box
                    color="deep-purple"
                    label="Mensaje"
                    rows="1"
                    @input="$v.form.message.$touch()"
                    @blur="$v.form.message.$touch()"
                  ></v-textarea>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" type="submit" form="contact-form">Enviar</v-btn>
                </v-card-actions>
              </form>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>Thanks for your interest in Botanica El Poder de Orula. For more information, get in touch with us. We look forward to hearing from you.</v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      251e E 119th St
                      New York, New York County 10035
                      USA
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>botanicaelpoderdeorula@gmail.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <template v-else>
      <search-result></search-result>
    </template>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, maxLength } from "vuelidate/lib/validators";
import SearchResult from "@/components/search/SearchResult";
import { mapActions, mapState } from "vuex";

export default {
  name: "contact",
  mixins: [validationMixin],
  validations: {
    form: {
      name: { required, name },
      email: { required, email },
      subject: { required },
      message: { required }
    }
  },
  data() {
    return {
      flagSearch: false,
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },

      errors: {},

    };
  },
  components: {
    SearchResult
  },
  computed: {
     productsList() {
      if (this.$store.state.userInfo.hasSearched) {
        this.flagSearch = true;
      }else {
        this.flagSearch = false;
      }
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Nombre no debe tener mas de 10 caracteres.");
      !this.$v.name.required && errors.push("Nombre requerido.");

      return errors;
    },
    subjectErrors() {
      const errors = [];
      if (!this.$v.form.subject.$dirty) return errors;
      !this.$v.form.subject.required && errors.push("Asunto requerido.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.form.email.$dirty) return errors;
      !this.$v.form.email.email && errors.push("Debe ser un e-mail valido.");
      !this.$v.form.email.required && errors.push("E-mail es requerido.");
      return errors;
    },
    messageErrors() {
      const errors = [];
      if (!this.$v.form.message.$dirty) return errors;
      !this.$v.form.message.required && errors.push("Mensaje requerido.");
      return errors;
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        alert("All fields are not valid");
      } else {
        alert("ok");
      }
    }
  }
};
</script>

