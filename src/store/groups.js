import api from '../tools/api'
import { ADD_GROUP, GET_GROUPS, DELETE_GROUP } from './mutation-types'

const state = {
  groups: [],
  fetched: false
}

const actions = {
  addGroup({ commit }, name) {
    api.addGroup({ id: Date.now(), name })
      .then(group => commit(ADD_GROUP, group));
  },
  
  getGroups({ commit }) {
    api.getGroups().then(groups => commit(GET_GROUPS, groups));
  },

  remove({ commit, state }, id) {
    api.deleteGroup(id).then(result => {
      if (result) {
        const index = state.groups.findIndex(grp => grp.id === id);
        commit(DELETE_GROUP, index);
      } else {
        throw new Error(`Group ${id} not found.`);
      }
    });    
  }
}

const mutations = {
  [ADD_GROUP](state, newGroup) {
    state.groups.push(newGroup);
  },

  [GET_GROUPS](state, groups) {
    state.groups = groups;
    state.fetched = true;
  },

  [DELETE_GROUP](state, index) {
    state.groups.splice(index, 1);
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}