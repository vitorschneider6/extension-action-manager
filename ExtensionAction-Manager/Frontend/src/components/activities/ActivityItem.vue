<template>
    <div @click="handleViewDetails" class="activity-wrapper">
        <div class="activity-content">
            <h2>{{ activity.title }}</h2>
            <p>{{ activity.place }}</p>
            <p>{{ activity.hour }}</p>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    data() {
        return {
            router: useRouter()
        }

    },
    props: ["activity"],
    methods: {
        handleViewDetails() {
            this.router.push({
                name: "activityDetails", params: {
                    id: this.activity._id
                }
            })
        }
    }

}
</script>

<style scoped>
.activity-wrapper {
    max-width: 80%;
    padding: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    border-radius: 15px;
    cursor: pointer;
}


.activity-content {
    display: flex;
    align-items: center;
    gap: 250px;
}

ul {
    list-style: none;
    margin-top: 50px;
}
</style>