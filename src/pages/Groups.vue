<template>
  <div>
    <h3>Groups</h3>
    <div class="row"><AddGroup /></div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Users count</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="group in groups" :key="group.id">
          <td>{{group.name}}</td>
          <td>{{group.usersCount}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AddGroup from '@/components/groups/AddGroup'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Groups',
  mounted () {
    this.getGroups();
  },
  computed: {
    ...mapState('groups', {
      groups: state => state.groups
    })
  },
  methods: {
    ...mapActions('groups', ['getGroups'])
  },
  components: { AddGroup }
}
</script>

<style>
</style>
