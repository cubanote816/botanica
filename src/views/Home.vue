<template>
  <div>
    <template v-if="flagSearch === false">
      <v-carousel hide-delimiters>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      <v-card flat color="green">
        <v-card-text>
          <div
            color="green"
            class="display-1 text-xs-center white--text"
          >Bienvenidos al Poder de Orula</div>
        </v-card-text>
      </v-card>
      <!-- about -->
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12 sm7>
              <v-card flat color="grey lighten-5">
                <v-card-text>
                  <span class="subheading">Estamos especializados en consulta y guia espiritual.
                    <br>Hacemos todo tipo de trabajo religioso, esto incluye lo siguiente:
                  </span>
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
                  <p
                    class="title"
                  >En nuestra tienda tenemos una selección amplia de aceites, estatuas religiosas, inciensos, plantas, velas y mucho mas.</p>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4 offset-sm1>
              <v-img src="./img/botanica.jpg" contain></v-img>
            </v-flex>
          </v-layout>
        </v-container>
      </section>
      <!-- end about -->
      <!-- Services section -->
      <section>
        <v-flex xs12>
          <div class="display-1 text-xs-center">Nuestros Servicios</div>
        </v-flex>
        <v-layout row wrap>
          <v-flex d-flex xs12 sm6 md3 pa-4>
            <v-card class="black--text" elevation-1>
              <v-responsive class="pt-2 text-xs-center">
                <!-- <v-img
              :src="item.productImage"
              contain
              :aspect-ratio="16/9"
              @click.prevent="navigateProductDetail(item)"
                ></v-img>-->
                <p>image</p>
              </v-responsive>
              <v-card-title>
                <div>
                  <span class="title">Limpias</span>
                  <p
                    class="caption font-weight-light grey--text"
                  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem? Voluptas perspiciatis at, ratione, nulla ut eaque repudiandae consequuntur vitae inventore cumque excepturi reiciendis accusantium dolorum amet esse, corrupti sit!</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3 pa-4>
            <v-card class="black--text">
              <v-responsive class="pt-2 text-xs-center">
                <!-- <v-img
              :src="item.productImage"
              contain
              :aspect-ratio="16/9"
              @click.prevent="navigateProductDetail(item)"
                ></v-img>-->
                <p>image</p>
              </v-responsive>
              <v-card-title>
                <div>
                  <span class="title">Preparaciones especificas</span>
                  <p
                    class="caption font-weight-light grey--text"
                  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem? Voluptas perspiciatis at, ratione, nulla ut eaque repudiandae consequuntur vitae inventore cumque excepturi reiciendis accusantium dolorum amet esse, corrupti sit!</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3 pa-4>
            <v-card class="black--text">
              <v-responsive class="pt-2 text-xs-center">
                <!-- <v-img
              :src="item.productImage"
              contain
              :aspect-ratio="16/9"
              @click.prevent="navigateProductDetail(item)"
                ></v-img>-->
                <p>image</p>
              </v-responsive>
              <v-card-title>
                <div>
                  <span class="title">Consultas Espirituales</span>
                  <p
                    class="caption font-weight-light grey--text"
                  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem? Voluptas perspiciatis at, ratione, nulla ut eaque repudiandae consequuntur vitae inventore cumque excepturi reiciendis accusantium dolorum amet esse, corrupti sit!</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 sm6 md3 pa-4>
            <v-card class="black--text">
              <v-responsive class="pt-2 text-xs-center">
                <!-- <v-img
              :src="item.productImage"
              contain
              :aspect-ratio="16/9"
              @click.prevent="navigateProductDetail(item)"
                ></v-img>-->
                <p>image</p>
              </v-responsive>
              <v-card-title>
                <div>
                  <span class="title">Adamas</span>
                  <p class="caption font-weight-light grey--text">Amuletos</p>
                  <p class="caption font-weight-light grey--text">Talismanes</p>
                  <p class="caption font-weight-light grey--text">Plantas Medicinales</p>
                  <p class="caption font-weight-light grey--text">Amuletos</p>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </section>
      <!-- end Services section -->
      <!-- testimonials -->
      <section>
        <v-flex xs12 class="pt-5 pb-3">
          <div class="display-1 text-xs-center">Testimonios</div>
        </v-flex>
        <v-parallax src="./img/testimonials.png" height="380">
          <v-carousel hide-delimiters flat transparent>
            <v-carousel-item v-for="(slide, i) in testimonial" :key="i">
              <v-jumbotron dark>
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex>
                      <blockquote>
                        <p class="subheading text-xs-center">"{{ slide.content }}"</p>
                        <p class="caption font-weight-light text-xs-center">{{ slide.author }}</p>
                      </blockquote>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-jumbotron>
            </v-carousel-item>
          </v-carousel>
        </v-parallax>
      </section>
      <!-- end testimonials -->
      <!-- products -->
      <section>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12 sm4 class="my-3">
            <div class="text-xs-center">
              <div class="display-1 text-xs-center">Productos Mas Vendido</div>
              <span class="subheading">Cras facilisis mi vitae nunc</span>
            </div>
          </v-flex>
          <v-flex grid-list-md>
            <v-layout row wrap>
              <home-top-selling-products></home-top-selling-products>
            </v-layout>
          </v-flex>
          <!-- <v-flex xs12> -->
          <!-- <v-carousel hide-delimiters>
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
          </v-carousel>-->
          <!-- </v-flex> -->
        </v-layout>
      </section>
      <!-- end products -->
      <!-- mail -->
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12>
              <div class="display-1 text-xs-center">Mail us</div>
            </v-flex>
            <v-flex xs12 sm7 justify-center>
              <v-card class="elevation-12">
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
          </v-layout>
        </v-container>
      </section>
      <!-- end mail -->
      <!-- contact -->
      <section>
        <v-container grid-list-xl>
          <v-layout row wrap justify-center class="my-5">
            <v-flex xs12>
              <div class="display-1 text-xs-center">Contact us</div>
            </v-flex>
            <v-flex xs12 sm6 justify-center>
              <v-card class="elevation-12 text-xs-center">Maps</v-card>
            </v-flex>
            <v-flex xs12 sm6>
              <v-card flat color="grey-light-4">
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
                        <p>
                          251e E 119th St
                          New York, New York County 10035
                          USA
                        </p>
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
      <!-- end contact -->
    </template>
    <template v-else>
      <v-flex grid-list-md>
        <v-layout row wrap>
          <cat-products :products="productsList"></cat-products>
        </v-layout>
      </v-flex>
      <div class="section" v-if="productsList.length === 0 || productsList == undifined">
        <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs6 justify-center>
            <h1>Oops!</h1>
            <h2>{{ noProductLabel }}</h2>
          </v-flex>
        </v-layout>
      </v-container>
        
      </div>
    </template>
  </div>
</template>

<script>
import { getByTitle } from "@/components/products/filters/filters";
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
import CatProducts from "@/components/products/CatProducts.vue";
import HomeTopSellingProducts from "@/components/products/HomeTopSellingProducts.vue";
import { mapActions, mapGetters, mapStates } from "vuex";

// import { mapActions, mapState } from "vuex";

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
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem? Voluptas perspiciatis at, ratione, nulla ut eaque repudiandae...",
          author: "Juan"
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem? Voluptas perspiciatis at, ratione, nulla ut eaque repudiandae...",
          author: "Pepe"
        },
        {
          content:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, rem? Voluptas perspiciatis at, ratione, nulla ut eaque repudiandae...",
          author: "Carlos"
        }
      ],
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },

      errors: {},
      id: "",
      noProductLabel: "No product found",
      productsFiltered: [],
      flagSearch: false
    };
  },
  components: {
    HomeTopSellingProducts,
    CatProducts
  },
  computed: {
    ...mapGetters(["products"]),
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
    },
    productsList() {
      if (this.$store.state.userInfo.hasSearched) {
        this.flagSearch = true;
        return this.getProductByTitle();
      }else {
        this.flagSearch = false;
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log(process.env.VUE_APP_APICLIENT);
        alert("All fields are not valid");
      } else {
        alert("ok");
      }
    },
    ...mapActions(["fetchProducts"]),
    getProductByTitle() {
      let listOfProducts = this.products,
        titleSearched = this.$store.state.userInfo.productTitleSearched;
      return (this.productsFiltered = getByTitle(
        listOfProducts,
        titleSearched
      ));
    }
  },

  created() {
    this.loading = true;
    this.fetchProducts().then(() => {
      this.loading = false;
    });
  }
};
</script>
