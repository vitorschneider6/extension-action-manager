import { createApp } from "vue";
import App from "./App.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

import IndexPage from "./components/indexPage/IndexPage.vue";
import ActivityList from "./components/activities/ActivityList.vue";
import ActivityComplete from "./components/activities/ActivityComplete.vue";
import TheMenuPanel from "./components/user-panel/TheMenuPanel";
import ManageActionsPanel from "./components/user-panel/manage-actions/ManageActionsPanel.vue";
import ManageUsersPanel from "./components/user-panel/manage-accounts/ManageUsersPanel.vue";
import ManageMyActionsPanel from "./components/user-panel/my-actions/ManageMyActionsPanel.vue";
import RegisterAccount from "./components/register/RegisterAccount.vue";
import LoginAccount from "./components/register/LoginAccount.vue";
import MyAccount from "./components/register/MyAccount.vue";
import ManageSuggestions from "./components/user-panel/manage-sugestions/ManageSuggestions.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: IndexPage },
    { path: "/acoes", component: ActivityList },
    {
      path: "/acoes/:id",
      component: ActivityComplete,
      name: "activityDetails",
    },
    {
      path: "/painel",
      component: TheMenuPanel,
    },
    {
      path: "/painel/manage-actions",
      component: ManageActionsPanel,
    },
    {
      path: "/painel/manage-accounts",
      component: ManageUsersPanel,
    },
    {
      path: "/painel/my-actions",
      component: ManageMyActionsPanel,
    },
    {
      path: "/register",
      component: RegisterAccount,
    },
    {
      path: "/login",
      component: LoginAccount,
    },
    {
      path: "/account",
      component: MyAccount,
    },
    {
      path: "/painel/sugestoes",
      component: ManageSuggestions,
    },
  ],
});

const app = createApp(App);
axios.defaults.headers.common["x-acess-token"] =
  sessionStorage.getItem("token");
app.component("base-button", BaseButton);
app.use(router);
app.mount("#app");
