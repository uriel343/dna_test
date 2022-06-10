# dna_test
This is my test from dna detector from mutants

### What does it do?
**It works through a single endpoint that allows us to write a DNA array where the backend processes and determines if each of the entered values belongs to a human or a mutant.**

### How it works?
1. we can test the API in postman, but first, you need to install all dependencies with npm i and start to run it localy with npm start
    //URL of the API
    **You can watch it into the console http://localhost:3000/api/**
2. You can send a type json content in the body as dna, that waits for an array that contains only strings in the range (A,T,C,G)
    //Example
    **http://localhost:3000/api/mutant (Use POST method)**
    **In the body post {"dna" : ["your values here"]}**
3. This works with a mongodb atlas connection, so, every register of DNA is going to be analized and determinated if is it a human or mutant
4. To see the results from countDocuments from humans and mutants you can run the following endpoint, this will be contain the results that are saved in the database DNA in the collection human_mutants
    **http://localhost:3000/api/human (Use GET method)**
