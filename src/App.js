
import './App.css';
import React from 'react'


const theadData = ["Products", "Earnings", "Comision", "Company", "Rating"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    
    fetch("https://616f2bbd715a630017b39b62.mockapi.io/jobs")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
      
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    
     const tbodyData = this.state.items;
     console.log(tbodyData)
     console.log(theadData)
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div className="textandbtns">
            <div className ="text-container">
              <p className= "newArrivals">New arrivals</p>
              <p className ="more-than-text">More than 400+ new members</p>

            </div>
            <div className="buttons-create-new">
              <button className="create">Create</button>
              <button className="new-repport">New repport</button>
            </div>
            <div className="subheader-wrapper">

            </div>


          </div>
        <ul>
  <table>

  <tr>
    <th>Products</th>
    <th>Earnings</th>
    <th>Comision</th>
    <th>Company </th>
    <th>Rating</th>
    
  </tr>
  {items.map(item => (
          
          
<tr>
<td> <img src = {item.photo} alt ="account"></img>  <li key={item.id}> </li></td>
 <td><div> {item.name}</div></td>
 <td><div> {item.skills}</div></td>
 <td>{item.price}</td>
 <td> {item.earnings}</td>
</tr>
             
             
               
           
          
          ))}
       і
     
      );
  </table>

         
        </ul>
        </div>
      );
    }
  }


}


export default App;
