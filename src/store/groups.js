import api from '../tools/api'
import { ADD_GROUP, GET_GROUPS } from './mutation-types'

const state = {
  groups: []
}

const actions = {
  addGroup({ commit }, name) {
    api.addGroup({ id: Date.now(), name })
      .then(group => commit(ADD_GROUP, group));
  },
  
  getGroups({ commit }) {
    api.getGroups().then(groups => commit(GET_GROUPS, groups));
  }
}

const mutations = {
  [ADD_GROUP](state, newGroup) {
    state.groups.push(newGroup);
  },

  [GET_GROUPS](state, groups) {
    state.groups = groups;
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}