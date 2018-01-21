<template>
  <button v-if="!isAdding" @click="createNewUser" class="btn-floating btn-small waves-effect waves-light blue">
    <i class="material-icons">add</i>
  </button>
  <form novalidate class="col s5" v-else @submit.prevent="saveUser">
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
      <input type="reset" value="Cancel" class="btn btn-small" @click="cancelEdit" />
      <button class="btn waves-effect waves-light" type="submit">
        Save
        <i class="material-icons right">send</i>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddUser',
  data() {
    return this.$store.state.users.addUser;
  },
  methods: {
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

