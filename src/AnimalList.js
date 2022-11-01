import React, { useState } from 'react';

function AnimalList() {

    const [animal, setAnimal] = useState([
        {id:1, name: 'Jagoda', species: 'Svinja', dateOfBirth: new Date() },
        {id:2, name: 'Visnja', species: 'Krava', dateOfBirth: new Date() },
        {id:3, name: 'Slavka', species: 'Kokoska', dateOfBirth: new Date() },
        {id:4, name: 'Tresnja', species: 'Macka', dateOfBirth: new Date() },
        {id:5, name: 'Jovanka', species: 'Zirafa', dateOfBirth: new Date() },
        {id:6, name: 'Julka', species: 'Ovca'},
      ]);


    return (
        <div>
            <table>
                <tr>
                    <th>Species</th>
                    <th>Name</th>
                    <th>Birth</th>
                </tr>       
                    {animal.map((item) => (
                      
                    <tr key={item.id}>
                        <td >{item.species}</td>
                        <td> {item.name}</td>
                        <td>{item.dateOfBirth ? item.dateOfBirth.toString() : "Nepoznat"}</td>

                    </tr>
                  ))}
            </table>
        </div>
    )
  }
  export default AnimalList;