<template>
  
  <v-app id="inspire">
    <v-navigation-drawer
      
      v-model="drawer"
      app
    >
      <div v-if="user">
        <Profile />
      </div>
      <div v-else>
        <Login />
      </div>
      
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
        <v-main>
          <router-view></router-view>
        </v-main>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import Profile from './components/Profile.vue';
  import Login from './components/Login.vue';
  import { getAuth, onAuthStateChanged } from "firebase/auth";

  export default {
    components: {
      Profile,
      Login
    },
    data: () => ({
      user: null,
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
      methods:{
      }
    }),
    created(){
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    }
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