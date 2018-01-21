import api from '../tools/api'
import { GET_USERS, INIT_NEW_USER, SAVE_USER, DELETE_USER } from './mutation-types'

const state = {
  users: [],
  addUser: {
    isAdding: false,
    newUser: null
  }
}

const actions = {
  getUsers({ commit }) {
    api.getUsers().then(users => {
      commit(GET_USERS, users);
    });
  },
  createNewUser({ commit }, isAdding) {
    commit(INIT_NEW_USER, isAdding);
  },
  save({ commit, state }) {
    const user = {
      ...state.addUser.newUser,
      id: Date.now()
    };

    api.saveUser(user).then(user => {
      commit(SAVE_USER, user);
    });
  },
  remove({ commit, state }, id) {
    api.deleteUser(id).then(result => {
      if (result) {
        const index = state.users.findIndex(usr => usr.id === id);
        commit(DELETE_USER, index);
      } else {
        throw new Error(`User ${id} not found.`);
      }
    });
  }
}

const getters = {
}

const mutations = {
  [GET_USERS](state, users) {
    state.users = users;
  },
  [INIT_NEW_USER](state, isAdding) {
    state.addUser.newUser = { name: '', email: '' };
    state.addUser.isAdding = isAdding; 
  },
  [SAVE_USER](state, user) {
    state.users.push(user);
  },
  [DELETE_USER](state, index) {
    state.users.splice(index, 1);
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
