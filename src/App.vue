<template>
  
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-card
        class="d-flex flex-column mx-auto"
        color="#DFE0F2"
        tile
        flat
      >
        
          <v-row 
            class="d-flex justify-end"
            no-gutters
          >
            <v-btn
              tile
              color="black"
              icon
            >
              <v-icon>{{ logoutIcon }}</v-icon>
            </v-btn>
          </v-row>
          <v-row 
            class = "d-flex justify-center"
            no-gutters
          >
            <v-avatar size="80">
              <img
                alt="user"
                src="https://i.pinimg.com/736x/7e/a5/91/7ea591287583ba3f6504ef9c7b77ee46.jpg"
              >
            </v-avatar>
          </v-row>
          <v-row 
            class = "d-flex justify-center"
            no-gutters
          >
            <h5 class="subtitle-1 black--text">Yichen</h5>
          </v-row>
          <v-row 
            class = "d-flex justify-center"
            no-gutters
          >
            <p class="caption black--text">Admin</p>
          </v-row>
        
      </v-card>
      <v-list shaped> <!--菜单-->
        <v-list>
          <!--Home-->
          <v-list-item
            :to="'/home'"
          >
            <v-list-item-title>
              Home
            </v-list-item-title>
          </v-list-item>
          <!--Home Done-->

          <!--Algorithm-->
          <v-list-group
            :value="true"
            no-action
          >
            <template v-slot:activator >  
                <v-list-item-title>
                  Algorithm
                </v-list-item-title> 
            </template>

            <v-list-item
              v-for="item in algorithmMenus"
              :key="item.title"
              :to="item.path"
              
            >
              <v-list-item-content >  
                <v-list-item-title>
                  {{item.title}}
                </v-list-item-title> 
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <!--Algorithm Done-->
          <!--About-->
          <v-list-item
            :to="'/about'"
          >
            <v-list-item-title>
              About
            </v-list-item-title>
          </v-list-item>
          <!--About Done-->
        </v-list>
      </v-list> <!--菜单完了-->
      <v-divider></v-divider>
    </v-navigation-drawer>

    <v-main style="padding: 0px;">
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-content>
          <router-view></router-view>
        </v-content>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import { mdiLogout } from '@mdi/js'
  export default {
    components: {
    },
    data: () => ({
      Sidebarcards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
      algorithmMenus:[
        {
          title: 'Binary Search', 
          path: '/binary-search',
        },
        {
          title: 'Algorithm - 2', 
          path: '/algorithm2',
        }
      ],
      logoutIcon: mdiLogout
    }),
  }
</script>
<style>
.v-main__wrap {
    background-color: #F6F7FB !important;
}
.theme--light.v-navigation-drawer:not(.v-navigation-drawer--floating) .v-navigation-drawer__border {
  background-color: transparent !important;
}
.logout_button{
  width: 150px!important;
}

</style>