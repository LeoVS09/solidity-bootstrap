<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['click'])

const onClick = (event: any) => {
    emit('click', event)
}

</script>

<template>
    <button class="secondary-button" @click="onClick">
        <span>
            <slot></slot>
        </span>
    </button>
</template>

<style lang="stylus">
.secondary-button {
    display: block;
    width: 100%;
    min-width: 30%;
    height: 3rem;
    margin: 1rem auto;
    max-width: 10rem;

    cursor: pointer;
    position: relative;

    text-transform uppercase
    border 0 solid transparent
    background: #212121;
    color white

    overflow: hidden;

    border-radius: 3px;

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

}
</style>

