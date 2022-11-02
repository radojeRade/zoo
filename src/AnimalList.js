import React, { useState } from 'react';


const sectorsData = [
  "Ptice",
  "Sisari",
  "Vodozemci",
  "Reptili",
  "Ribe",
  "Insekti",
];

function AnimalList() {
    const [newAnimal, setNewAnimal] = useState({id: 0, name:"", species: "", dateOfBirth: "", sector: ""});
    const [sectors, setSectors] = useState(sectorsData);
    // const [name, setName] = useState('');
    // const [species, setSpecies] = useState('');


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
      
      const onTop = (id) => {
        let newAnimals = animal.map(x => x.id).indexOf(id);
        let data = [...animal]
        data.unshift(data.splice(newAnimals, 1)[0]);

        setAnimal(data);
      }

      const handleName= (name) => {
        // e.preventDefault();
        setNewAnimal({
          
          ...newAnimal,
          id: animal.length + 1,
          dateOfBirth: new Date().toString(),
          name,
        })
      }
      const handleSpecies= (species) => {
        // e.preventDefault();
        setNewAnimal({
          
          ...newAnimal,
          species
        })
      }
      const handleSectorChange = (sector) => {
        setNewAnimal({
          ...newAnimal,
          sector:sector,
        })
      }

      const handleSubmit = (e) => {
        e.preventDefault(); // Prevents default behaviour of form submit action
        setAnimal([...animal, newAnimal]);
        setNewAnimal({id: 0, name:"", species: "", dateOfBirth: "", sector:""});
      
     };
     const showSectors = (sector) => {
      let show = animal.filter(e => e.sector === sector);
      alert(JSON.stringify(show));
     }

    return (
      <div>
        <div>
            <div>
            <form onSubmit={handleSubmit}>
            <label>Name:
          <input type='text'
            value={newAnimal.name}
            onChange={(e) => {
                handleName(e.target.value);
            }}
          />
          </label>
          <label>
            Species:
            <input
              type='text'
              value={newAnimal.species}
              onChange={(e) => {
                handleSpecies(e.target.value);
              }}
            />
            
          </label>
          <select
          onChange={(e) => handleSectorChange(e.target.value)}
          value={newAnimal.sector}>
          {sectors.map((sector, index) => (
            <option key={index}>{sector}</option>
          ))}
        </select>
          <button>Submit</button>

            </form>

            </div>
            <table>
                <thead>
                <tr>
                    <th>Species</th>
                    <th>Name</th>
                    <th>Birth</th>
                    <th>Sector</th>
                </tr> 
                </thead>
                <tbody>     
                    {animal.map((item) => (
                      
                    <tr key={item.id}>
                        <td >{item.species}</td>
                        <td> {item.name}</td>
                        
                        <td>{item.dateOfBirth ? item.dateOfBirth.toString() : "Nepoznat"}</td>
                        <td>{ item.sector }</td>
                        <td><button onClick={()=> handleClick(item.id)}>Remove</button></td>
                        <td><button onClick={()=> onTop(item.id)}>Top</button></td>
                    </tr>
                  ))}
                  </tbody> 
            </table>
        </div>
        <div>
          <table>
            <thead>
                <tr>
                  <th>Sectors</th>
                </tr>
            </thead>
            <tbody>
              { sectors.map((item, index) => (
                <tr key = {index}>
                  <td>{item}</td>
                  <td><button onClick={() => showSectors(item)}>Alert</button></td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  export default AnimalList;