<template id="button-black">
<div>
    <button @click="navigateToSignIn" class="reg-button-black">{{ text }}</button>
</div>
</template>

<script>
export default {

data: function() {
        return{
            text: 'sign in'
        }
    },
    methods: {
        navigateToSignIn(event) {
            event.preventDefault();
            window.location.href = '/';
        }
    }
    
}

</script>

<style>
.reg-button-black{
    background-color: transparent;
    color: #fff;
    transition-duration: .3s;
    outline: none;
    font-weight: 700;
    font-size: 14px;
    border-radius: 100px;
    min-height: 44px;
    min-width: 176px;
    line-height: 44px;
    // padding: 0 20px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
}

.reg-button-black:hover{
    color:black;
    background-color: #fff;
}
</style>
