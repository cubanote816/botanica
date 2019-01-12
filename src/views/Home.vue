<template>
  <div>
    <v-carousel hide-controls>
      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm7>
            <v-card class="elevation-0 transparent">
              <v-card-text>
                <h1>Botanica El Poder de Orula</h1>
                <h4>Se especializa en consulta y guia espiritual.
                  <br>Nosotros hacemos todo tipo de trabajo religioso, esto incluye lo siguiente:
                </h4>
                <v-list class="transparent">
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>CONSULTA</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>LIMPIEZA ESPIRITUAL</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>DIVINACION - PASADO, PRESENTE Y FUTURO</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>TAROT</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>
                      <v-list-tile-title>ASTROLOGIA</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </v-list>
                <h4>En nuestra tienda tenemos una selección amplia de aceites, estatuas religiosas, inciensos, plantas, velas y mucho mas.</h4>
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-img src="./img/botanica.jpg" contain ></v-img>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4 justify-center>
            <v-img src="./img/services.jpg" contain ></v-img>
          </v-flex>
          <v-flex xs12 sm7 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Nuestros Servicios</div>
              </v-card-title>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Limpias</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Amuletos</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Talismanes</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Plantas Medicinales</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Clases</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Consultas Espirituales</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Preparaciones especificas</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <section>
      <v-parallax src="./img/section.jpg" height="380">
        <div class="headline white--text mb-3 text-xs-center">Testimonios</div>
        <v-carousel>
          <v-carousel-item
            v-for="(item,i) in testimonial"
            :key="i"
            v-text="item.content"
            reverse-transition="fade"
            transition="fade"
          ></v-carousel-item>
        </v-carousel>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Nuestros Productos Mas Vendido</h2>
            <span class="subheading">Cras facilisis mi vitae nunc</span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(item,i) in 5"
              :key="i"
              reverse-transition="fade"
              transition="fade"
            >
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Material Design</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Fast development</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Completely Open Sourced</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </section>

    <section>
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
    </section>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, maxLength } from "vuelidate/lib/validators";
import { mapActions, mapState } from "vuex";

export default {
  name: "home",
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
      items: [
        {
          src: "./img/banner/01.jpg"
        },
        {
          src: "./img/banner/02.jpg"
        },
        {
          src: "./img/banner/03.jpg"
        }
      ],
      testimonial: [
        {
          content: "Perfect",
          author: "Juan"
        },
        {
          content: "Super",
          author: "Pepe"
        },
        {
          content: "Increible",
          author: "Carlos"
        }
      ],
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },

      errors: {}
    };
  },
  computed: {
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
