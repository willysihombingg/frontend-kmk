<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">Edit Data</h2>
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
      <router-link to="/events" class="text-gray-600">Events</router-link>
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
      <router-link to="/events/create" class="text-gray-600"
        >Edit Events</router-link
      >
    </div>
  </div>
  <div class="p-4 mt-8 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
      <div class="mt-10">
        <form @submit.prevent="onUpdateEvent">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >Event Name</label
                  >
                  <input
                    id="event_name"
                    v-model="event_name"
                    type="text"
                    name="event_name"
                    autocomplete="event_name"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>

                <div class="col-span-2 sm:col-span-2">
                  <label
                    for="to"
                    class="block text-sm font-medium text-gray-700"
                    >Chairman</label
                  >
                  <input
                    id="chairman"
                    v-model="chairman"
                    type="text"
                    name="chairman"
                    autocomplete="chairman"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="receiver"
                    class="block text-sm font-medium text-gray-700"
                    >Participant</label
                  >
                  <input
                    id="participant"
                    v-model="participant"
                    type="text"
                    name="participant"
                    autocomplete="participant"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="courier"
                    class="block text-sm font-medium text-gray-700"
                    >Handphone</label
                  >
                  <input
                    id="handphone"
                    v-model="handphone"
                    type="text"
                    name="handphone"
                    autocomplete="handphone"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="courier"
                    class="block text-sm font-medium text-gray-700"
                    >Title</label
                  >
                  <input
                    id="title"
                    v-model="title"
                    type="text"
                    name="title"
                    autocomplete="title"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="department"
                    class="block text-sm font-medium text-gray-700"
                    >Date</label
                  >
                  <input
                    id="date"
                    v-model="date"
                    name="date"
                    type="date"
                    autocomplete="date"
                    class="
                      mt-1
                      block
                      w-full
                      py-2
                      px-3
                      border border-gray-300
                      bg-white
                      rounded-md
                      shadow-sm
                      focus:outline-none
                      focus:ring-indigo-500
                      focus:border-indigo-500
                      sm:text-sm
                    "
                  />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="place"
                    class="block text-sm font-medium text-gray-700"
                    >Place</label
                  >
                  <textarea
                    id="place"
                    v-model="place"
                    name="place"
                    cols="10"
                    rows="5"
                    autocomplete="place"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  ></textarea>
                </div>
                <div class="col-span-6">
                  <label
                    for="attachment"
                    class="block text-sm font-medium text-gray-700"
                    >Attachment</label
                  >
                  <input
                    type="file"
                    name="attachment"
                    id="attachment"
                    autocomplete="attachment"
                    class="
                      mt-1
                      focus:ring-indigo-500 focus:border-indigo-500
                      block
                      w-full
                      shadow-sm
                      sm:text-sm
                      border-gray-300
                      rounded-md
                    "
                  />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <router-link v-slot="{ href, navigate }" to="/events" custom>
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    mr-2
                    py-2
                    px-4
                    border border-transparent
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    bg-indigo-600
                    hover:bg-indigo-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                >
                  <a class="flex items-center" :href="href" @click="navigate"
                    >Back</a
                  >
                </button>
              </router-link>
              <button
                type="submit"
                class="
                  inline-flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  shadow-sm
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { getEventDetail, updateEvent } from "@/networking/api-request";

export default {
  data() {
    return {
      id: "",
      event_name: "",
      chairman: "",
      participant: "",
      handphone: "",
      title: "",
      place: "",
      date: "",
      attachment: "",
    };
  },
  async mounted() {
    this.id = this.$route.params.id;
    this.getEventDetail();
  },
  methods: {
    async getEventDetail() {
      const eventDetail = await getEventDetail(this.id);
      if (eventDetail.data) {
        let e = eventDetail.data.data;

        this.chairman = e.chairman;
        this.event_name = e.event_name;
        this.handphone = e.handphone;
        this.participant = e.participant;
        this.place = e.place;
        this.title = e.title;
        this.date = e.date;
      }
      this.eventList = eventDetail.data.data;
    },
    async onUpdateEvent() {
      const result = await updateEvent(
        this.id,
        this.event_name,
        this.chairman,
        this.participant,
        this.handphone,
        this.title,
        this.place,
        this.date,
        this.attachment
      );
      console.log(result);
      if (result.data) {
        // localStorage.setItem('token', result.data.data.token)
        this.$router.push("/events");
      } else if (result.message == "Network Error") {
        console.log("Wrong data");
      }
    },
  },
};
</script>
