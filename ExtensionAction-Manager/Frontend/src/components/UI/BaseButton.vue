<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped>
button {
    text-align: center;
    padding: 8px 16px;
    border-radius: 15px;
    background-color: #00CC61;
    cursor: pointer;
    border: none;
    font-size: 15px;
    font-weight: 600;
}
</style>