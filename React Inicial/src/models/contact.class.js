


export class Contact {

    name = '';
    surname = '';
    email = '';
    isConnected = false;


    constructor(name, surname, email, connected) {

        this.name = name;
        this.surname = surname;
        this.email = email;
        this.isConnected = connected;
    }

}