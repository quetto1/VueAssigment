<template>
<div>

    <div class="hero-body">
        <RegisterButtonGreen></RegisterButtonGreen>
        <RegisterButtonBlack></RegisterButtonBlack>
        <SignInButtonGreen></SignInButtonGreen>
        <SignInButtonBlack></SignInButtonBlack>
        <Facebook-button></Facebook-button>
    </div>

</div>
</template>

<script>
export default {
    data: function() {
        return{
            // status: 'Critical'
        }
    }
}
</script>

<style>
.hero-body{

    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
    align-items: center;
    // display: flex;

}



</style>
