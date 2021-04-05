export class User {
  constructor(user) {
    this._id =  user ? user._id : 0;
    this.first_name = user && user.first_name ? user.first_name : "";
    this.last_name = user && user.last_name ? user.last_name : "";
    this.email = user && user.email ? user.email : "";
    this.avatar = user && user.avatar ? user.avatar : "";
    this.about = user && user.about ? user.about : "";
    this.phone = user && user.phone ? user.phone : "";
    this.role = user && user.role ? user.role : "user";
    this.permissions = user && user.permissions ? user.permissions : [];
    this.status = user && user.status ? user.status : 0;
    this.address = user && user.address ? user.address : new Address();
  }
}

export class Address {
  constructor(ad) {
    this.street = ad ? ad.street : "";
    this.state = ad ? ad.state : "";
    this.city = ad ? ad.city : "";
    this.country = ad ? ad.country : "";
    this.suburb = ad ? ad.suburb : "";
    this.zipcode = ad ? ad.zipcode : "";
  }
}
