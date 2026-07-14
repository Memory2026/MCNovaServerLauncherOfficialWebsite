import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/home/HomeView.vue'
import Download from '../views/download/DownloadView.vue'
import Docs from '../views/docs/DocsView.vue'
import ChangeLog from '../views/changelog/ChangelogView.vue'
import About from '../views/about/AboutView.vue'
import NotFound from '../views/notfound/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        },
        {
            path: "/download",
            name: "Download",
            component: Download,
        },
        {
            path: "/docs",
            name: "Docs",
            component: Docs,
        },
        {
            path: "/changelog",
            name: "Changelog",
            component: ChangeLog,
        },
        {
            path: "/about",
            name: "About",
            component: About,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "404",
            component: NotFound,
        }
    ],

    scrollBehavior() {
        return {
            top: 0,
            behavior: "smooth",
        };
    }
});

export default router;