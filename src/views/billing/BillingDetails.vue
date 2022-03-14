
<template>
<main>
    <div class="dashboard-container">
        <!-- 4 cards top -->
        <div class="card block1">
            <div class="info">
                <div class="info-detail">
                <h4>Status</h4>
                <p>{{getUserSpecificData.account_status}}</p>
                </div>
            </div>
        </div>
        <div class="card block2">
            <div class="info">
                <div class="info-detail">
                <h4>Next Invoice Date</h4>
                <p>{{getUserSpecificData.next_invoice_date}}</p>
                </div>
            </div>
        </div>
        <div class="card block3">
            <div class="info">
                <div class="info-detail">
                <h4>Balance</h4>
                <p>{{getUserSpecificData.balance}}</p>
                </div>
            </div>
        </div>
        <div class="card block4">
            <div class="info">
                <div class="info-detail">
                <h4>Payment Method</h4>
                <p>{{getUserSpecificData.payment_method}}</p>
                </div>
            </div>
        </div>
        <div class="card2 detail">
            <div class="detail-header">
                <h2>Client Details</h2>
            </div>
            <table>
                <tr>
                    <td><strong>First Name</strong></td>
                    <td>{{getUserSpecificData.first_name}}</td>
                </tr>
                <tr>
                    <td><strong>Last Name</strong></td>
                    <td>{{getUserSpecificData.last_name}}</td>
                </tr>
                <tr>
                    <td><strong>Email</strong></td>
                    <td>{{getUserSpecificData.email_address}}</td>
                </tr>
                <tr>
                    <td><strong>Business Name</strong></td>
                    <td>{{getUserSpecificData.business_name}}</td>
                </tr>
                <tr>
                    <td><strong>Street Address</strong></td>
                    <td>{{getUserSpecificData.address_line_one}}</td>
                </tr>
                <tr>
                    <td><strong>Subarb</strong></td>
                    <td>{{getUserSpecificData.address_line_two}}</td>
                </tr>
                <tr>
                    <td><strong>Mobile Number</strong></td>
                    <td>{{getUserSpecificData.mobile_number}}</td>
                </tr>
                <tr>
                    <td><strong>City</strong></td>
                    <td>{{getUserSpecificData.address_city}}</td>
                </tr>
                <tr>
                    <td><strong>Country</strong></td>
                    <td>{{getUserSpecificData.address_country}}</td>
                </tr>
                <tr>
                    <td><strong>Postal Code</strong></td>
                    <td>{{getUserSpecificData.address_post_code}}</td>
                </tr>
            </table>
        </div>
        <div class="card2 customer">
             <div class="detail-header">
                <h2>Products</h2>
            </div>
            <table>
                <tr>
                    <td><strong>Product ID</strong></td>
                    <td>{{getUserSpecificData.products[0].product_id}}</td>
                </tr>
                <tr>
                    <td><strong>Product Type</strong></td>
                    <td>{{getUserSpecificData.products[0].product_kind}}</td>
                </tr>
                <tr>
                    <td><strong>Product Detail</strong></td>
                    <td>{{getUserSpecificData.products[0].product_detail}}</td>
                </tr>
                <!-- <tr>
                    <td><strong>Product ID</strong></td>
                    <td>{{getUserSpecificData.products[1].product_id}}</td>
                </tr>
                <tr>
                    <td><strong>Product Type</strong></td>
                    <td>{{getUserSpecificData.products[1].product_kind}}</td>
                </tr>
                <tr>
                    <td><strong>Product Detail</strong></td>
                    <td>{{getUserSpecificData.products[1].product_detail}}</td>
                </tr>
                <tr>
                    <td><strong>Product ID</strong></td>
                    <td>{{getUserSpecificData.products[2].product_id}}</td>
                </tr>
                <tr>
                    <td><strong>Product Type</strong></td>
                    <td>{{getUserSpecificData.products[2].product_kind}}</td>
                </tr>
                <tr>
                    <td><strong>Product Detail</strong></td>
                    <td>{{getUserSpecificData.products[2].product_detail}}</td>
                </tr> -->
            </table>
        </div>
        <div class="card2 detail2">
            <div class="detail-header">
                <h2>Authorised Contact</h2>
            </div>
            <table>
                <tr>
                    <td><strong>Full Name</strong></td>
                    <td class="td">{{getUserSpecificData.authorised_contact.full_name}}</td>
                </tr>
                <tr>
                    <td><strong>Email</strong></td>
                    <td>{{getUserSpecificData.authorised_contact.email_address}}</td>
                </tr>
                <tr>
                    <td><strong>Phone</strong></td>
                    <td>{{getUserSpecificData.authorised_contact.phone_number}}</td>
                </tr>
            </table>
        </div>
    </div>
  </main>  
</template>

<script>
import jsonData from "../../Data.json"

export default {
    computed:{
        getUserSpecificData() {
       return jsonData.find(item => {
                console.log({item})
             return `${item.account_id}` ===`${this.$route.params.id}`
        })}
    }
    
}
</script>

<style >
main {
    min-height: 100%;
    padding: 6rem 1rem 2rem 14rem;
    color: #201f2b;

}

.dashboard-container {
    display: grid;
    grid-template-columns: 1fr, 1fr, 1fr, 1fr;
    grid-template-rows: auto;
    gap: 3rem;
    grid-template-areas: 
    'block1 block2 block3 block4'
    "detail detail . customer "
    "detail detail . detail2";
}

.card {
    background-color: #fff;
    width: 200px;
    padding: 0.5rem;
    border-radius: 10px;
}

.card2 {
    background-color: #fff;
    padding: 0.5rem;
    border-radius: 10px;
}

.detail-header > h2 {
    font-size: 1.5rem;
    margin-top: -0.02rem;
    border-bottom: 1px solid rgb(206, 203, 203);
}

table {
    margin-top: 2rem;
    margin-bottom: 2rem;
    text-align: left;
}

.td {
    margin-right: 2rem;
}

.block1 {
    grid-area: block1;
    background-color: #FFD013;
    color: #fff;
}

.block2 {
    grid-area: block2;
    background-color: #EE405B;
    color: #fff;
}

.block3 {
    grid-area: block3;
    background-color: #DC00E0;
    color: #fff;
}

.block4 {
    grid-area: block4;
    background-color: #1f8ceb;
    color: #fff;
}

.detail {
    grid-area: detail;
    overflow-x: auto;
}

.customer {
    grid-area: customer;
    overflow-x: auto;
}

.info {
    align-items: center;
}

.info-detail > h4{
    margin-top: -1px;
    margin-bottom: -1px;
    align-items: center;
    font-size: 20px;
}

.info-detail > p {
    font-size: 18px;
    margin-bottom: -1px;
}

h1 {
    margin-top: 4rem;
}
</style>