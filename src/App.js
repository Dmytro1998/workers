
import './App.css';
import React from 'react'

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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
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
          {items.map(item => (
           
            <li key={item.id}>
               <div className="firstwrapper">
              <img src = {item.photo} alt ="account"></img>

              {item.name} {item.skills} {item.price} {item.earnings} {item.rate}
              </div>
              
            </li>
          
          ))}
        </ul>
        </div>
      );
    }
  }
}


export default App;
