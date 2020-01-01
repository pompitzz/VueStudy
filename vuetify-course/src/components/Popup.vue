<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{on}">
            <v-btn text class="cyan accent-4 white--text" v-on="on">Add new project</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder-marker"
                                  :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil"
                                :rules="inputRules"></v-textarea>

                    <v-menu>
                        <template v-slot:activator="{on}">
                            <v-row>
                                <v-col cols="6">
                                    <v-text-field slot="activator" label="Due date"
                                                  prepend-icon="mdi-calendar-month"
                                                  v-on="on" :value="formattedDate"
                                                  class=""></v-text-field>
                                </v-col>
                            </v-row>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                    <div class="text-center">
                        <v-btn text class="cyan accent-4 white--text mx-0 mt-3" @click="submit"
                               :loading="loading">
                            Add Project
                        </v-btn>
                    </div>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
    import format from 'date-fns/format'
    import parseISO from 'date-fns/parseISO'

    export default {
        name: "Popup",
        data() {
            return {
                title: '',
                content: '',
                due: null,
                loading: false,
                dialog: false,
                inputRules: [
                    v => v.length >= 3 || 'Minimum length is 3 characters',
                ],
            }
        },
        methods: {
            submit() {
                if (this.$refs.form.validate()) {
                    this.loading = true;

                    setTimeout(() => {
                        console.log(this.title + this.content);
                        this.title = '';
                        this.content = '';
                        this.loading = false;
                        this.dialog = false;
                        this.$emit('projectAdded')


                    }, 2000)
                }
            }
        },
        computed: {
            formattedDate() {
                return this.due ? format(parseISO(this.due), 'MM-dd-yyyy') : '';
            },
        }

    }
</script>

<style scoped>

</style>