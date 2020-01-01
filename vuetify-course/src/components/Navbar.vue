<template>
    <nav>

        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
            <span>Awesome! You added a new project.</span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>

        <v-app-bar flat app>
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"/>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>Ninza</span>
            </v-toolbar-title>
            <v-spacer/>

            <!-- dropdown menu -->
            <v-menu offset-y>
                <template v-slot:activator="{on}">
                    <v-btn
                            text
                            outlined
                            color="grey"
                            v-on="on">
                        <v-icon left>mdi-arrow-down</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list class="my-menu">
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-title>{{link.text}}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>


            <v-btn text outlined color="grey" class="ml-3">
                <span>Sing Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer app v-model="drawer" class="purple lighten-3">
            <v-col class="mt-5 text-center">
                <v-avatar size="100">
                    <img src="/avatar-1.png" alt="avatar"/>
                </v-avatar>
                <h3 class="white--text mt-1">
                    The Net Ninza
                </h3>
            </v-col>
            <v-col class="text-center mt-3 mb-3">
                <Popup @projectAdded="snackbar = true"/>
            </v-col>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route" class="purple lighten-3 ">
                    <v-list-item-action>
                        <v-icon color="white">{{link.icon}}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content class="white--text">
                        {{link.text}}
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
    import Popup from "./Popup";
    export default {
        name: "Navbar",
        data() {
            return {
                drawer: false,
                snackbar: false,
                links: [
                    {icon: 'mdi-view-dashboard-variant', text: 'Dashboard', route: '/'},
                    {icon: 'mdi-folder-marker', text: 'My Projects', route: '/projects'},
                    {icon: 'mdi-human-male', text: 'Team', route: '/team'}
                ]
            }
        },
        components:{
            Popup
        }
    }
</script>

<style scoped>
</style>