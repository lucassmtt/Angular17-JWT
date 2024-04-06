export class User {
  constructor(username: any, email: any, name: any) {
    this.username = username;
    this.email = email;
    this.name = name;
  }

  username: String
  email: String
  name: String
}

function jsonToUser(json: any): User {
  return new User(json.userName, json.email, json.name);
}
