<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>

    <!-- Background -->
    <div class="w-max h-max fixed">
        <video autoplay muted loop class="brightness-50">
            <source src="/src/assets/bg.mp4" type="video/mp4">
        </video>
    </div>

    <!-- body -->
    <div class="z-50 relative w-screen h-screen text-white flex flex-col px-8 py-16">
        
    <!-- Header -->
    <div class="w-full flex justify-center mb-10">
        <p class="text-4xl tracking-widest font-sansation ">ACCOUNT UPGRADE</p>
    </div>


    <div class="h-full w-full flex flex-col items-center justify-center">

        <!-- Plans -->
        <div class="flex h-5/6 w-full justify-between">
            
            <!-- PlanCard1 -->
            <RouterLink to="/en/basic" class="outline w-1/4 h-full mx-8 bg-slate-800 flex flex-col rounded-3xl overflow-hidden">
                <div class="w-full shadow-2xl border-b-4 mt-8 pb-6 text-6xl font-sansation text-center">
                    BASIC
                </div>
                <div class="h-full flex items-end">
                    <img src="@/components/imgs/Daco_5628946.png" />
                </div>
            </RouterLink>

            <!-- PlanCard2 -->
            <RouterLink to="/en/pro" class="outline w-1/4 h-full mx-8 bg-slate-800 flex flex-col rounded-3xl overflow-hidden">
                <div class="w-full shadow-2xl border-b-4 mt-8 pb-6 text-6xl font-sansation text-center">
                    PRO
                </div>
                <div class="h-full flex items-end">
                    <img src="@/components/imgs/Daco_1297818.png" />
                </div>
            </RouterLink>

            <!-- PlanCard3 -->
            <RouterLink to="/en/ultra" class="outline w-1/4 h-full mx-8 bg-slate-800 flex flex-col rounded-3xl overflow-hidden">
                <div class="w-full shadow-2xl border-b-4 mt-8 pb-6 text-6xl font-sansation text-center">
                    ULTRA
                </div>
                <div class="h-full flex items-end">
                    <img src="@/components/imgs/omichael.png" />
                </div>
            </RouterLink>

            <!-- PlanCard4 -->
            <RouterLink to="/en/god" class="outline outline-amber-400 w-1/4 h-full mx-8 bg-slate-800 flex flex-col rounded-3xl overflow-hidden shadow-amber-900 shadow-lg">
                <div class="w-full shadow-2xl border-b-4 border-amber-400 mt-8 pb-6 text-6xl font-sansation text-center">
                    GOD
                </div>
                <div class="h-full flex items-end">
                    <img src="@/components/imgs/godMode.png" />
                </div>
            </RouterLink>
        </div>
        <div>
            <RouterLink to="/en/" class="w-full flex justify-center mt-10">
                <img class="w-12 animate-pulse" src="@/components/icons/arrowBack.svg" />    
            </RouterLink>
        </div>
    </div>
        
    </div>

</template>