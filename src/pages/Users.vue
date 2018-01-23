<template>
  <div>
    <h3>Users</h3>
    <div class="row">
      <AddUser />
    </div>
    <div v-if="isLoading" class="row">
      <Preloader :isLoading="isLoading" type="linear" />
    </div>
    <div v-else class="row">
      <UsersList />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddUser from '@/components/users/AddUser'
import UsersList from '@/components/users/UsersList'
import Preloader from '@/components/Preloader'

export default {
  name: 'Users',
  data() {
    return { isLoading: false }
  },
  mounted () {
    this.isLoading = true;
    this.getUsers().then(() => {
      this.isLoading = false;
    });
  },
  methods: {
    ...mapActions('users', ['getUsers'])
  },
  components: { AddUser, UsersList, Preloader }
}
</script>

<style>
</style>
