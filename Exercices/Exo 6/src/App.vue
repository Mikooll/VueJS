<template>
    <div class="container">
        <app-header></app-header>
        <hr />
        <div class="row">
            <app-servers></app-servers>
            <app-server-status></app-server-status>
        </div>
        <hr />
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Servers from "./components/Server/Servers.vue";
    import Header from "./components/Shared/Header.vue";
    import Footer from "./components/Shared/Footer.vue";
    import ServerStatus from "./components/Server/ServerStatus.vue";

    export default {
        components: {
            "app-servers": Servers,
            "app-header": Header,
            "app-footer": Footer,
            "app-server-status": ServerStatus,
        },
    };
</script>

<style></style>