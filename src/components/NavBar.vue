<template>
    <header>
        <nav>
            <div class="branding">
                <img src="@/assets/metrika_512.png" alt="">
            </div>
            <ul class="navigation">
                <li><router-link class="link" :to="{name: 'home'}">Главная</router-link></li>
                <li><router-link class="link" :to="{name: 'counters'}">Счётчики</router-link></li>
                <li><router-link class="link" :to="{name: 'aboutus'}">О нас</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header {
    background-color: rgba(0, 0, 0,.6);
    z-index: 99;
    width: 100%;
    position: relative;
    transition: .5s ease all;
    color: rgb(255, 255, 255);

    nav {
    
        display: flex;
        padding: 30px 0;
        transition: .5s ease all;
        width: 90%;
        margin: 0 auto;
        @media(min-width: 1140px) {
            max-width: 1700px;
        }

        ul,
        .link {
            
            font-weight: 500;
            color: rgb(255, 255, 255);
            list-style: none;
            text-decoration: none;
        }
    .li {
        text-transform: uppercase;
        padding: 16px;
        margin-left: 16px;
    }

    .link {
        
        font-size: 20px;
        transition: .5s ease all;
        padding-bottom: 1px;
        border-bottom: 2px solid transparent;

        &:hover {
            color: blueviolet;
            border-color: blueviolet;
            cursor: pointer;
        }
    }
    
    .branding {
        display: flex;
        align-items: center;

        img {
            width: 40px;
            transition: .5s ease all;
        }
    }
    .navigation {
        display: flex;
        flex: 1;
        justify-content:space-around;
    }
    }
}
</style>