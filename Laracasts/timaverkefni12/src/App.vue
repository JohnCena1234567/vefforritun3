<template>
    <div class="center">
        <input class="input is-danger is-large" type="text" v-bind:value="price" v-model="price">
        <div v-for="petrol in sorted_petrols">
            <div id="box">
            <p class="title" v-text="petrol.company"></p>
            <p class="subtitle" v-text="petrol.name"></p>
            <p>Bensín {{ petrol.bensin95 }} kr. / Afsláttur {{ petrol.bensin95_discount }} kr.</p>
            <p>Dísel {{ petrol.diesel }} kr. / Afsláttur {{ petrol.diesel_discount }} kr.</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            petrols: [],
            price: 180
        };
    },

    mounted() {
        var self = this;
        axios.get('http://apis.is/petrol')
            .then(function(response) {
                self.petrols = response.data.results;
            })
            .catch(function(errors) {
                console.log(errors);
            });
    },

    computed: {   
        sorted_petrols() {
            var self = this;
            var sorted = this.petrols.sort(function (a, b) {
                return a.bensin95 - b.bensin95;
            });

            sorted = sorted.filter(function(petrol) {
                return petrol.bensin95 < self.price;
            });

            return sorted;
        }
    }
}
</script>

<style lang="scss">
    @import "~bulma/bulma";

    body {
        padding: 20px;
        background-color: #000000;
        text-align: center;
        color: white;
    }

    #box {
        border: 1px solid;
        border-radius: 100px;   
        margin: 15px;
        padding: 15px;
        width: 350px;
    }

    .center {
        margin: auto;
        width: 380px;
    }

    .title {
        color: white;
    }

    .subtitle {
        color: white;
    }
    </style>
