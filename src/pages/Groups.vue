<template>
  <div>
    <h3>Groups</h3>
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
export default {
  name: 'Groups',
  data() {
    return {
      groups: [
        { id: 1, name: "Group 1", usersCount: 1 },
        { id: 2, name: "Group 2", usersCount: 2 }
      ]
    };
  }
}
</script>

<style>
</style>
