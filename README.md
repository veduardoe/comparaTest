# ComparaOnline Proposal Refactoring Solution

Hi, in this repository, you will find a simple refactoring proposal solution for Software Engineer CO Test.

### What do you need to run the application?

1. Clone this repository
2. Be sure that you have installed Nodejs + NPM
3. Open terminal from the Root project and run "npm install" to install "Mocha Chai".
4. To run application, just run the following command "npm start" and the console will print the "Products After 30 Days" according the following configuration:

[
    new Product('Medium Coverage', 10, 20),
    new Product('Full Coverage', 2, 0),
    new Product('Low Coverage', 5, 7),
    new Product('Mega Coverage', 0, 80),
    new Product('Mega Coverage', -1, 80),
    new Product('Special Full Coverage', 15, 20),
    new Product('Special Full Coverage', 10, 49),
    new Product('Special Full Coverage', 5, 49),
    new Product('Super Sale', 3, 6),
]

The result must be the same that file products_after_30_days.txt. 
The values can be changed to be validated.

5. To run Unit Testing, just run the following command "npm test" to validate:

- Each Product Coverage Condition is Correct.
- Data responses
- Entitiy (Product)


