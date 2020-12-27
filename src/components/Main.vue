<template>
    <div class="background-main h-screen">
        <div class="flex justify-center pt-6">
            <img src="../assets/img/avatar.jpg" class="h-40 w-40 md:w-60 md:h-60 rounded-full border-white border-2">		
        </div>
        <p class="text-center text-5xl mt-6 md:text-8xl dark:text-white">Mattia Righetti</p>
        <p class="text-center text-2xl mt-2 mb-10 dark:text-white">Software Engineer</p>
        <IntroSection aphorism="Deleted code is debugged code - Jeff Sickel "/>
        <Stack />
    </div>
</template>

<script>
import IntroSection from '@/components/IntroSection'
import Stack from '@/components/Stack'

export default {
    name: 'Main',
    components: {
        IntroSection,
        Stack
    }
}
</script>

<style scoped>
.background-main {
    background-color: #FFFFFF;
}

@media (prefers-color-scheme: dark) {
    .background-main {
        background: linear-gradient(#202c44, #121323);
    }
}
</style>