
import React, {Component} from 'react';
import './App.css';
import Card from "./Card";
import Nav from "./Nav";
import Mbti from "./Mbti";

function App() {
  let datas = [
    {
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
      title: "Interstella",
      genre: "SF",
      rating: 4.23,
      comments: "3123"
    },
    {
      thumbnail:
        "https://upload.wikimedia.org/wikipedia/en/7/75/Contact_ver2.jpg",
      title: "Contact",
      genre: "SF",
      rating: 5.0,
      comments: "1201"
    },{
      thumbnail:
        "https://is2-ssl.mzstatic.com/image/thumb/Video5/v4/b2/2e/b6/b22eb627-6191-644f-e83b-9b3f8b41ea6d/pr_source.lsr/268x0w.png",
      title: "The Great Gatsby",
      genre: "Drama ",
      rating: 4.3,
      comments: "2021"
    }
  ];
  return (
    <div>
      <Nav></Nav>
      {
        datas.map((data,i)=><Card key={i} data={data} handleClickCard={()=>alert(data.title)}/>)
      }
      <Mbti></Mbti>
    </div>
  );
}

export default App;
