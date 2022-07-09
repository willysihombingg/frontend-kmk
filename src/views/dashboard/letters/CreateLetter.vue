<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">Create Data</h2>
    <div class="flex items-center space-x-1 text-xs">
      <router-link to="/" class="font-bold text-indigo-700">Home</router-link>
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
      <span class="text-gray-600">Letters</span>
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
      <span class="text-gray-600">Create Letters</span>
    </div>
  </div>
  <div class="p-4 mt-8 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
      <div class="mt-10">
        <form class="space-y-4" @submit.prevent="onLetterCreate">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-2">
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700"
                    >From</label
                  >
                  <input
                    id="from"
                    v-model="from"
                    type="text"
                    name="from"
                    autocomplete="from"
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
                    >To</label
                  >
                  <input
                    id="to"
                    v-model="to"
                    type="text"
                    name="to"
                    autocomplete="to"
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
                    >Type Letter</label
                  >
                  <select
                    id="letter_type"
                    v-model="letter_type"
                    name="letter_type"
                    autocomplete="letter_type"
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
                  >
                    <option>Outgoing</option>
                    <option>Entry</option>
                  </select>
                </div>
                <div
                  class="col-span-6 sm:col-span-2"
                  v-if="letter_type == 'Entry'"
                >
                  <label
                    for="receiver"
                    class="block text-sm font-medium text-gray-700"
                    >Receiver</label
                  >
                  <select
                    id="receiver"
                    v-model="receiver"
                    name="receiver"
                    autocomplete="receiver"
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
                  >
                    <option
                      v-for="user in users"
                      v-bind:key="user._id"
                      :value="user._id"
                    >
                      {{ user.name }}
                    </option>
                  </select>
                </div>
                <div
                  class="col-span-6 sm:col-span-2"
                  v-if="letter_type == 'Outgoing'"
                >
                  <label
                    for="courier"
                    class="block text-sm font-medium text-gray-700"
                    >Courier</label
                  >
                  <select
                    id="courier"
                    v-model="courier"
                    name="courier"
                    autocomplete="courier"
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
                  >
                    <option
                      v-for="user in users"
                      v-bind:key="user._id"
                      :value="user._id"
                    >
                      {{ user.name }}
                    </option>
                  </select>
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="note"
                    class="block text-sm font-medium text-gray-700"
                    >Note</label
                  >
                  <textarea
                    id="note"
                    v-model="note"
                    name="note"
                    cols="10"
                    rows="5"
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
                <div
                  class="col-span-6 sm:col-span-2"
                  v-if="letter_type == 'Entry'"
                >
                  <label
                    for="courier"
                    class="block text-sm font-medium text-gray-700"
                    >Entry Date</label
                  >
                  <input
                    id="entry_date"
                    v-model="entry_date"
                    type="date"
                    name="entry_date"
                    autocomplete="entry_date"
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
                <div
                  class="col-span-6 sm:col-span-2"
                  v-if="letter_type == 'Outgoing'"
                >
                  <label
                    for="courier"
                    class="block text-sm font-medium text-gray-700"
                    >OutGoing Date</label
                  >
                  <input
                    id="outgoing_date"
                    v-model="outgoing_date"
                    type="date"
                    name="outgoing_date"
                    autocomplete="outgoing_date"
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
                <div class="col-span-6">
                  <label
                    for="attachment"
                    class="block text-sm font-medium text-gray-700"
                    >Attachment</label
                  >
                  <input
                    id="attachment"
                    v-on:change="previewFiles"
                    type="file"
                    name="attachment"
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
              <router-link v-slot="{ href, navigate }" to="/letters" custom>
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
// import axios from "axios";
import { letterCreate } from "../../../networking/api-request";
import { getAllUser } from "../../../networking/api-request";
export default {
  data() {
    return {
      from: "",
      to: "",
      receiver: "",
      courier: "",
      letter_type: "",
      note: "",
      outgoing_date: "",
      entry_date: "",
      attachment: "",
      users: [],
    };
  },
  async mounted() {
    const allUser = await getAllUser();
    // console.log(allUser);
    this.users = allUser.data.data;
  },

  methods: {
    async onLetterCreate() {
      let formData = new FormData();
      formData.append("from", this.from);
      formData.append("to", this.to);
      formData.append("receiver", this.receiver);
      formData.append("courier", this.courier);
      formData.append("letter_type", this.letter_type);
      formData.append("note", this.note);
      formData.append("outgoing_date", this.outgoing_date);
      formData.append("entry_date", this.entry_date);
      formData.append("attachment", this.attachment);
      console.log("formdata:", formData.get("from"));
      const result = await letterCreate(formData);
      console.log(result);
      if (result.data) {
        this.$router.push("/letters");
      } else if (result.message == "Network Error") {
        console.log("Wrong Data");
      }
    },
    previewFiles(event) {
      console.log("type: ", typeof event.target.files[0]);
      console.log("files :", event.target.files[0]);
      this.attachment = event.target.files[0];
    },
  },
};
</script>
