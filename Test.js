import React, { Component } from 'react';

import ChartComponent, {Bar,Line,Pie} from 'react-chartjs-2';

class Test extends Component{

constructor(){

super();

this.state={

'contacts' :[],

}
};



componentDidMount() {

fetch('http://localhost:8000/movies')

.then(contacts =>{
    

return contacts.json();

})

.then(contacts => {

this.setState({

'contacts': contacts

})

})

}

render() {
   
     
return (

    <div>
        <canvas id = "pea"></canvas>
<div className="Pie">
CHART COMPONENT

<table border="1">
            <thead>
        <tr>
          <th>Director Name</th>
          <th>reviews</th>
          <th>Duration</th>
          <th>Likes</th>
          <th>Gross</th>
          <th>Genre</th>
          <th>Actor Name</th>
          <th>Movie Title</th>
          <th>Voted users</th>
          <th>Language</th>
          <th>Country</th>
          <th>Budget</th>
          <th>Year</th>
          <th>IMDB Rating</th>
        </tr>
      </thead>
      <tbody>
        {
          
         this.state.contacts.map(contacts => {
            return <tr key={contacts.id} contacts = {this.state.contacts} >
            <td height="50" width="50">{contacts.director_name}</td>
                  <td height="50" width="50">{contacts.reviews}</td>
                  <td height="50" width="50">{contacts.duration}</td>
                  <td height="50" width="50">{contacts.likes}</td>
                  <td height="50" width="50">{contacts.gross}</td>
                  <td height="50" width="50">{contacts.genres}</td>
                  <td height="50" width="50">{contacts.actor_name}</td>
                  <td height="50" width="50">{contacts.movie_title}</td>
                  <td height="50" width="50">{contacts.voted_users}</td>
                  <td height="50" width="50">{contacts.language}</td>
                  <td height="50" width="50">{contacts.country}</td>
                  <td height="50" width="50">{contacts.budget}</td>
                  <td height="50" width="50">{contacts.year}</td>
                  <td height="50" width="50">{contacts.imdb_score}</td>
                  </tr>
            })
         } ,
      </tbody>
            </table>
      
</div>

</div>

    
)
}
}


export default Test;

