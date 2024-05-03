import { resolve } from "path";

const pages = [
    { name: "main", path: resolve(__dirname, "../index.html") },
    { name: "new-cars", path: resolve(__dirname, "new-cars/new-cars.html") },
    { name: "contacts", path: resolve(__dirname, "contacts/contacts.html") },
];

export default pages;
