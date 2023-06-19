<template>

    <!-- Background -->
    <div class="w-max h-max fixed">
        <video autoplay muted loop class="brightness-50">
            <source src="/src/assets/bg.mp4" type="video/mp4">
        </video>
    </div>

    <!-- Body -->
    <div class="z-50 items-center relative w-screen h-screen text-white flex flex-col pb-8 pt-20 py-16">
        <div class="">
            <p class="text-4xl font-sansation mb-20 py-4 font-bold text-slate-900 bg-slate-50 px-2">
                GOD Package - $25           
            </p>
            
            <div class="h-10 flex items-center my-4">
                <img class="h-8 mx-2 mt-1" src="@/components/icons/tabler_square-rounded-check.svg" />
                <p class="text-2xl">
                    - Unlock all + Weapons - Unlock all game achievements 
                </p>
            </div>

            <div class="h-10 flex items-center my-4">
                <img class="h-8 mx-2 mt-1" src="@/components/icons/tabler_skull.svg" />
                <p class="text-2xl">
                    - Choose your KD/VM 
                </p>
            </div>

            <div class="h-10 flex items-center my-4">
                <img class="h-8 mx-2 mt-1" src="@/components/icons/tabler_medal-2.svg" />
                <p class="text-2xl">
                    - Level 0 - 8000 
                </p>
            </div>

            <div class="h-10 flex items-center my-4">
                <img class="h-8 mx-2 mt-1" src="@/components/icons/tabler_shirt.svg" />
                <p class="text-2xl">
                    - 5 Outfits of your choice 
                </p>
            </div>

            <div class="h-10 flex items-center my-4">
                <img class="h-8 mx-2 mt-1" src="@/components/icons/tabler_pig-money.svg" />
                <p class="text-2xl">
                    - 100m in the account 
                </p>
            </div>

            <div class="h-10 flex items-center my-4">
                <img class="h-8 mx-2 mt-1" src="@/components/icons/tabler_car.svg" />
                <p class="text-2xl">
                    - 5 Vehicles of your choice (100% Tuned)
                </p>
            </div>

            <div class="w-full flex flex-col items-center">
                <p class="text-2xl font-sansation font-bold">Contact us through our Discord!</p>
                <a href="https://discord.com/invite/jJ4wvQCCsc">
                    <img src="@/components/icons/discord-icon-svgrepo-com.svg" class="w-20" />
                </a>
            </div>

            <RouterLink to="/en/plans" class="w-full flex justify-center mt-10">
                <img class="w-12 animate-pulse" src="@/components/icons/arrowBack.svg" />    
            </RouterLink>
        </div>
    </div>

</template>