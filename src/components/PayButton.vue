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
    min-width: 30%;
    height: 3rem;
    margin: 1rem auto;
    max-width: 10rem;

    cursor: pointer;

    text-transform uppercase
    border 0 solid transparent
    background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
    color white

    overflow: hidden;

    border-radius: 3px;

    &::before {
        content: "";
        opacity: 0.4;

        background: linear-gradient(to right, #feac5e, #c779d0, #4bc0c8);
        position: absolute;
        top: 0;
        left: 35%;
        height: 40%;
        width: 30%;
        z-index: -1;
        filter: blur(20px);
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    }

    &:hover {
        &::before {
            opacity: 0.75;
        }
    }

}

</style>

