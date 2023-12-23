export type uname_t = string & { __customStringBrand: never }; // username: length 5-16, letters, digits and _-
export type pass_t = string & { __customStringBrand: never };  // password: length 8-16 all chars
export type name_t = string & { __customStringBrand: never };  // name: length 2-16 letters only
export type email_t = string;
export type phone_t = string;


export type basic_stat_t = ["New" , "Interested", "Purchased", "Left", "incative"];
export type custom_stat_t = [];
export type field_t = "Name" | "Phone number" | "Date" | "FreeText" | "Checkbox";

const testUNameSTR = (value: string): uname_t | undefined => {
  const regex = /^[a-zA-Z0-9_-]{5,16}$/;

  if (regex.test(value)) {
    return value as uname_t;
  }

  return undefined;
};

const testPassSTR = (value: string): uname_t | undefined => {
    const regex = /{8,16}/;
  
    if (regex.test(value)) {
      return value as pass_t;
    }
    
    return undefined;
  };

  const testNameSTR = (value: string): name_t | undefined => {
    const regex = /^[a-zA-Z]{2,16}$/;
  
    if (regex.test(value)) {
      return value as name_t;
    }
    
    return undefined;
  };


  const testEmail = (value: string): email_t | undefined => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(value)) {
      return value as email_t;
    }
 
    return undefined;
  };


  const testPhone = (value: string): phone_t | undefined => {
    const regex = /^[0-9+]{5,13}/;

    if (regex.test(value)) {
      return value as phone_t;
    }
 
    return undefined;
  };
  