// import { mysql } from '../db';
import { hash, verify } from 'argon2';
import RandExp from 'randexp';
const idRex = /[1-9][0-9]{15}/;

export default function signup(name: string, password: string): any {
    return new Promise((resolve, reject) => {
        hash(password).then(h_password => {
            // const id = new RandExp(idRex).gen()
            // mysql('user').insert({
            //     id, name, password: h_password
            // })
            resolve('okok')
        })
    })
}

// function getId(): Promise<number> {
//     return new Promise((resolve, reject) => {

//     })
// }