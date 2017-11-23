<template>
    <div id="app">
        <div v-for="concert in concerts">
            <h3 v-text="concert.eventDateName"></h3>
            <h5 v-text="concert.eventHallName"></h5>
            <img :src="concert.imageSource">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            concerts: []
        };
    },

    mounted() {
        var self = this;
        axios.get('http://apis.is/concerts')
            .then(function(response) {
                self.concerts = response.data.results;
            })
            .catch(function(errors) {
                console.log(errors);
            });
    }
}
</script>

<style lang="scss">
    @import "~bulma/bulma";

    body {
        padding: 20px;
    }

    .subtitle {
        color: #d3d3d3;
    }
</style>
