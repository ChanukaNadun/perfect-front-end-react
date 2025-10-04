import { useState, useEffect } from "react";
import React from "react";

function StateCheck() {
  const [searchName, setSearchName] = useState("");
  const [filterNames, setFilterNames] = useState([]);
  const [getNewUser, setNewGetUser] = useState([]);

  let users = ["Alice", "Bob", "Charlie"];
  let scores = [45, 80, 32, 90, 60];
  let nested = [1, [2, [3, 4]], 5];

  useEffect(() => {
    let filterNamesList = [];
    if (searchName !== "") {
      filterNamesList = people.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchName.toLowerCase()) ||
          person.city.toLowerCase().includes(searchName.toLowerCase())
        );
      });
      setFilterNames(filterNamesList);
      console.log(filterNamesList, "Filtered Names", searchName);
    } else {
      setFilterNames(people);
    }
  }, [searchName]);

  const ArrayTest = (name) => {
    let getUser = users.filter((user) => { return user.toLowerCase().includes(name.toLowerCase())});
    // console.log(getUser, "Get User");
    setNewGetUser(getUser);
  };

  // useEffect(() => {
  //   console.log(getNewUser, "Get User");
  // }, [getNewUser]);

let flat = nested.flat(2);
console.log("Flattened:", flat);

  return (
    <div>
      <button onClick={() => ArrayTest("bob")}>Test</button>
      {getNewUser ? <div>{getNewUser[0]} - 5</div> : <div>No Data Found</div>}
      <br />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchName(e.target.value)}
      />
      {filterNames ? (
        filterNames.map((person, index) => (
          <div key={index}>
            <h3>{person.name}</h3>
            <h6>{person.city}</h6>
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
    </div>
  );
}

export default StateCheck;

const people = [
  { name: "Aiden Walker", city: "New York" },
  { name: "Sophia Martinez", city: "Los Angeles" },
  { name: "Ethan Johnson", city: "Chicago" },
  { name: "Olivia Brown", city: "Houston" },
  { name: "Liam Davis", city: "Phoenix" },
  { name: "Emma Wilson", city: "Philadelphia" },
  { name: "Noah Anderson", city: "San Antonio" },
  { name: "Ava Thomas", city: "San Diego" },
  { name: "James Taylor", city: "Dallas" },
  { name: "Mia Moore", city: "San Jose" },
  { name: "Benjamin Lee", city: "Austin" },
  { name: "Charlotte Harris", city: "Jacksonville" },
  { name: "Lucas Clark", city: "Fort Worth" },
  { name: "Amelia Lewis", city: "Columbus" },
  { name: "Henry Hall", city: "San Francisco" },
  { name: "Harper Young", city: "Charlotte" },
  { name: "Alexander Allen", city: "Indianapolis" },
  { name: "Evelyn King", city: "Seattle" },
  { name: "Michael Wright", city: "Denver" },
  { name: "Abigail Scott", city: "Washington" },
  { name: "Daniel Green", city: "Boston" },
  { name: "Ella Baker", city: "El Paso" },
  { name: "Matthew Adams", city: "Nashville" },
  { name: "Scarlett Nelson", city: "Detroit" },
  { name: "David Hill", city: "Oklahoma City" },
  { name: "Aria Rivera", city: "Portland" },
  { name: "Joseph Campbell", city: "Las Vegas" },
  { name: "Chloe Mitchell", city: "Memphis" },
  { name: "Samuel Perez", city: "Louisville" },
  { name: "Grace Roberts", city: "Baltimore" },
];
