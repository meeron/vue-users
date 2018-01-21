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
import AddUser from '@/components/users/AddUser'
import UsersList from '@/components/users/UsersList'

export default {
  name: 'Users',
  mounted () {
    this.$store.dispatch('getUsers');
  },
  components: { AddUser, UsersList }
}
</script>

<style>
</style>
