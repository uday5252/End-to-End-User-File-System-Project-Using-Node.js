//How to Write the data to a file
// fs(file system) library

// const FileSystem = require("fs")

// FileSystem.writeFile("aresrfsdfsd.txt", "Learning Node.js and Express.js is very easy", function(error)
// {
//     if(error)
//     {
//         console.log("Some probem occured!")
//     }
//     else
//     {
//         console.log("Data is successfully written to the file!")
//     }
// })


// FileSystem.appendFile("dataasdsadsad.txt", "Node.js is easy!", function(error)
// {
//     if(error)
//     {
//         console.log("Some probem occured!")
//     }
//     else
//     {
//         console.log("Data is successfully written to the file!")
//     }
// })

// FileSystem.writeFile()
// FileSystem.writeFileSync()

// FileSystem.appendFile()
// FileSystem.appendFileSync()

// Difference between FileSystem.writeFile() and FileSystem.writeFileSync()

// FileSystem.writeFile("data.txt", "Welcome", function(error)
// {
//     if(error)
//     {
//         console.log(error)
//     }
//     else
//     {
//         console.log("Data written successfully!")
//     }
// })

// console.log("hello")

// =================================================

// Sync --> Synchronous(line by lines)

// Blocked for 4 minutes 

// FileSystem.writeFileSync("data.txt", "WELCOME")//4 minutes for 10lakh lines

// console.log("hello")

// Read the data from the file 

// FileSystem.readFile("dataa.txt", "utf-8", function(error, output)
// {
//     if(error)
//     {
//         console.log("Some problem occured!", error.message)
//     }
//     else
//     {
//         console.log(output)
//     }
// })


// ====================================
// Write the JSON Data and we will read the JSON Data

// 1) We will ask the user to enter the JSON data 
// 2) We will write a program to collect it 
// 3) After collecting it, put that data in to the file 

// collect the data from a terminal / command prompt, we need to use a 
// library readline

const ReadLine = require("readline")
const FileSystem = require("fs")

const Data = ReadLine.createInterface({
    input: process.stdin,//standardinput --> used for reading user input,
    output: process.stdout//standardoutput --> if we want to display the output
})

// process.stdout --> help to print some information from the program on to terminal
// process.stdin --> help to read the data from the terminal to the program 

Data.question("Enter the JSON data:", function(info)
{
    // username key or not ?
    // info = { "username": "Raju" }
    // info = {"productName: "Mobile"}

    // { "username": "Raju" } --> { username: "Raju" }
    // JSON.parse() --> JSON data to Javascript Object 
    // Javascript Object to JSON --> JSON.stringify()

    let convertedJavascriptObject = JSON.parse(info)

    if(convertedJavascriptObject["username"] != undefined)
    {
        // read that array / extract that blank array present in that json file 

        FileSystem.readFile("customer.json", "utf-8", function(error, output)
        {
            // output = [] --> coming from customer.json --> JSON Data
            // [] -- JSON DATA ===> Javascript format(Javascript array [])
            let arr = JSON.parse(output)//[]
            arr.push(convertedJavascriptObject)//[javascript object]
            // arr(javascript data) --> cannot insert in to customer.json file 
            let customerJson = JSON.stringify(arr)
            FileSystem.writeFile("customer.json", customerJson , function(error)
                {
                    if(error)
                    {
                        console.log(error.message)
                    }
                    else
                    {
                        console.log("JSON data is written successfully!")
                    }
            })
        })
    }
    else
    {
        console.log("Please try entering customer username!")
    }
    Data.close()
})

// Enter the JSON data --> come out of my program on to the terminal