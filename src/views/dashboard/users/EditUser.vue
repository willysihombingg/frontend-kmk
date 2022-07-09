<template>
  <div class="flex justify-between px-4 mt-4 sm:px-8">
    <h2 class="text-2xl text-gray-600">Edit Data</h2>
    <div class="flex items-center space-x-1 text-xs">
      <router-link to="/" class="font-bold text-indigo-700">Home</router-link>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Users</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-2 w-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
      <span class="text-gray-600">Edit Users</span>
    </div>
  </div>
  <div class="p-4 mt-8 sm:px-8 sm:py-4">
    <div class="p-4 bg-white rounded">
      <div class="mt-10">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="name" class="block text-sm font-medium text-gray-700">Nama</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autocomplete="given-name"
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
                  <label for="nim" class="block text-sm font-medium text-gray-700">Nim</label>
                  <input
                    type="text"
                    name="nim"
                    id="nim"
                    autocomplete="family-name"
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
                <div class="col-span-6 sm:col-span-3">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
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
                <div class="col-span-6 sm:col-span-3">
                  <label for="department" class="block text-sm font-medium text-gray-700">Department</label>
                  <select
                    id="department"
                    name="department"
                    autocomplete="department"
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
                      focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
                      sm:text-sm
                    "
                  >
                    <option>Teknologi Informasi</option>
                    <option>Teknik Mesin</option>
                    <option>Teknik Elektro</option>
                    <option>Teknik Kimia</option>
                    <option>Teknik Sipil</option>
                    <option>Akuntansi</option>
                    <option>Administrasi Bisnis</option>
                    <option>Desain Produk</option>
                    <option>Pariwisata</option>
                    <option>Pelayaran</option>
                  </select>
                </div>
                <!-- <div class="col-span-6 sm:col-span-2">
                  <label for="country" class="block text-sm font-medium text-gray-700">Roles</label>
                  <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>ADMIN</option>
                    <option>USER</option>
                  </select>
                </div> -->
                <div class="col-span-6 sm:col-span-3">
                  <label for="handphone" class="block text-sm font-medium text-gray-700">Handphone</label>
                  <input
                    type="text"
                    name="handphone"
                    id="handphone"
                    autocomplete="email"
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
                  <label for="attachment" class="block text-sm font-medium text-gray-700">Attachment</label>
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
              <router-link v-slot="{ href, navigate }" to="/users" custom>
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
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                >
                  <a class="flex items-center" :href="href" @click="navigate">Back</a>
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
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
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
export default {}
</script>
