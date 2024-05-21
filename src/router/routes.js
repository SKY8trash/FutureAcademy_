import Profile from "../pages/Profile.vue"
import Index from "../pages/Index.vue"
import AllCourses from "../pages/AllCourses.vue"
import Course from "@/pages/Course.vue"

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
]
