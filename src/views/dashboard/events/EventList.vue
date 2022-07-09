<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">Event List</h2>

    <div class="flex items-center space-x-1 text-xs">
      <router-link to="/" class="font-bold text-indigo-700"
        >Dashboard</router-link
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-2 w-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
      <span class="text-gray-600">Events</span>
    </div>
  </div>

  <div class="p-4 mt-4 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
      <div class="flex justify-between">
        <div>
          <div class="relative text-gray-400"></div>
        </div>
        <router-link v-slot="{ href, navigate }" to="/events/create" custom>
          <button
            class="
              flex
              items-center
              bg-blue-400
              p-1
              mb-2
              text-white
              rounded
              text-xs
              hover:bg-blue-500
            "
          >
            <a class="flex items-center" :href="href" @click="navigate">
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
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create Data
            </a>
          </button>
        </router-link>
      </div>
      <table class="w-full text-gray-500">
        <thead class="border-b">
          <tr class="text-sm">
            <th class="text-left text-gray-600">No</th>
            <th class="text-left text-gray-600">Event Name</th>
            <th class="text-left text-gray-600">Chairman</th>
            <th class="text-left text-gray-600">Paricipant</th>
            <th class="text-left text-gray-600">Handphone</th>
            <th class="text-left text-gray-600">Title</th>
            <!-- <th class="text-right text-gray-600">Place</th> -->
            <th class="text-left text-gray-600">Date</th>
            <th class="text-right text-gray-600"></th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr
            class="h-10"
            v-for="(event, index) in eventList"
            v-bind:key="event.id"
          >
            <td class="text-xs text-left">{{ index + 1 }}</td>
            <td class="text-xs text-left">{{ event.event_name }}</td>
            <td class="text-xs text-left">{{ event.chairman }}</td>
            <td class="text-xs text-left">{{ event.participant }}</td>
            <td class="text-xs text-left">{{ event.handphone }}</td>
            <td class="text-xs text-left">{{ event.title }}</td>
            <td class="text-xs text-left">{{ event.date }}</td>
            <td class="text-right">
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton>
                    <DotsVerticalIcon class="h-5 w-5 text-blue-500" />
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="
                      absolute
                      right-0
                      w-32
                      mt-1
                      origin-top-right
                      bg-white
                      divide-y divide-gray-100
                      rounded-md
                      shadow-lg
                      ring-1 ring-black ring-opacity-5
                      z-50
                      focus:outline-none
                    "
                  >
                    <div class="px-1 py-1">
                      <router-link
                        v-slot="{ href, navigate }"
                        to="/events/detail-event"
                        custom
                      >
                        <button
                          class="
                            group
                            flex
                            rounded-md
                            items-center
                            w-full
                            px-2
                            py-2
                            text-sm
                          "
                        >
                          <a
                            class="flex items-center"
                            :href="href"
                            @click="navigate"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-3 w-5 mr-2"
                              fill="none"
                              viewBox="0 0 15 15"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                              />
                            </svg>
                            Detail
                          </a>
                        </button>
                      </router-link>
                      <router-link
                        v-slot="{ href, navigate }"
                        :to="{
                          name: 'edit-event',
                          params: { id: event._id },
                        }"
                        custom
                      >
                        <button
                          class="
                            group
                            flex
                            rounded-md
                            items-center
                            w-full
                            px-2
                            py-2
                            text-sm
                          "
                        >
                          <a
                            class="flex items-center"
                            :href="href"
                            @click="navigate"
                          >
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
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              />
                            </svg>
                            Edit
                          </a>
                        </button>
                      </router-link>
                      <button
                        @click="eventDelete(index)"
                        class="
                          group
                          flex
                          rounded-md
                          items-center
                          w-full
                          px-2
                          py-2
                          text-sm
                        "
                      >
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
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                        Delete
                      </button>
                      <!-- :class="[
                            active ? 'bg-red-400 text-white' : 'text-gray-900',
                            'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                          ]" -->
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="7" class="py-2">
              <div
                class="
                  hidden
                  sm:flex-1 sm:flex sm:items-center sm:justify-between
                "
              >
                <div>
                  <p class="text-sm text-gray-500">
                    Showing
                    <span class="font-medium">1</span>
                    to
                    <span class="font-medium">5</span>
                    of
                    <span class="font-medium">42</span>
                    results
                  </p>
                </div>
                <div>
                  <nav
                    class="
                      relative
                      z-0
                      inline-flex
                      rounded-md
                      shadow-sm
                      -space-x-px
                    "
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-2
                        rounded-l-md
                        border border-gray-300
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Previous</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </a>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <a
                      href="#"
                      aria-current="page"
                      class="
                        z-10
                        bg-indigo-50
                        border-indigo-500
                        text-indigo-600
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      1
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      2
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        hidden
                        md:inline-flex
                        relative
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      3
                    </a>
                    <span
                      class="
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border border-gray-300
                        text-sm
                        font-medium
                        text-gray-700
                      "
                    >
                      ...
                    </span>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        hidden
                        md:inline-flex
                        relative
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      8
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      9
                    </a>
                    <a
                      href="#"
                      class="
                        border-gray-300
                        text-gray-500
                        hover:bg-gray-50
                        relative
                        inline-flex
                        items-center
                        px-4
                        py-1
                        border
                        text-sm
                        font-medium
                      "
                    >
                      10
                    </a>
                    <a
                      href="#"
                      class="
                        relative
                        inline-flex
                        items-center
                        px-2
                        py-1
                        rounded-r-md
                        border border-gray-300
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
// import eventList from "@/data/events/eventsList.json";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getAllEvent, deleteEvent } from "@/networking/api-request";
import { DotsVerticalIcon } from "@heroicons/vue/solid";
// import axios from "axios";

export default {
  components: {
    Menu,
    MenuButton,
    MenuItems,
    // MenuItem,
    DotsVerticalIcon,
  },

  setup() {
    const selectAll = ref(false);
    const route = useRoute();

    return {
      // eventList,
      selectAll,
      route,
    };
  },
  data() {
    return {
      eventList: [],
    };
  },

  async mounted() {
    this.getEvent();
    this.id = this.$route.params.id;
  },

  methods: {
    async getEvent() {
      const allEvent = await getAllEvent();
      // console.log(allEvent);
      this.eventList = allEvent.data.data;
    },

    async eventDelete(index) {
      const id = this.eventList[index]._id;
      deleteEvent(id);
      this.getEvent();
    },
  },
};
</script>
