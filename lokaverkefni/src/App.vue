<template>
    <div>
        <div class="column is-half is-offset-one-quarter">
            <div class="field is-grouped">
                <p class="control is-expanded">
                    <input class="input is-primary" type="text" v-model="title">
                </p>
                <p class="control">
                    <a class="button is-primary is-outlined" @click="addTask">
                     Búa Til
                    </a>
                </p>
            </div>
        </div>

        <div class="column is-half is-offset-one-quarter">
            <table class="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>Staða</th>
                        <th>Verkefni</th>
                        <th>Búið til</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" :key="task.id">
                        <td v-if="task.completed == false">
                            <a href="#" @click="completeTask(task)">
                                <i class="fa fa-circle-thin" aria-hidden="true"></i>
                            </a>
                        </td>
                        <td v-if="task.completed == true">
                            <a href="#" @click="completeTask(task)">
                                <i class="fa fa-check-circle" aria-hidden="true"></i>
                            </a>
                        </td>
                        <td v-if="task.completed == true"><strike>{{ task.title }}</strike></td>
                        <td v-if="task.completed == false">{{ task.title }}</td>
                        <td>{{ task.created }}</td>
                        <td>
                            <a class="button is-danger is-outlined pull-right" @click="removeTask(task)">Eyða</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            tasks: [],
            title: ''
        };
    },

    mounted() {
        var self = this;
        axios.get('http://fjolbraut.org/api/tasks', {
            params: {
                api_token: 'fXTKOL4rPrhKJanpYJqigSArVt0ImyM7stbaVHi0ToBaaOT2Iqpz3Aw0th8i'
            }
        })
        .then(function(response) {
            self.tasks = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },

    methods: {
        addTask() {
            axios.post('http://fjolbraut.org/api/tasks?api_token=fXTKOL4rPrhKJanpYJqigSArVt0ImyM7stbaVHi0ToBaaOT2Iqpz3Aw0th8i', {
                title: this.title
            })
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            this.title = '';

            setTimeout(function() {
                window.location.reload();
            }, 100);
        },

        completeTask(task) {
            var id = task.id;

            axios.post('http://fjolbraut.org/api/tasks/' + id + '/status?api_token=fXTKOL4rPrhKJanpYJqigSArVt0ImyM7stbaVHi0ToBaaOT2Iqpz3Aw0th8i')
            .then(function(response) {
                console.log(response);
            })
            .catch(function(error) {
                console.log(error);
            });

            setTimeout(function() {
                window.location.reload();
            }, 100);
        },

        removeTask: function(task) {
            var index = this.tasks.indexOf(task);
            this.tasks.splice(index, 1);
        }
    }
}
</script>

<style lang="scss">
    @import "~bulma/bulma";

</style>
