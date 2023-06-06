<script>
    import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <!-- Background -->
    <div class="w-max h-max fixed">
        <video autoplay muted loop class="brightness-50">
            <source src="/src/assets/bg.mp4" type="video/mp4">
        </video>
    </div>

    
    <!-- body -->
    <div>
        <div class="relative bg-zinc-900 bg-opacity-60 px-4 flex justify-between  py-1">
            <p class="font-sansation text-2xl font-medium text-slate-50">
                - QUASAR STORE -
            </p>
            <a href="https://discord.com/invite/jJ4wvQCCsc" target="_blank" class="">
                <img src="../components/icons/discord-icon-svgrepo-com.svg" class="h-8" />
            </a>
        </div>
        <div class="z-50 relative w-screen text-white flex justify-center">
        
        
        <!-- Hero -->
        <div class="flex flex-col text-center my-8 font-sansation">
            
            <p class="text-6xl py-2 tracking-wider">
                -QUASAR-
            </p>
            <p class="text-6xl py-2 tracking-wider">
                LOJA DE UPGRADES/CONTAS
            </p>
            <p class="text-6xl py-2 tracking-wider">
                MODDED DE GTA5
            </p>

            <div class="w-full flex justify-between mt-20">

                <div class="w-96 text-left">

                    <div class="my-10 ">
                        <p class="text-4xl my-2">100% SEGURO</p>
                        <p class="text-xl">Certificamos que sua conta continue em boas mãos</p>
                    </div>

                    <div class="my-10 ">
                        <p class="text-4xl my-2">ENTREGA RÁPIDA</p>
                        <p class="text-xl">Fazemos o nosso melhor para entregar o serviço o mais rápido possível</p>
                    </div>
                </div>

                <div class="w-96 text-right">
                    <div class="my-10 ">
                        <p class="text-4xl my-2">MÉTODOS SEGUROS</p>
                        <p class="text-xl">Nossos métodos de dinheiro e RP são completamente focados em segurança</p>
                    </div>

                    <div class="my-10 ">
                        <p class="text-4xl my-2">SUPORTE ÁGIL</p>
                        <p class="text-xl">Nosso time se certifica que o cliente seja sempre a prioridade</p>
                    </div>
                </div>
            </div>

            <!-- indicator -->
            <RouterLink to="/plans" class="w-full flex justify-center mt-10">
                <img class="w-12 animate-pulse" src="../components/icons/arrowSide.svg" />    
            </RouterLink>
            </div>
        </div>
    </div>
</template>