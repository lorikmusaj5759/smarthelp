/**
 * sophisticated_code.js
 * 
 * This code demonstrates a sophisticated and elaborate javascript implementation of a customer management system.
 */

// Model class for Customer
class Customer {
  constructor(id, name, address, email) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.email = email;
  }

  toString() {
    return `Customer { id: ${this.id}, name: ${this.name}, address: ${this.address}, email: ${this.email} }`;
  }
}

// Database class to manage customers
class Database {
  constructor() {
    this.customers = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  removeCustomer(customerId) {
    this.customers = this.customers.filter((customer) => customer.id !== customerId);
  }

  getCustomer(id) {
    return this.customers.find((customer) => customer.id === id);
  }

  getAllCustomers() {
    return this.customers;
  }

  toString() {
    return `Database { customers: [${this.customers.map((customer) => customer.toString()).join(", ")}] }`;
  }
}

// Create an instance of the database
const database = new Database();

// Add customers to the database
database.addCustomer(new Customer(1, "John Doe", "123 Main St", "john.doe@example.com"));
database.addCustomer(new Customer(2, "Jane Smith", "456 Broadway", "jane.smith@example.com"));
database.addCustomer(new Customer(3, "Bob Johnson", "789 Park Ave", "bob.johnson@example.com"));

// Remove a customer from the database
database.removeCustomer(2);

// Get a customer by ID
const customer = database.getCustomer(1);
console.log(customer.toString());

// Get all customers
const allCustomers = database.getAllCustomers();
console.log(allCustomers.map((customer) => customer.toString()).join("\n"));

// Output:
// Customer { id: 1, name: John Doe, address: 123 Main St, email: john.doe@example.com }
// Customer { id: 1, name: John Doe, address: 123 Main St, email: john.doe@example.com }
// Customer { id: 3, name: Bob Johnson, address: 789 Park Ave, email: bob.johnson@example.com }