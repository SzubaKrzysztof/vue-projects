<template>
  <div class="text-center">
    <h2 class="text-3xl font-bold">{{text}}</h2>
    <div class="text-ext mt-t mb-10">
    {{timestamp}}
    </div>
  </div>
</template>

<script>
import moment from "moment"

export default {
    name: 'DataTitle',
    props: ['text', 'dataDate'],
    
       
    computed:{
        timestamp(){
            return moment(this.dataDate).format('YYYY-MM-DD, h:mm:ss a')
        },
    },
}
</script>

