<template id="input-password">
   <div class="input-wrapper">
        <input  class="input-password" type="password" pattern="" >
        <label class="label-password">{{ text }}</label>
        <span>
            <img  src="../../assets/eyeopen.svg" class="eye-img">
        </span>
</div>
</template>

<script>
export default {

data: function() {
        return{
            text: 'Password'
        }
    },
}

</script>

<style>
.input-wrapper{
    box-sizing: border-box; 
    height:54px;
    clear: both;
    font-size: 1rem;
    position: relative;
    text-align: left;
    display: block;
}
span{
    cursor:pointer;
    font-style: inherit;
    font-weight: inherit;
    margin-left: 90%;
    z-index:1;
}

.label-password{
    cursor: default;
    font-size: 14px;
    position: absolute;
    transform-origin: top left;
    transform: translateY(16px) scale(1);
    transition: all .1s ease-in-out;
}
input{
    color: white;
    background-color: transparent!important;
    border: none;
    font-size: 14px;
    outline: 0;
    padding: 16px 2px 8px;
    width: 100%;
    z-index: 900;
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
    position: absolute;
     
}
.eye-img{
    position:absolute;
    float:right;
    margin-top: 15;
    cursor: pointer;
    z-index:1;

}

 input:empty ~ label{
    transform: translateY(16px) scale(1);

    }
input:focus ~ label{
        transform: translate(1px,-2px) scale(.87);
    }

    input:invalid ~ label{
        transform: translate(1px,-2px) scale(.87);
    }
 


</style>
