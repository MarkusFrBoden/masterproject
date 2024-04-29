<template>
    <div class="traffic-signal">
        <div v-if="props.color === 'red'">
            <div class="light red"></div>
            <div class="light black"></div>
            <div class="light black"></div>
        </div>
        <div v-else-if="props.color === 'yellow'">
            <div class="light black"></div>
            <div class="light yellow"></div>
            <div class="light black"></div>
        </div>
        <div v-else="props.color === 'green'">
            <div class="light black"></div>
            <div class="light black"></div>
            <div class="light green"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
//accept survey props from calling components
let props = defineProps({
    color: {
        type: String,
        required: true
    }
})
</script>

<style scoped>

.traffic-signal {
    width: 50px;
    height: 150px;
    background-color: #333;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.light {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 10px;
}

.red {
    background-color: red;
}

.yellow {
    background-color: yellow;
}

.green {
    background-color: green;
}

.black {
    background-color: black;
}
</style>