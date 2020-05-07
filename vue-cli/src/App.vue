<template>
<div>
    <app-server-status></app-server-status>

    <RegisterButtonGreen></RegisterButtonGreen>
    <RegisterButtonBlack></RegisterButtonBlack>
    <SignInButtonGreen></SignInButtonGreen>
    <SignInButtonBlack></SignInButtonBlack>


</div>
</template>

<script>
export default {
    data: function() {
        return{
            status: 'Critical'
        }
    }
}
</script>

<style>

</style>
