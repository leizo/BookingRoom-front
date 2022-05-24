<script lang="ts">
    import TheHeader from "@/components/TheHeader.vue";
    import TheNavbar from "@/components/TheNavbar.vue";

    export default {
        name: "Request",
        components: {TheHeader, TheNavbar}
    }
</script>

<template>

<div class="wrapper-request">

    <div class="wrapper-btn">
        <div class="btn-group">
            <button>NDL</button>
            <button>NDC</button>
        </div>
        <div class="search">
            Vous cherchez à réserver
        </div>
        <div>
            <select name="Salle">
            <option value="Salle">Salle</option>
            <option value="I1">L012</option>
            <option value="I2">L220</option>
            <option value="P1">L207</option>
        </select>
        </div>
        <div>
            <button>Date</button>
        </div>
    </div>
    <!--
    <div class="wrapper-col">
        <div class="fond">
            <h1>nom de la Salle</h1>

            Date picker <br>

            <div style="background-color: var(--color-background-mute);padding:10px; border-radius:10px">
                Disponibilités de la salle : <br>
                heures
            </div>

            <div style="display:grid; grid-template-columns: max-content max-content; ">
                <select name="Salle" style="font-size: 14px; ">
                    <option value="Salle">Début</option>
                    <option value="I1">L012</option>
                    <option value="I2">L220</option>
                    <option value="P1">L207</option>
                </select>
                 <select name="Salle" style="font-size: 14px;">
                    <option value="Salle">Fin</option>
                    <option value="I1">L012</option>
                    <option value="I2">L220</option>
                    <option value="P1">L207</option>
                </select>
            </div>

            <div style="background-color: var(--br-orange);padding:10px; border-radius:10px">
                Réserver la salle L012 à NDL de 14h15 à 15h30 le lundi 16 avril 2022
            </div>
            
        </div>
        <div class="fond">
            component de recap
        </div>
        <div></div>
    </div>
    -->

    <!-- Dans mon stage on utilisait des v-if pour choisir quel div afficher -->
    
    <div class="wrapper-col">
        <div class="fond">
            <h1>Date choisie</h1>

            <div style="display:grid; grid-template-columns: max-content max-content; ">
                <select name="Salle" style="font-size: 14px; ">
                    <option value="Salle">Début</option>
                    <option value="I1">L012</option>
                    <option value="I2">L220</option>
                    <option value="P1">L207</option>
                </select>
                 <select name="Salle" style="font-size: 14px;">
                    <option value="Salle">Fin</option>
                    <option value="I1">L012</option>
                    <option value="I2">L220</option>
                    <option value="P1">L207</option>
                </select>
            </div>

            <li>Salle dispo</li>
            <li>Salle dispo</li>
            <li>Salle dispo</li>
            
        </div>
        <div class="fond">
            component de recap
        </div>
        <div></div>
    </div>
    
    
</div>

</template>

<style>

.wrapper-btn {
    display: grid;
    grid-template-columns: max-content auto max-content max-content;
    grid-gap: 30px;
    height: min-content;
    margin: 30px 30px 30px 30px;
}

.wrapper-col {
    display: grid;
    grid-template-columns: min-content auto auto;
    grid-gap: 30px;
    height: 80%;
    margin: 0 30px;
}

.fond {
    height: 100%;
    background-color: var(--color-background-soft);
    border-radius: 10px;

    padding: 20px;
    font-size: 14px;

}

.search {
    background-color: var(--color-background-soft);
    border-radius: 20px;
    text-align: center;
    padding: 10px;
}

.btn-group{
    background-color: var(--color-background-soft);
    border-radius: 20px;
    width: max-content;
    height: min-content;
}

button, select {
    background-color: var(--color-background-soft);
    border-radius: 20px;
    font-size: 16px;
    margin: 0;
    padding: 10px 50px;
}

h1{
    font-size: 16px;
}

li {
    background-color: var(--color-background-mute);
    margin-bottom:10px;
    padding:5px; 
    border-radius:10px;
    list-style: none;
}


</style>