<template>
    <div>
    
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data () {
        return {
            tasks: []
        }
    },

    mounted() {
        axios.get('http://fjolbraut.org/api/tasks', {
            params: {
                api_token: 'fXTKOL4rPrhKJanpYJqigSArVt0ImyM7stbaVHi0ToBaaOT2Iqpz3Aw0th8i'
            }
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
}
</script>

<style lang="scss">
    @import "~bulma/bulma";

</style>
