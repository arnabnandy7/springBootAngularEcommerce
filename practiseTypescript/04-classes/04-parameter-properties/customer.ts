class CustomerP{
    
    constructor(private _firstName: string, private _lastName: string){
        
    }

    get lastName(): string {
        return this._lastName;
    }
    set lastName(value: string) {
        this._lastName = value;
    }
    get firstName(): string {
        return this._firstName;
    }
    set firstName(value: string) {
        this._firstName = value;
    }
}

// let's create an instance

let myCustomerP = new CustomerP("Martin","Dixon");

console.log(myCustomerP.firstName);
console.log(myCustomerP.lastName);