import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Home from "@/views/Home.vue"
import AuthService from "@/services/auth.service";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            allowAnonymous: true
        }
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.meta.allowAnonymous && !AuthService.isLoggedIn()) {
        next({
            path: '/login',
            query: {
                redirect: to.fullPath
            }
        });
    }
    else {
        next();
    }
})

export default router;