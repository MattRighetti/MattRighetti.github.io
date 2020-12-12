<template>
    <div class="flex flex-wrap sm:m-4 pb-10 mt-4 mr-6">
        <Card 
        title="Software Development" 
        text="My past projects cover a large spectrum of software development. Started with Java, had fun with C, did some backend stuff with Go and NodeJS and a lot more"
        icon="code"
        />
        <Card 
        title="Database" 
        text="I have worked with different databases, my personal favourite is MySQL but other than that I've got a good understanding of MongoDB, SQLite and MariaDB"
        icon="database"
        />
        <Card 
        title="System Admin" 
        text="I have a big background on working with remote servers, hosting websites and everything concerning system administration with tools like MySQL Server, Docker and Kubernetes"
        icon="server"
        />
    </div>
</template>

<script>
import Card from '@/components/Card'
export default {
    name: 'Stack',
    components: {
        Card
    }
}
</script>