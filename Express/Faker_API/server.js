const express = require("express");
const app = express();
const port = 5000;
const { faker } = require('@faker-js/faker');

class Usuario {
    constructor(){
        this.id = faker.string.uuid();
        this.name = faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.phone = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Empresa{
    constructor(){
        this.id = faker.string.uuid();
        this.name = faker.company.name();
        this.diretion = {
            calle: faker.location.streetAddress(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            pais: faker.location.country()
        };
    }
}


app.get("/api/users/new", (req,res)=>{
    const user = new Usuario();
    res.json({user});
});

app.get("/api/companies/new", (req,res)=>{
    const company = new Empresa();
    res.json({company});
});

app.get("/api/company", (req,res)=>{
    const user = new Usuario();
    const company = new Empresa();
    res.json({
        user: user,
        company: company
    });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));