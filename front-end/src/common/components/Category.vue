<template>
    <li class="menu-item menu-item-submenu" :class="{'menu-item-active': active}">
        <a class="menu-link">
            <span class="menu-text">{{ name }}</span>
        </a>
    </li> 
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style>

</style>