<template>
    <div class="container">
        <p class="text">Please <br /> connect <br /> your wallet</p>
    </div>
</template>

<style lang="stylus" scoped>

.container
    display flex
    flex-direction column
    width 100%
    height 100%

.text
    margin-top auto
    margin-bottom auto
    font-weight 900
    font-size 14rem
    color #474554
    line-height 18rem
    text-transform uppercase

@media screen and (max-width: 1550px) 
    .text
        font-size 12rem

@media screen and (max-width: 1350px) 
    .text
        line-height 14rem
        font-size 10rem

@media screen and (max-width: 1100px) 
    .text
        line-height 10rem
        font-size 8rem

@media screen and (max-width: 890px) 
    .text
        line-height 8rem
        font-size 5rem

@media screen and (max-width: 570px) 
    .text
        line-height 5rem
        font-size 3rem

</style>