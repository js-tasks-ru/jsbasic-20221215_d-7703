function showSalary(users, age) {
  let res = '';

    for (let i = 0; i < users.length; i++) {
        if (users[i].age <= age) !res ? res += `${users[i].name}, ${users[i].balance}` : res += `\n${users[i].name}, ${users[i].balance}`
    }

    return res;

}
