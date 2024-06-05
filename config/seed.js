// Require connection file to connect
const mongoose = require('./db-connection.js');
// Require Models for delete and create operations
const ResLocation = require('../models/Location.js');
const User = require('../models/User.js');
const Owner = require('../models/Owner.js');


const users = [
  {
    email: 'anakin@skywalker.com',
    password: 'darkside123',
    age: 30,
    favoriteDishes: ['Carbonara', 'Pizza Margherita'],
  },
  {
    email: 'padme@amidala.com',
    password: 'queen123',
    age: 28,
    favoriteDishes: ['Risotto al Nero di Seppia', 'Tiramisu'],
  },
  {
    email: 'obi-wan@kenobi.com',
    password: 'jedi123',
    age: 40,
    favoriteDishes: ['Penne alla Carbonara', 'Risotto ai Funghi Porcini'],
  },
  {
    email: 'palpatine@sith.com',
    password: 'unlimitedpower',
    age: 60,
    favoriteDishes: ['Pizza Margherita', 'Tiramisu'],
  },
  {
    email: 'yoda@jedi.com',
    password: 'jediMaster',
    age: 900,
    favoriteDishes: ['Fettuccine Alfredo', 'Bruschetta'],
  },
];

const locations = [
  {
    city: 'Atlanta',
    menuItems: ['Carbonara', 'Pizza Margherita', 'Bruschetta', 'Tiramisu'],
    specialtyDishes: ['Saltimbocca', 'Bruschetta'],
  },
  {
    city: 'New York',
    menuItems: ['Risotto al Nero di Seppia', 'Pizza Margherita', 'Risotto ai Funghi Porcini', 'Tiramisu'],
    specialtyDishes: ['Risotto al Nero di Seppia', 'Pizza Margherita'],
  },
  {
    city: 'North Carolina',
    menuItems: ['Penne alla Carbonara', 'Pizza Margherita', 'Risotto ai Funghi Porcini', 'Tiramisu'],
    specialtyDishes: ['Risotto ai Funghi Porcini', 'Tiramisu'],
  },
  {
    city: 'Houston',
    menuItems: ['Pizza Margherita', 'Risotto ai Funghi Porcini', 'Fettuccine Alfredo', 'Bruschetta'],
    specialtyDishes: ['Pizza Margherita', 'Bruschetta'],
  },
  {
    city: 'Los Angeles',
    menuItems: ['Penne alla Carbonara', 'Pizza Margherita', 'Risotto ai Funghi Porcini', 'Tiramisu'],
    specialtyDishes: ['Penne alla Carbonara', 'Tiramisu'],
  },
];

const owners = [
  {
    name: 'Johnson Smith',
    city: 'Atlanta',
    aboutMe: 'Bringing the taste of traditional Roman dishes to the heart of the city!',
    favoriteDish: 'Saltimbocca',
  },
  {
    name: 'Bob Brown',
    city: 'New York',
    aboutMe: 'Capturing the essence of Venetian cuisine with every dish!',
    favoriteDish: 'Baccalà Mantecato',
  },
  {
    name: 'Jon Jones',
    city: 'North Carolina',
    aboutMe: 'Crafting Milanese classics with a modern twist!',
    favoriteDish: 'Risotto ai Funghi Porcini',
  },
  {
    name: 'Garcia Miller',
    city: 'Houston',
    aboutMe: 'Preserving the culinary heritage of Florence one plate at a time!',
    favoriteDish: 'Pizza Margherita',
  },
  {
    name: 'Davis Rodriguez',
    city: 'Los Angeles',
    aboutMe: 'Bringing the flavors of Naples straight to your table!',
    favoriteDish: 'Penne alla Carbonara',
  },
];




async function seed() {
  try {
    await User.deleteMany({});
    await ResLocation.deleteMany({});
    await Owner.deleteMany({});

    const createUser = await User.create(users);
    console.log('Users: ', createUser);

    const createLocations = await ResLocation.create(locations);
    console.log('Locations: ', createLocations);

    const createOwners = await Owner.create(owners);
    console.log('Owners: ', createOwners);

    await mongoose.connection.close();
  } catch (err) {
    console.log(err);
  }
}

seed();