import { createWebHistory, createRouter } from "vue-router";
import Login from "@/views/Login.vue";
import Signup from "@/views/Signup.vue";
import Home from "@/views/Home.vue";
import Logout from "@/views/Logout.vue";
import Profile from "@/views/Profile.vue";
import { useUserStore } from "@/stores/user.store";

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
        path: "/logout",
        name: "logout",
        component: Logout
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
        meta: {
            allowAnonymous: true
        }
    }
    ,
    {
        path: "/profile",
        name: "Profile",
        component: Profile,
    
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const user = useUserStore();
    if (!to.meta.allowAnonymous && !user.isLoggedIn()) {
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