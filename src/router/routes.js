import Profile from "../pages/Profile.vue"
import Index from "../pages/Index.vue"
import AllCourses from "../pages/AllCourses.vue"
import Course from "@/pages/Course.vue"
import Register from "@/pages/Register.vue"
import Login from "@/pages/Login.vue"
import Employment from "@/pages/Employment.vue"

export const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/Profile",
    component: Profile,
  },
  {
    path: "/allCourses",
    component: AllCourses,
  },
  {
    path: "/course",
    component: Course,
  },
  {
<<<<<<< Updated upstream
    path: "/register",
    component: Register,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/employment",
    component: Employment,
=======
    path: "/Employment",
    component: Course,
>>>>>>> Stashed changes
  },
]
