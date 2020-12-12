<template>
    <div class="flex flex-col p-10 mb-6 md:w-1/3 md:mb-0">
        <div class="pattern-dots-md">
            <div class="rounded card-bakground p-4 transform translate-x-5 translate-y-5">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-white text-blue-500 mb-5 flex-shrink-0">
                    <div v-if="icon === 'code'"><Code /></div>
                    <div v-else-if="icon === 'database'"><Database /></div>
                    <div v-else-if="icon === 'server'"><Server /></div>
                </div>
                <div class="flex-grow">
                    <p class="text-xl title-font font-medium mb-3 dark:text-white">{{ title }}</p>
                    <p class="leading-relaxed text-sm text-justify dark:text-white">{{ text }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Code from '@/components/svgs/Code'
import Database from '@/components/svgs/Database'
import Server from '@/components/svgs/Server'

export default {
    name: 'Card',
    props: {
        title: String,
        text: String,
        icon: String
    },
    components: {
        Database,
        Code,
        Server
    }
}
</script>

<style scoped>
.pattern-dots-sm {
    background-image: radial-gradient(#000000 .5px, transparent .5px);
    background-size: calc(10 * .5px) calc(10 * .5px)
}

.pattern-dots-md {
    background-image: radial-gradient(#000000 1px, transparent 1px);
    background-size: calc(10 * 1px) calc(10 * 1px)
}

.card-bakground {
    background-color: #FAFAFA;
}

@media (prefers-color-scheme: dark) {
    .pattern-dots-sm {
        background-image: radial-gradient(#ffffff .5px, transparent .5px);
        background-size: calc(10 * .5px) calc(10 * .5px)
    }

    .pattern-dots-md {
        background-image: radial-gradient(#ffffff 1px, transparent 1px);
        background-size: calc(10 * 1px) calc(10 * 1px)
    }

    .card-bakground {
        background-color: #2A2724;
    }
}
</style>