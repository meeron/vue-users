<template>
  <div>
    <h3>Users</h3>
    <div class="row">
      <AddUser />
    </div>
    <table class="row">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>
            <button @click="remove(user)" class="btn-floating btn-small waves-effect waves-light red">
              <i class="material-icons">remove</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddUser from '@/components/users/AddUser'

export default {
  name: 'Users',
  mounted () {
    this.$store.dispatch('getUsers');
  },
  computed: {
    users() { return this.$store.state.users.users }
  },
  methods: {
    remove(user) {
      if (confirm(`Are you sure you want to delete user '${user.name}'`)) {
        this.$store.dispatch('remove', user.id);
      }
    }    
  },
  components: { AddUser }
}
</script>

<style>
</style>
