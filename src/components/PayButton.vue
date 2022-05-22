<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['click'])

const onClick = (event: any) => {
    emit('click', event)
}

</script>

<template>
    <button class="pay-button" @click="onClick">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<style lang="stylus">
.pay-button {
    display: block;
    width: 100%;
    min-width: 100%;
    height: 3rem;
    margin: 1rem auto;
    max-width: 10rem;
    position: relative;
    cursor: pointer;

    text-transform uppercase
    
    background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
    
    color white
    font-weight 900

    border 0 solid transparent
    border-radius: 3px;

    &::before {
        content: "";
        opacity: 0.4;

        background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
        position: absolute;
        top: -10%;
        left: -10%;
        height: 150%;
        width: 120%;
        filter: blur(20px);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        z-index: -1;
    }

    &:hover {
        &::before {
            opacity: 0.75;
        }
    }

}

</style>

