<template>
    <div>
        <b-list-group v-for="(task, i) in tasks" :key="task.id"  class="card">
            <b-list-group-item href="#" active class="flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1"><b>{{task.dateTask}}</b><br>{{task.title}}</h5>
                    <small>{{task.date}}</small>
                </div>

                <p class="mb-1">
                    {{task.text}}
                </p>

                <b-button variant="danger" class="btn" @click="rmTask(i)">Delete</b-button>
            </b-list-group-item>

        </b-list-group>
    </div>
</template>

<script>
export default {
    computed: {
        tasks(){
            return this.$store.state.tasks;
        }

    },
    methods: {
        rmTask(i){
            this.tasks.splice(i, 1);
        }
    }
}
</script>

<style scoped>
    .btn{
        display: grid;
        margin-left: 92.5%;
    }
    .card{
        width: 80%;
        margin: 15px auto;
    }
</style>