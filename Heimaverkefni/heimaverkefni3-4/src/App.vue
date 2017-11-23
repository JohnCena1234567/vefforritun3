<template>
    <div>
        <div class="column">
            <div class="column is-1 is-offset-3">
                <p class="subtitle is-5" style="color: #D3D3D3;">Filter</p>
            </div>
        
            <div class="control has-text-centered">
              <label class="radio">
                <input type="radio" value="Allt" v-model="checkedPetrol" name="petrolFilter">
                Allt
              </label>
              <label class="radio">
                <input type="radio" value="Atlantsolía" v-model="checkedPetrol" name="petrolFilter">
                Atlantsolía
              </label>
              <label class="radio">
                <input type="radio" value="Costco Iceland" v-model="checkedPetrol" name="petrolFilter">
                Costco Iceland
              </label>
              <label class="radio">
                <input type="radio" value="Dælan" v-model="checkedPetrol" name="petrolFilter">
                Dælan
              </label>
              <label class="radio">
                <input type="radio" value="N1" v-model="checkedPetrol" name="petrolFilter">
                N1
              </label>
              <label class="radio">
                <input type="radio" value="Olís" v-model="checkedPetrol" name="petrolFilter">
                Olís
              </label>
            </div>
        </div>

        <div class="control has-text-centered">
            <label class="radio">
                <input type="radio" value="Orkan" v-model="checkedPetrol" name="petrolFilter">
                Orkan
            </label>
            <label class="radio">
                <input type="radio" value="Orkan X" v-model="checkedPetrol" name="petrolFilter">
                Orkan X
            </label>
            <label class="radio">
                <input type="radio" value="ÓB" v-model="checkedPetrol" name="petrolFilter">
                ÓB
            </label>
            <label class="radio">
                <input type="radio" value="Skeljungur" v-model="checkedPetrol" name="petrolFilter">
                Skeljungur
            </label>
        </div>

        <div class="column is-2 is-offset-3">
            <p class="subtitle is-4">Fjöldi stöðva: {{ sorted_petrols.length}}</p>
        </div>

        <div v-for="petrol in sorted_petrols">
            <div class="column is-6 is-offset-3">
                <div class="tile is-parent hover">
                    <div class="tile is-child box">
                        <h1><span class="subtitle is-4">{{ petrol.company }}</span> <small class="is-pulled-right">Bensín - {{ petrol.bensin95 }}</small></h1>
                        <br>
                        <h1><span class="subtitle is-5">{{ petrol.name }}</span> <small class="is-pulled-right">Dísel - {{ petrol.diesel }}</small></h1> 
                    </div>
                </div>
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
            checkedPetrol: 'Allt'
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
            var category = this.checkedPetrol;

            var sorted = this.petrols.sort(function (a, b) {
                return a.bensin95 - b.bensin95;
            });

            if(category === 'Allt') {
                return sorted;
            }
            else {
                return sorted.filter(function(petrols) {
                    return petrols.company === category;
                }); 
            }
        } 
    }
}
</script>

<style lang="scss">
    @import "~bulma/bulma";

    .hover:hover small{
        color: #808080;
    }

    .hover small{
        color: #DCDCDC;
    }
</style>
