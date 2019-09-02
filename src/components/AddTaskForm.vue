<template>
    <div>
        <h1>Add Task:</h1>
        <div class="inp">
            <label> enter task name:</label><input type = "text" v-model="titleTask">
            <label>enter details:</label><input type="text" v-model="textTask">
            <div class="date d-flex">  	
            <input type="date" class="form-control col-md-3" id="date" name="date" placeholder="Дата" v-model="dateTask" required>
            <input type="time" class="form-control col-md-2" v-model="timeTask">
            <b-button variant="danger" @click="returnToCard">Cencel</b-button>
            <b-button variant="success" @click="addTask">Add</b-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        returnToCard(){
            this.$store.commit('transition', 'view');
        },
        addTask(){
            this.$store.commit('addNewTask', {
                id: this.$store.state.tasks.length + 1,
                title: this.titleTask,
                text: this.textTask,
                dateAdd: this.addDate,
                dateTask: `${this.dateTask}, ${this.timeTask}`
            });
            this.returnToCard();
        }
    },
    computed: {
        addDate(){
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, 0);
            const mm = String(today.getMonth()).padStart(2, 0);
            const yyyy = today.getFullYear();
            const hour = String(today.getHours()).padStart(2, 0);
            const minute = String(today.getMinutes()).padStart(2, 0);
            return `${hour}:${minute}, ${dd}-${mm}-${yyyy}`
        }
    }
}
</script>

<style scoped>
    h1{
        text-align: center;
    }
    .inp{
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
    }
    .inp > input{
        border: 1px solid rgb(16, 2, 78);
        border-radius: 10px;
        height: 50px;
        width: 80%;
        font-size: 25px;
        justify-self: center;
    }
    label{
        display: block;
        font-size: 25px;
        text-transform: capitalize;
    }
    .btn{
        display: grid;
        width: 100px;
        grid-template-columns: repeat(2, 1fr);
    }
    .btn > b-button{
        grid-template-column: 1fr 1fr;
    }
    .inp :nth-child(4){
        display: inline-block;
    }
    .date{
        width: 80%;
        margin: 25px auto;
    }
</style>

