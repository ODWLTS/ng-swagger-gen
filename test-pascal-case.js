#!/usr/bin/env node

// Test the toPascalCase function
function toPascalCase(str) {
  if (!str || typeof str !== "string") {
    return "";
  }

  return str
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Split camelCase
    .replace(/[_\-\s]+/g, " ") // Replace underscores, hyphens, and multiple spaces with single space
    .replace(/\b\w/g, function (match) {
      // Capitalize first letter of each word
      return match.toUpperCase();
    })
    .replace(/\s+/g, ""); // Remove all spaces
}

// Test cases
console.log("Testing toPascalCase function:");
console.log("hello_world ->", toPascalCase("hello_world"));
console.log("hello-world ->", toPascalCase("hello-world"));
console.log("hello world ->", toPascalCase("hello world"));
console.log("helloWorld ->", toPascalCase("helloWorld"));
console.log("HelloWorld ->", toPascalCase("HelloWorld"));
console.log("HELLO_WORLD ->", toPascalCase("HELLO_WORLD"));
console.log("hello123World ->", toPascalCase("hello123World"));
console.log("hello___world ->", toPascalCase("hello___world"));
console.log("empty string ->", toPascalCase(""));
console.log("null ->", toPascalCase(null));
console.log("number ->", toPascalCase(123));
