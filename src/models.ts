export enum accessOptions {
    administrator = "administrador",
    manager = "gerente",
    employee = "funcionário",
    undefined = 'Não Definido'
  }

  /*
  interface IPerson {
    fullName: string;
    address?: string[];
  }

  interface IPerson {
    addPerson(): void;
    updatePerson(): void;
  }

  
  export interface IUser extends IPerson {
    register?: string | number;
    access?: accessOptions;
    active?: boolean;
  }
*/

  class Person {
    // Propriedades
    address?:string[];

    // Construtor
    constructor(public fullName: string){

    }
  }

  export class User extends Person {
    regidter?: string | number;
    access?: accessOptions;
    active?: boolean;

    constructor(public fullName: string,
      public register?: string | number){
      super(fullName);
    }
  }