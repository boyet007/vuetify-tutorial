<template>
    <v-dialog max-width="600" v-model="dialog">
        <v-btn flat slot="activator" class="warning">Add new project</v-btn>
        <v-card>
            <v-card-title>
                <h2>Add a New Project</h2>
            </v-card-title>
            <v-card-text>
                <v-form ref="form" class="px-3">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" :rules="inputRules" v-model="content" prepend-icon="edit"></v-textarea>
                    
                    <v-menu>
                        <v-text-field :rules="inputRules" :value="formattedDate" slot="activator" label="Due Date" prepend-icon="date_range"></v-text-field>
                        <v-date-picker  v-model="due"></v-date-picker>
                    </v-menu>
                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0" :loading="loading" @click="submit">Add project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import format from 'date-fns/format'
import db from '@/fb'

export default {    
    data() {
        return {
            title: '',
            content: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit() {
            if(this.$refs.form.validate()) {
                this.loading = true

                const project = {
                    title: this.title,
                    content: this.content,
                    due: format(this.due, 'Do MMM YYYY'),
                    person: 'The Net Ninja',
                    status: 'ongoing'
                } 

                db.collection('projects').add(project).then(() => {
                    this.loading=false
                    this.dialog=false
                    this.$emit('projectAdded')
                })
            } 
        }
    },
    computed: {
        formattedDate() {
            return this.due ? format(this.due, 'Do MMM YYYY'): ''
        }
    }
    
}
</script>