import * as fieldtypes from './fieldtypes.ts';

type userSpecicStatus_t = fieldtypes.basic_stat_t[number] | fieldtypes.custom_stat_t[number];


type user = {
    uname : fieldtypes.uname_t;
    password: fieldtypes.pass_t;
    uuid: number;
    fname : fieldtypes.name_t;
    lname : fieldtypes.name_t;
    company: fieldtypes.name_t;
    position: fieldtypes.name_t;
    email : fieldtypes.email_t;
    phone1 : fieldtypes.phone_t;
    phone2 : fieldtypes.phone_t;

    
    creationDate: Date;
    lastLogged : Date;
    expirationDate : Date;
    timezone : Date; // is this a waste of storage?

    customerStatusFields: fieldtypes.custom_stat_t;

    colorKit : number; 

}




type customer = {

    cuid: number;
    fname : fieldtypes.name_t;
    lname : fieldtypes.name_t;
    company : fieldtypes.name_t;
    phone1 : fieldtypes.phone_t;
    phone2 : fieldtypes.phone_t;
    fax : fieldtypes.phone_t; 

    status : userSpecicStatus_t;
    
    timezone : Date;
    bday : Date;

}