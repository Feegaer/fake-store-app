type Geolocation = {
  lat: string;
  lng: string;
}

type Address = {
  geolocation: Geolocation;
  city: string;
  street: string;
  number: number;
  zipcode: string;
}

type Names = {
  firstname: string;
  lastname: string;
}


export class User {
  readonly id: number;
  readonly email: string;
  readonly username: string;
  readonly password: string;
  readonly address: Address;
  readonly phone: string;
  readonly name: Names;

  constructor(
    id: number,
    email: string,
    username: string,
    password: string,
    address: Address,
    phone: string,
    name: Names
  ) {
    this.id = id;
    this.email = email;
    this.username = username;
    this.password = password;
    this.address = address;
    this.phone = phone;
    this.name = name;
  }
}
