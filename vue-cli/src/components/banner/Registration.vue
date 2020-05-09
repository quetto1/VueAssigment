<template>
<div>

    <div class="hero-body">
        <form class="form-wrapper" method="">
            <h1 class="header-title">WELCOME TO WEDIO —</h1>
            <p class="discription">the fastest-growing European community of creators</p>
            <Facebook-button class="facebook-button"></Facebook-button>
            <EmailInput></EmailInput>
            <UsernameInput></UsernameInput>
            <PasswordInput></PasswordInput>
            <div class="terms-wrapper">
                <p>By clicking on Register, you agree to Wedio's 
                    <a href="https://support.wedio.com/en/articles/3491417-terms-and-conditions" target="blank" class="terms-link">Terms & Conditions</a> and <a href="https://support.wedio.com/en/articles/3491350-privacy-policy-your-data-your-decision" target="blank" class="terms-link">Privacy Policy.</a>
                </p>
            </div>
            <div class="buttons-wrapper">
                <SignInButtonBlack href="/sign-in"></SignInButtonBlack>
                <RegisterButtonGreen class="RegisterButtonGreen "></RegisterButtonGreen>
            </div>

            </form>
    </div>

</div>
</template>

<script>
export default {
    data: function() {
        return{
        }
    },
    mounted(){
        document.title = 'Register on Wedio — Become a Part of Community For Free'
    }
}
</script>

<style>
.form-wrapper{
    width: 350px;
    
}
.hero-body{
    display: flex;
    justify-content: center;
    margin-right: 20%;
    margin-top: 10%;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 3rem 1.5rem;
    align-items: center;


}
.header-title{
width: max-content;
font-size: 28px;
margin-bottom: 12px;
font-weight: 900;

}
.discription{
    font-weight: 700;
    font-size: 16px;
        white-space: nowrap;
        display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

}
.facebook-button{
        margin-top: 32px;
    margin-bottom: 32px;
}
.terms-wrapper{
        margin-bottom: 30px;
}
.terms-link{
        font-size: inherit;
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 1px dotted;
    cursor: pointer;
    transition-duration: .3s;
}
.terms-link:hover{
    color: #9ea5b9;
    background-color: #ffffff;
}

.buttons-wrapper{
display: flex;
flex-direction:row;

}
.RegisterButtonGreen {
    margin-left: 12px;
}
@media screen and (max-width: 1024px){
    .hero-body{
     margin-right: 0;
    padding: 0;
    }
    .buttons-wrapper{
        text-align: center;
        flex-direction:column;
    }
.RegisterButtonGreen {
    margin-left: 0px;
    margin-top: 24px;
    
}

}
@media screen and (max-width: 480px){
.form-wrapper{
    margin-top:30px;
    width: 80%;
    
}
.header-title{
    width:auto;
}
.discription{
    width:auto;
    white-space: break-spaces;
}

}

</style>
