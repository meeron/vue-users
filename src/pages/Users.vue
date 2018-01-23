<template>
  <div>
    <h3>Users</h3>
    <div class="row">
      <AddUser />
    </div>
    <div class="row">
      <UsersList />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddUser from '@/components/users/AddUser'
import UsersList from '@/components/users/UsersList'

export default {
  name: 'Users',
  mounted () {
    this.getUsers();
  },
  methods: {
    ...mapActions('users', ['getUsers'])
  },
  components: { AddUser, UsersList }
}
</script>

<style>
</style>
