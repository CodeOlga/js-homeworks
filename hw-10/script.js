// HW 10.1

const user = {
  userName: "Olga",
  age: 20,
  location: "Kyiv",

  getUserInfo() {
    return `User name: ${this.userName}, age: ${this.age}, location: ${this.location}`;
  },
};

console.log(user.getUserInfo());

// HW 10.2

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = array.filter((i) => i % 2 === 0);

console.log(evenNumbers);

// HW 10.3

const contacts = {
  contact: [
    { name: "Anna", phone: "+1234567890", email: "anna@gmail.com" },
    { name: "John", phone: "+1234455899", email: "john@gmail.com" },
    { name: "Kate", phone: "+3834567890", email: "anna@gmail.com" },
  ],

  getContactName(name) {
    return this.contact.find((item) => item.name === name);
  },

  addContact(name, phone, email) {
    this.contact.push({ name, phone, email });
  },
};

const foundContact = contacts.getContactName("John");
contacts.addContact("Petro", "+3809878787", "petro@gmail.com");

console.log(
  `Contact ${foundContact.name}, phone: ${foundContact.phone}, email: ${foundContact.email}`
);

console.log(`Now you have ${contacts.contact.length} contacts in your book`);
