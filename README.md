# Root Problem

This program will take in an input file via command line. Each line of the input file will be processed and outputs a report containing each driver with total miles driven and average speed - sorted by most miles to least.

---

## Prerequisites

---

Before running, ensure that you have Node installed on your machine. [Download Here](https://nodejs.org/en/download/)

## Installing and Executing

---

1. Install dependencies in project folder with `npm install`
2. To run: `node dist/index.js input.txt`
   > You can also create other input files to run: `node dist/index.js yourowninput.txt`. (Just make sure the input file is within the root project directory)

## My Approach

---

I went with Node JS since that's what I was more comfortable with. I also used Typescript since I enjoy the type system which makes it easier to debug - just a personal preference.
As far as programming style, I decided to use a more "functional" approach rather than creating some sort of class like `class Driver {}`. I could've used OOP but in this case I couldn't really come up with a good case to implement OOP features like inheritance (for this problem specifically). I just wanted to keep it simple and use functions.

I used objects to represent the Trip data. Each Trip will have the driver's name, the distance the driver has traveled, the time it took to travel that distance, and the MPH.

Additionally, I created an `interface` to create a **Trip** type with those properties for some type checking.

```
Trip {
   name,
   distance,
   timeTraveled,
   speed
}
```

The program essentially reads the input line by line. Each line must start with a command (`Driver` or `Trip`). Driver command representing creating the driver and Trip command representing creating the trip. If the line doesn't start with "Driver" or "Trip", the program will throw an error.
It will then start to do some data clean up which involves appending trips done by the same Driver, sorting the trip based on distance, and filtering out average speeds that are less than 5MPH or greater than 100MPH.

As for the requirement stating to filter out bad speeds... I figured I would do that at the very end when all of the speeds are averaged. So, any trips that have averaged less than 5MPH or more than 100MPH, it'll just display 0 miles in the output.

_Example Input_

```
Driver Dan
Driver Lauren
Driver Harsh
Trip Dan 07:15 07:45 17
Trip Dan 06:12 06:32 21.8
Trip Lauren 12:01 13:16 42.0
Trip Harsh 05:30 06:30 4.0
```

_Example Output_

```
Lauren: 42 miles @ 34 mph
Dan: 39 miles @ 47 mph
Harsh: 0 miles
```

Also, If the driver is created but no trip is created for that driver, it'll just output 0 miles for that driver by default - according to the example provided by the problem statement.

Even though it wasn't mentioned, I thought it would be a good idea to throw some sort of error if there was a Trip added for a Driver that doesn't exist. Just for this problem specifically, I'm operating under the assumption that the Driver has to be created first using the `Driver` command. **However**, ideally I would think that drivers are being stored within a database, so in another scenario - I would just check the database first to see if that Driver existed. I'm sure in a more complicated version of this problem - each Driver has their respective ID's and each Trip has the Driver's ID attached to it since a Driver can have multiple Trips. I could be overthinking it - but I thought it would be something nice to add.

## Testing

---

Using a testing framework called [Jest](https://jestjs.io/), I've added tests for some of the "util" functions I've created. Specifically: `appendTrips`, `generateTripReport`, and the `parseTime` helper function.
In each test I've provided some input and wrote some expect clauses to check if the correct output is given. I need to do this to make sure these functions are doing what they're supposed to - which provides peace of mind.

## Example Input

---

I've provided a sample input that I made up just for fun. In order to test this, create a `.txt` file within the project directory
and run the command `node dist/index.js [yourfile.txt]` (Replace `yourfile.txt` with the name of the file you've created)

```
Driver Harsh
Driver Serena
Driver David
Trip Serena 06:05 06:30 10.2
Trip David 13:30 14:20 30.4
Trip David 10:02 12:10 60.0
```

Expect:

```
David: 90 miles @ 30 mph
Serena: 10 miles @ 24 mph
Harsh: 0 miles
```
