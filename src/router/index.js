import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/Dashboard.vue"),
    children: [
      {
        path: "",
        component: () => import("@/views/dashboard/Home.vue"),
      },
      {
        path: "users",
        name: "user-list",
        component: () => import("@/views/dashboard/users/UserList.vue"),
      },
      {
        path: "users/create",
        name: "add-user",
        component: () => import("@/views/dashboard/users/CreateUser.vue"),
      },
      {
        path: "users/edit",
        name: "edit-user",
        component: () => import("@/views/dashboard/users/EditUser.vue"),
      },
      {
        path: "letters",
        name: "letter-list",
        component: () => import("@/views/dashboard/letters/LetterList.vue"),
      },
      {
        path: "letters/create",
        name: "add-letter",
        component: () => import("@/views/dashboard/letters/CreateLetter.vue"),
      },
      {
        path: "letters/edit/:id",
        name: "edit-letter",
        component: () => import("@/views/dashboard/letters/EditLetter.vue"),
      },
      {
        path: "letters/letters-detail",
        name: "letter-detail",
        component: () => import("@/views/dashboard/letters/LetterDetail.vue"),
      },
      {
        path: "events",
        name: "event-list",
        component: () => import("@/views/dashboard/events/EventList.vue"),
      },
      {
        path: "events/create",
        name: "add-event",
        component: () => import("@/views/dashboard/events/CreateEvent.vue"),
      },
      {
        path: "events/edit/:id",
        name: "edit-event",
        component: () => import("@/views/dashboard/events/EditEvent.vue"),
      },
      {
        path: "events/detail-event",
        name: "event-detail",
        component: () => import("@/views/dashboard/events/Detail-Event.vue"),
      },
      // {
      //   path: "events/delete-event:id",
      //   name: "delete-event",
      //   component: () => import("@/views/dashboard/events/Detail-Event.vue"),
      // },
      // {
      //   path: '/card',
      //   name: 'card',
      //   component: () => import('@/views/Card.vue'),
      // },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("@/views/Register.vue"),
  },
  {
    path: "/forgot",
    component: () => import("@/views/ForgotPassword.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
