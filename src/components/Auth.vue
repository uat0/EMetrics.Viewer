<template>
    <div class="korobka">
        <h1>Авторизация</h1>
        <input type="text" placeholder="Введите логин...">
        <input type="text" placeholder="Введите пароль...">
        <button @click="confirmauth()">Авторизация</button>
        <button @click="confirmreg()">Регистрация</button>
    </div>
</template>

<script>
export default {
    methods: {
        confirmauth() {
            alert("Авторизация")
        },
        confirmreg() {
            alert("Регистрация")
        }
    }
}
</script>

<style scoped>
.korobka {
    margin: 50px auto;
    width: 900px;
    height: 400px;
    border-radius: 50px;
    border: 10px solid rgb(87, 32, 109);    
    background: rgb(61,5,103);
    background: linear-gradient(215deg, rgba(61,5,103,1) 0%, rgba(29,10,38,1) 100%);
    text-align: center;

    
    h1 {
        color: white;
    }   
}

.korobka input {
        margin-top: 50px;
        background: rgb(64, 47, 75);
        border-radius: 30px;
        border: 0;
        border-bottom: 2px solid #664a86;
        text-align: center;
        height: 20px;
        width: 200px;
        outline: none;
        color: white;
    }

.korobka button {
        cursor: pointer;
        margin-top: 50px;
        background: rgb(112, 78, 134);
        border-radius: 30px;
        border: 0;
        border-bottom: 3px solid #1d0636;
        text-align: center;
        height: 20px;
        width: 150px;
        outline: none;
        color: white;
    }
</style>