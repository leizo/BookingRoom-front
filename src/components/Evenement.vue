<script>
export default {
    name: "Evenement",
}

</script>

<template>
<!-- id en fonction du type d'evenement pour changer la couleur -->
    <div class="block" id="class">
        <div style="display:block">
        Cours
        <span style="display:block; float:right">3h</span>   
        </div>
        <div class="description" id="class">
        Description un peu plus longue pour test
        </div>
        <div style="display:block">
        8h - 11h
        <span style="display:block; float:right">L114</span>
        </div>
    </div>
</template>

<style scoped>
.block{
    border-radius: 10px;
    padding: 5px;
    font-size: 12px;
    margin: 5px 0;
}

.block#class{
    background-color: var(--br-class);
}
.block#projet{
    background-color: var(--br-projet);
}
.block#reunion{
    background-color: var(--br-reunion);
}
.block#evenement{
    background-color: var(--br-evenement);
}

.description {
    border-radius: 10px;
    padding: 5px;
}

.description#class {
    background-color: var(--br-class-light);
}
.description#projet {
    background-color: var(--br-projet-light);
}
.description#reunion {
    background-color: var(--br-reunion-light);
}
.description#evenement {
    background-color: var(--br-evenement-light);
}

</style>