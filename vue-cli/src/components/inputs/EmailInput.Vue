<template id="input-email">
<div>
   <div class="input-wrapper">
        <input value="" class="input-email" type="email" pattern="">
        <label class="label-email">{{ text }}</label>
    </div>

</div>

</template>

<script>
export default {

data: function() {
        return{
            text: 'Email'
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
    font-style: inherit;
    font-weight: inherit;
}
.label-email{
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
.error{
    display:none;
    height:30px;
    margin-top:5px;
    font-size: 12px;
    position: relative;
    top: -10px;
    color: #d93900;
    font-weight: 700;
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
    input:invalid + .error{
      font-size: 42px;
    }
  
   

    

</style>
