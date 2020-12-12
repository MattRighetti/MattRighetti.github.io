<template>
    <div class="text-center mt-4 mb-6 px-4 dark:text-white">
        <div class="title-font mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
            <p>What I <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-600">do()</span></p>
        </div>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">{{ aphorism }}</p>
        <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full inline-flex bg-gradient-to-r from-blue-300 to-blue-600"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IntroSection',
        props: {
            aphorism: String
        }
    }
</script>