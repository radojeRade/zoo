import React, { useState } from 'react';

function AnimalList() {
    const [id, setId] = useState();
    const [animal, setAnimal] = useState([
        {id:1, name: 'Jagoda', species: 'Svinja', dateOfBirth: new Date() },
        {id:2, name: 'Visnja', species: 'Krava', dateOfBirth: new Date() },
        {id:3, name: 'Slavka', species: 'Kokoska', dateOfBirth: new Date() },
        {id:4, name: 'Tresnja', species: 'Macka', dateOfBirth: new Date() },
        {id:5, name: 'Jovanka', species: 'Zirafa', dateOfBirth: new Date() },
        {id:6, name: 'Julka', species: 'Ovca'},
      ]);
      const handleClick = (id) => {
        //console.log(id);
         let newAnimals = animal.map(x => x.id).indexOf(id);
         let arr = [...animal];
         arr.splice(newAnimals, 1);
         
         setAnimal(arr);
        
      };
    


    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Species</th>
                    <th>Name</th>
                    <th>Birth</th>
                </tr> 
                </thead>
                <tbody>     
                    {animal.map((item) => (
                      
                    <tr key={item.id}>
                        <td >{item.species}</td>
                        <td> {item.name}</td>
                        <td>{item.dateOfBirth ? item.dateOfBirth.toString() : "Nepoznat"}</td>
                        <td><button onClick={()=> handleClick(item.id)}>Remove</button></td>
                    </tr>
                  ))}
                  </tbody> 
            </table>
        </div>
    )
  }
  export default AnimalList;