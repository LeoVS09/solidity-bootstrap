<template>
    <span class="highlight"><slot></slot></span>
</template>

<style lang="stylus" scoped>
.highlight 
    background: #121FCF;
    background: linear-gradient(to right, #121FCF 0%, #CF1512 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
</style>