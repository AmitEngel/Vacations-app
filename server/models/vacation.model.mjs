class VacationModel {
    id;
    description;
    destination;
    picture;
    from_date;
    to_date;
    price;
    followers;

    /**
     * @param {number} id
     * @param {string} description 
     * @param {string} destination 
     * @param {string} picture 
     * @param {Date} from_date
     * @param {Date} to_date  
     * @param {number} price 
     * @param {number} followers 
     */
    constructor(description, destination, picture, from_date, to_date, price, followers, id) {
        this.description = description;
        this.destination = destination;
        this.picture = picture;
        this.from_date = from_date;
        this.to_date = to_date;
        this.price = price;
        this.followers = followers;
        this.id = id;
    }
}

export {VacationModel}