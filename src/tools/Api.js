class Api {

  getUsers() {
    return new Promise((resolve) => {
      resolve(JSON.parse(localStorage.getItem("users") || "[]"));
    });
  }

  saveUser(user) {
    return new Promise((resolve) => {
      let users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));

      resolve(user);
    });
  }

  deleteUser(id) {
    return new Promise(resolve => {
      let users = JSON.parse(localStorage.getItem("users"));
      const index = users.findIndex(usr => usr.id === id);
      if (index === -1) {
        resolve(false);
      } else {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        resolve(true);
      }
    });
  }

}

const api = new Api();

export default api;
