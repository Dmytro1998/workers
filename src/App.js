
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

  
  <tr id="header-for-table">
          <th colSpan="2">PRODUCTS</th>
          <th>EARNINGS</th>
          <th>COMISSION</th>
          <th>COMPANY</th>
          <th>RATING</th>
          <th></th>

    
  </tr>
  {items.map(item => (
          
          
          <tr key={item.id}>
          <td><img src={item.photo} alt={item.name}></img></td>
          <td className="about-member">
            <h3>{item.name}</h3>
            <p className= "skills">{item.skills}</p>
          </td>
  <td><div> {item.earnings}<p className ="status" >{item.status}</p></div></td>
 <td>{item.price}</td>
 <td> {item.company}</td>
 <td> {item.rate}</td>
 <td> <button className= "View-offer">View offer</button></td>
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
