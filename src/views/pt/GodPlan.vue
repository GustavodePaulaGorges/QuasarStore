<template>

    <!-- Background -->
    <div class="w-max h-max fixed">
        <video autoplay muted loop class="brightness-50">
            <source src="/src/assets/bg.mp4" type="video/mp4">
        </video>
    </div>

    <!-- body -->
    <div class="z-50 items-center relative w-screen h-screen text-white flex flex-col pb-8 pt-20 py-16">
     <div class="">
        <p class="text-4xl font-sansation mb-20 py-4 font-bold text-slate-900 bg-slate-50 px-2">
            TABELA GOD - R$ 25           
        </p>
        
        <div class="h-10 flex items-center my-4">
            <img class="h-8 mx-2 mt-1" src="src/components/icons/tabler_square-rounded-check.svg" />
            <p class="text-2xl">
                - Unlock all + Armas - Libera todos as conquistas do jogo 
            </p>
        </div>

        <div class="h-10 flex items-center my-4">
            <img class="h-8 mx-2 mt-1" src="src/components/icons/tabler_skull.svg" />
            <p class="text-2xl">
                - KD/VM De sua escolha 
            </p>
        </div>

        <div class="h-10 flex items-center my-4">
            <img class="h-8 mx-2 mt-1" src="src/components/icons/tabler_medal-2.svg" />
            <p class="text-2xl">
                - Level de 0 - 8000 
            </p>
        </div>

        <div class="h-10 flex items-center my-4">
            <img class="h-8 mx-2 mt-1" src="src/components/icons/tabler_shirt.svg" />
            <p class="text-2xl">
                - 5 Trajes de sua escolha 
            </p>
        </div>

        <div class="h-10 flex items-center my-4">
            <img class="h-8 mx-2 mt-1" src="src/components/icons/tabler_pig-money.svg" />
            <p class="text-2xl">
                - 100m na conta 
            </p>
        </div>

        <div class="h-10 flex items-center my-4">
            <img class="h-8 mx-2 mt-1" src="src/components/icons/tabler_car.svg" />
            <p class="text-2xl">
                - 5 Veículos de sua escolha (100% Tunados)
            </p>
        </div>

        <div class="w-full flex flex-col items-center">
            <p class="text-2xl font-sansation font-bold">Converse conosco através do nosso Discord !</p>
            <a href="https://discord.com/invite/jJ4wvQCCsc">
                <img src="src/components/icons/discord-icon-svgrepo-com.svg" class="w-20" />
            </a>
        </div>

        <RouterLink to="/plans" class="w-full flex justify-center mt-10">
            <img class="w-12 animate-pulse" src="src/components/icons/arrowBack.svg" />    
        </RouterLink>
     </div>
    </div>
</template>