<template id="facebook-button">
    <div class="reg-facebook-wrapper">
        <a href="/people/auth/facebook?locale=en" class="reg-facebook">{{ text }}</a>
        <div class="facebook-container"> 
            <img src="../../assets/facebook.svg" class="facebook-img">
        </div>
    </div>
</template>

<script>
export default {

data: function() {
        return{
            text: 'Register with Facebook'
        }
    },
}

</script>

<style>
        .reg-facebook-wrapper {
            border: 1px solid #2554a1;
            background: linear-gradient(to left, #2554a1 50%, black 50%);
            background-size: 200% 100%;
            background-position: left bottom;
            transition: all .5s ease-out;
            outline: none;
            flex-direction: row;
            min-height: 38px;
            width: 243px;
            line-height: 38px;
            cursor: pointer;
        }

        .reg-facebook {
            padding-left: 15px;
            font-weight: 700;
            font-size: 14px;
            color: #fff;
            text-decoration: none;
        }

        .facebook-container {
            float: right;
            width: 38px;
            height: 38px;
            background-color: #2554a1;
            position: relative;
            display: inline-flex;
        }

        .facebook-img {
            margin: 0 auto;
            max-width: 100%;
            display: inline-block;
            vertical-align: middle;
        }

        .reg-facebook-wrapper:hover {
            background-position: right;
        }
</style>
