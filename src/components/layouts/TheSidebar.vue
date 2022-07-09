<template>
  <aside class="hidden w-64 bg-blue-500 text-white sm:block">
    <div
      class="
        py-3
        text-1xl
        uppercase
        text-center
        tracking-widest
        bg-blue-400
        mb-8
        h-17
      "
    >
      <router-link to="/" class="text-blue-900"
        ><b>ARSIP KMK POLNES</b></router-link
      >
    </div>

    <nav class="text-sm text-white-300">
      <ul class="flex flex-col">
        <li
          class="
            px-4
            py-2
            text-xs
            uppercase
            tracking-wider
            text-blue-900
            font-bold
          "
        >
          Dashboard
        </li>

        <router-link v-slot="{ isExactActive, href, navigate }" to="/" custom>
          <li
            class="px-4 cursor-pointer"
            :class="[
              isExactActive ? 'bg-blue-400' : 'hover:bg-blue-400 bg-blue-500',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Dashboard
            </a>
          </li>
        </router-link>

        <li
          class="
            px-4
            py-2
            mt-3
            text-xs
            uppercase
            tracking-wider
            text-blue-900
            font-bold
          "
        >
          Data User & Arsip
        </li>

        <router-link
          v-slot="{ isExactActive, href, navigate }"
          to="/users"
          custom
        >
          <li
            class="px-4 cursor-pointer"
            :class="[
              isExactActive ? 'bg-blue-400' : 'hover:bg-blue-400 bg-blue-500',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              User
            </a>
          </li>
        </router-link>
        <router-link
          v-slot="{ isExactActive, href, navigate }"
          to="/events"
          custom
        >
          <li
            class="px-4 cursor-pointer"
            :class="[
              isExactActive ? 'bg-blue-400' : 'hover:bg-blue-400 bg-blue-500',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2v2zM4 9v10h16V9H4zm2 4h5v4H6v-4z"
                />
              </svg>
              Event
            </a>
          </li>
        </router-link>
        <router-link
          v-slot="{ isExactActive, href, navigate }"
          to="/letters"
          custom
        >
          <li
            class="px-4 cursor-pointer"
            :class="[
              isExactActive ? 'bg-blue-400' : 'hover:bg-blue-400 bg-blue-500',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 3H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM4 10h6v1H4v-1zm8 4H4v-1h8v1zm5-6h-3V5h3v3z"
                />
              </svg>
              Letter
            </a>
          </li>
        </router-link>
        <li
          class="
            px-4
            py-2
            mt-3
            text-xs
            uppercase
            tracking-wider
            text-blue-900
            font-bold
          "
        >
          Setings
        </li>

        <router-link
          v-slot="{ isExactActive, href, navigate }"
          to="/login"
          custom
        >
          <li
            class="px-4 cursor-pointer"
            :class="[
              isExactActive ? 'bg-blue-400' : 'hover:bg-blue-400 bg-blue-500',
            ]"
          >
            <a class="py-3 flex items-center" :href="href" @click="navigate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 10L8 5v3H1v4h7v3l6-5zm3 7H9v2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2H9v2h8v14z"
                />
              </svg>
              Log In
            </a>
          </li>
        </router-link>
        <li
          class="px-4 cursor-pointer"
          :class="[
            isExactActive ? 'bg-blue-400' : 'hover:bg-blue-400 bg-blue-500',
          ]"
        >
          <a class="py-3 flex items-center" :href="href" @click="onLogOut">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 mr-2"
              fill="none"
              viewBox="4 0 25 25"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.8418 17.385L15.262 15.9768L11.3428 12.0242L20.4857 12.0242C21.038 12.0242 21.4857 11.5765 21.4857 11.0242C21.4857 10.4719 21.038 10.0242 20.4857 10.0242L11.3236 10.0242L15.304 6.0774L13.8958 4.6572L7.5049 10.9941L13.8418 17.385Z"
              />
            </svg>
            Log Out
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  methods: {
    onLogOut() {
      console.log("ini log out");
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      this.$router.push("/login");
    },
  },

  setup() {
    const route = useRoute();

    const isUserActive = computed(() => {
      const names = ["user-list"];

      return names.includes(route.name);
    });
    const isLetterActive = computed(() => {
      const names = ["letter-list"];

      return names.includes(route.name);
    });
    const isEventActive = computed(() => {
      const names = ["event-list"];

      return names.includes(route.name);
    });

    return {
      route,
      isUserActive,
      isLetterActive,
      isEventActive,
    };
  },
};
</script>
