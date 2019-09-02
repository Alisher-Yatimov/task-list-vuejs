<template>
    <div class="header">
        <h1>{{headLine}}</h1>
        <b-button class="btn" variant="success" @click='addTask'>Add Task</b-button>
    </div>
</template>

<script>
export default {
    computed: {
        headLine(){
            return this.$store.state.headLine
        }
    },
    methods:{
        addTask(){
            this.$store.commit('transition', 'add');
        }
    }
}
</script>

<style scoped>
    .header{
        height: 100px;
        background: rgb(16, 2, 78);
        color: #fff;
        font-family: 'roboto';
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    .header > h1{
        align-self: center;
        margin-left: 15%;
    }
    .btn{
        height: 50px;
        width: 100px;
        align-self: center;
        justify-self: end;
        margin-right: 15%;
    }
</style>