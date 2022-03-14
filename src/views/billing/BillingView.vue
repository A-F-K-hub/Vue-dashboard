<template>
<div class="billing">
    <h1>Billing</h1>
    <div v-for="billing in data" :key="billing.account_id">
        <router-link :to="{name:'billingDetails', params: { id: billing.account_id}}">
            <h2>{{billing.first_name}}</h2>
        </router-link>
    </div>
    </div>
</template>

<script>
import jsonData from '../../Data.json'
export default {
    data() {
        return {
            data: jsonData
        }
    }
}
</script>

<style>
.billing {
    background-color: #fff;
}

</style>