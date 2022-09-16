import { LightningElement } from "lwc";

export default class App extends LightningElement {
    title = "Meu Cardzin";
    //criação de atributos
    nome = "Filipe Smith?"; //string
    idade = 16; //number
    email = 'f@f.com'; //string
    cpf = "00011122233"; //string
    //status = true; // false
    
    nomePet = "Caramelo";
    raca = "Vira Lata";
    peso = 35;
    idadePet = 3;
    
    
    /**
     * Array
     * 
     * nomeDaLista = [1,2,3,4,5]  colchetes
     * 
     * 
     * Object 
     * 
     * nomeDoObject = {
     *  key1:value,
    *   key2:value,
        .
        .
        .
        keyn:value
     * }
     * 
     * 
     * Lista de Objetos
     *  ->>>  [{...},{...},{...},{...},{...},{...}]
     */

    //objeto tem nome patati

    patati = {
        title : "Meu Cardzin do OBJ",
        nome: "Adriano?",
        idade : 38,
        email:"a@a.com",
        cpf:"33322211100",
        nomePet:"Jujuba",
        raca: "BorderRadius",
        peso: 5,
        idadePet: 99
    };

    //puxar uma key especifica
    //nomeObjeto.nomeKey
    //patati.idade
}