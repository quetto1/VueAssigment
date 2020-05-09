<template id="button-green">
<div>
    <button class="reg-button-green">{{ text }}</button>
</div>
</template>

<script>
export default {

data: function() {
        return{
            text: 'sign in'
        }
    },
}

</script>

<style>
.reg-button-green{
    background-color: #00b2a9;
    color: #fff;
    border: none;
    transition-duration: .3s;
    font-weight: 700;
    font-size: 14px;
    border-radius: 100px;
    min-height: 48px;
    min-width: 180px;
    line-height: 48px;
    // padding: 0 20px;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
}
.reg-button-green:hover {
    background-color:rgb(40,207,199);
}
</style>
