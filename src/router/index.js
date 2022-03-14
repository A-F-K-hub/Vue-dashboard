import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BillingView from "../views/billing/BillingView.vue";
import BillingDetails from "../views/billing/BillingDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/billing",
    name: "billing",
    component: BillingView,
  },
  {
    path: "/billing/:id",
    name: "billingDetails",
    component: BillingDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
