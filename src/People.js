import React  from 'react';

const People = ({people}) => {

  // using if statement
  // const peopleList = people.map(person => {
  //   if (person.age > 20) {
  //     return(
  //       <div className="tomo" key={person.id}>
  //         <div>Name: {person.name}</div>
  //         <div>Age: {person.age}</div>
  //         <div>Hobby: {person.hobby}</div>
  //       </div>
  //     );
  //   } else {
  //     return null;
  //   }
  // })
  //using ternary operator
  const peopleList = people.map(person => {
    return person.age > 20 ? (
      <div className="tomo" key={person.id}>
        <div>Name: {person.name}</div>
        <div>Age: {person.age}</div>
        <div>Hobby: {person.hobby}</div>
      </div>
    ) : null;
  })
  // Output to App.js
  return(
    <div className="people-list">
      { peopleList } 
    </div>
  );
}

export default People;