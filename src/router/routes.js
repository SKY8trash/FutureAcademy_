import Profile from "../pages/Profile.vue"
import Index from "../pages/Index.vue"
import AllCourses from "../pages/AllCourses.vue"
import Course from "@/pages/Course.vue"
import Register from "@/pages/Register.vue"
import Login from "@/pages/Login.vue"
// import Employment from "@/pages/Employment.vue"
import AdminUsers from "@/pages/AdminUsers.vue"
import AdminCourse from "@/pages/AdminCourse.vue"
import AdminTeachers from "@/pages/AdminTeachers.vue"

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
    path: "/course/:id",
    component: Course,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/Login",
    component: Login,
  },
  {
    path: "/AdminUsers",
    component: AdminUsers,
  },
  {
    path: "/AdminCourse",
    component: AdminCourse,
  },
  {
    path: "/AdminTeachers",
    component: AdminTeachers,
  },
]
