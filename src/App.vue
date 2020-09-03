<template>
  <v-app id="inspire">

    <v-navigation-drawer
        permanent
        app
        clipped
        color="primary"
    >
      <v-list-item to="/">
        <v-list-item-content>
          <v-list-item-title class="title white--text" style="text-align: center">
            CSGO PRO
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>

      <v-list class="my-6" style="color: #fff">
        <v-list-item
            v-for="item in items"
            :key="item.text"
            link
            class="px-6 py-1"
            :to="item.link"
            color="#1DA1F2"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>


      <template v-slot:append>
        <div class="text-center">
          <v-menu
              v-model="menu"
              :close-on-content-click="false"
              offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="pa-4">
                <v-btn
                    outlined
                    block
                    rounded
                    v-bind="attrs"
                    v-on="on"
                    class="pa-4"
                    style="text-transform: capitalize"
                >
                  <v-icon left>{{ mdiAccountOutline }}</v-icon>
                  Debanjan Barman
                </v-btn>
              </div>

            </template>

            <v-card outlined rounded elevation="8">
              <v-list color="primary">
                <v-list-item>
                  <v-list-item-avatar>
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                  </v-list-item-avatar>

                  <v-list-item-content>
                    <v-list-item-title>Debanjan Barman</v-list-item-title>
                    <v-list-item-subtitle>@DebanjanBarman</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>

              <v-list color="primary">
                <v-list-item @click="logOut">
                  <v-list-item-icon>
                    <v-icon>{{ mdiLogout }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title> Logout</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

            </v-card>
          </v-menu>
        </div>
      </template>

    </v-navigation-drawer>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import {mdiHomeOutline, mdiGamepadVariantOutline, mdiBellOutline, mdiAccountOutline, mdiLogout} from '@mdi/js'

export default {
  props: {
    source: String
  },
  components: {},
  data: () => ({
    drawer: null,
    items: [
      {
        icon: mdiHomeOutline,
        text: 'Home',
        link: '/'
      },
      {
        icon: mdiGamepadVariantOutline,
        text: 'Tournaments',
        link: '/matches'
      },
      {
        icon: mdiBellOutline,
        text: 'Notification',
        link: '/notification'
      }
    ],
    mdiAccountOutline,
    mdiLogout,
    menu: false,

  }),
  methods: {
    logOut() {
      console.log('logged out')
      this.menu = false
      if (this.$route.fullPath !== '/') this.$router.push('/')
    }
  },
  created() {
    this.$vuetify.theme.dark = true
  }
}
</script>
