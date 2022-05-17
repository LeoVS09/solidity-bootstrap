<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['click'])

const onClick = (event: any) => {
    emit('click', event)
}

</script>

<template>
    <button class="pay-button" @click="onClick"><span>
            <slot></slot>
        </span></button>
</template>

<style>
.pay-button {
    display: block;
    width: 100%;
    min-width: 10rem;
    height: 80px;
    margin: 1rem auto;
    max-width: 250px;
    border-radius: 999px;

    position: relative;

    text-transform: uppercase;
    border: 2px solid black;
    background-color: transparent;
}

.pay-button span {
    font-weight: 900;
}

.pay-button:before,
.pay-button:after {
    z-index: -1;
    content: "";
    position: absolute;
    inset: -2px;

    border: 2px solid red;
    border-radius: 999px;
    box-sizing: border-box;
}

.pay-button:after {
    border-color: blue;
}

.pay-button:hover:before {
    animation: glitch-border 0.2s infinite;
}

.pay-button:hover:after {
    animation: glitch-border 0.2s infinite reverse;
}

.pay-button:hover span {
    animation: glitch-text 0.2s infinite;
}

@keyframes glitch-text {
    from {
        text-shadow: 0 0 0 red, 0 0 0 blue;
    }

    to {
        text-shadow: -2px 1px 0 red, 2px -1px 0 blue;
    }
}

@keyframes glitch-border {
    from {
        transform: translate(2px, -1px);
    }

    to {
        transform: translate(-2px, -1px);
    }
}
</style>

