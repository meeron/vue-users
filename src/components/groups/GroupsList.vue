<template>
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
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GroupsList',
  computed: {
    ...mapState('groups', {
      groups: state => state.groups
    })
  }
}
</script>

