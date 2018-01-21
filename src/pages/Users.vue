<template>
  <div>
    <h3>Users</h3>
    <div class="row">
      <button v-if="!isAdding" v-on:click="createNewUser" class="btn-floating btn-small waves-effect waves-light blue">
        <i class="material-icons">add</i>
      </button>
      <form novalidate class="col s5" v-else v-on:submit.prevent="saveUser">
        <div class="row">
          <div class="input-field">
            <input v-validate="'required'" v-model="newUser.name" id="name" type="text" class="validate">
            <label for="name">Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field">
            <input v-validate="'required|email'" v-model="newUser.email" id="email" type="email" class="validate">
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <input type="reset" value="Cancel" class="btn btn-small" v-on:click="cancelEdit" />
          <button class="btn waves-effect waves-light" type="submit">
            Save
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
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
export default {
  name: 'Users',
  mounted () {
    this.$store.dispatch('getUsers');
  },
  data() {
    return this.$store.state.users;
  },
  methods: {
    remove(user) {
      if (confirm(`Are you sure you want to delete user '${user.name}'`)) {
        this.$store.dispatch('remove', user.id);
      }
    },
    createNewUser() {
      this.$store.dispatch('createNewUser', true);
    },
    cancelEdit() {
       this.$store.dispatch('createNewUser', false);     
    },
    saveUser() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.$store.dispatch('save');
          this.cancelEdit();
        }
      });
    }    
  }
}
</script>

<style>
</style>
