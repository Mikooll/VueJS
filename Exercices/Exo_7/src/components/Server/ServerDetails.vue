<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server Details are currently not updated</p>
    </div>

</template>

<script>
    import { serverBus } from '../../main';
    export default {
        
        created() {
            serverBus.$on('serverSelected', (server) => {
                
            })
        },
    }
</script>

<style>

</style>
