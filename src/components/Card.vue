<template>
    <div class="flex flex-col p-10 mb-6 md:w-1/3 md:mb-0">
        <div class="pattern-dots-md">
            <div class="rounded card-background p-4 border-2 border-gray-200 dark:border-cool-blue-border hover:border-glowing-blue-border scale-on-hover">
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
.card-background {
    background-color: #fafafa;
}

.card-background:hover {
    background-color: #fafafa;
}

.scale-on-hover {
    transition: transform .2s ease-in-out;
}

.scale-on-hover:hover {
    box-shadow: rgba(93, 136, 176, 0.2) 0px 7px 29px 0px;
    transform: scale(1.05);
}

@media (prefers-color-scheme: dark) {
    .card-background {
        background-color: #202331;
    }

    .card-background:hover {
        background-color: #181A24;
    }
}
</style>