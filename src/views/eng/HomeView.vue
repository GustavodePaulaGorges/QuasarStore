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

    
    <!-- Body -->
<div>
    <div class="relative bg-zinc-900 bg-opacity-60 px-4 flex justify-between  py-1">
        <p class="font-sansation text-2xl font-medium text-slate-50">
            - QUASAR STORE -
        </p>
        <div class="flex items-center">
                <a href="https://discord.com/invite/jJ4wvQCCsc" target="_blank" class="mx-4">
                    <img src="/src/components/icons/discord-icon-svgrepo-com.svg" class="h-8" />
                </a>
                <RouterLink to="/">
                    <img src="@/components/icons/brasil.svg" class="h-10" />
                </RouterLink>
            </div>
    </div>
    <div class="z-50 relative w-screen text-white flex justify-center">
    
    
    <!-- Hero -->
    <div class="flex flex-col text-center my-8 font-sansation">
        
        <p class="text-6xl py-2 tracking-wider">
            -QUASAR-
        </p>
        <p class="text-6xl py-2 tracking-wider">
            UPGRADES/ACCOUNT STORE
        </p>
        <p class="text-6xl py-2 tracking-wider">
            MODDED GTA5
        </p>

        <div class="w-full flex justify-between mt-20">

            <div class="w-96 text-left">

                <div class="my-10 ">
                    <p class="text-4xl my-2">100% SECURE</p>
                    <p class="text-xl">We ensure that your account remains in good hands</p>
                </div>

                <div class="my-10 ">
                    <p class="text-4xl my-2">FAST DELIVERY</p>
                    <p class="text-xl">We strive to deliver the service as quickly as possible</p>
                </div>
            </div>

            <div class="w-96 text-right">
                <div class="my-10 ">
                    <p class="text-4xl my-2">SECURE METHODS</p>
                    <p class="text-xl">Our money and RP methods are completely focused on security</p>
                </div>

                <div class="my-10 ">
                    <p class="text-4xl my-2">SWIFT SUPPORT</p>
                    <p class="text-xl">Our team ensures that the customer is always the priority</p>
                </div>
            </div>
        </div>

        <!-- Indicator -->
        <RouterLink to="/en/plans" class="w-full flex justify-center mt-10">
            <img class="w-12 animate-pulse" src="@\components\icons\arrowSide.svg" />

        </RouterLink>
        </div>
    </div>
</div>

</template>