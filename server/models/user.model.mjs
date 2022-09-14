class UserModel {
    id;
    first_name;
    last_name;
    username;
    password;
    /**
     * 
     * @param {number} id 
     * @param {string} first_name 
     * @param {string} last_name 
     * @param {string} username 
     * @param {string} password 
     */
    constructor(first_name, last_name, username, password, id) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.username = username;
        this.password = password;
        this.id = id;
    }
}

export {UserModel}