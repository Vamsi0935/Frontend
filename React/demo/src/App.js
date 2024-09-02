import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

export default function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{ marginTop: "70px", textAlign: "center" }}>
        <Typography variant="h2">Our Latest Version of Photography</Typography>
        <Typography paragraph>
          Pleasure to take your photos as well, Please fill the below form for
          any invite requests
        </Typography>
      </Container>
      <Card sx={{ maxWidth: 345, marginLeft: "25px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, marginLeft: "25px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
// import React from "react";
// import { useDispatch } from "react-redux";
// import { increment, decrement } from "./action";
// import CountValue from "./CountValue";

// export default function App() {
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <CountValue />
//       <button onClick={() => dispatch(increment())}>+</button>
//       <button onClick={() => dispatch(decrement())}>-</button>
//     </div>
//   );
// }

//example of useState
// import React, { useState } from "react";

// export default function App() {
//   const [name, setName] = useState("Codegnan");
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <center>
//         <h1>{name}</h1>
//         <button onClick={() => setName("Codegnan Destination")}>Change</button>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Increment</button>
//       </center>
//     </div>
//   );
// }
//example of useEffect
// import React, { useState, useEffect } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   useEffect(()=>console.log("count"),[count])
//   return (
//     <div>
//       <center>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Click</button>
//       </center>
//     </div>
//   );
// }

// import ClassExample from "./ClassExample";
// import "./App.css";
// import StateExample from "./StateExample";
// import Input from "./Input";
// import Home from "./Home";
// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <h1>CODEGNAN, HYDERABAD</h1>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </BrowserRouter>
//     <StateExample/>
//       <div className="parent">
//         <ClassExample name="VAMSI KRISHNA" age="23" degree="B.TECH" />
//         <ClassExample name="SRINIDHI" age="22" degree="MS" />
//         <ClassExample name="MANEESHA" age="23" degree="B.TECH" />
//         <ClassExample name="VINEETH" age="23" degree="DEGREE" />
//         <ClassExample name="RAJA SEKHAR" age="30" degree="POST GRADUATE" />
//         <ClassExample name="HARI PRIYA" age="28" degree="B.TECH" />
//         <ClassExample name="JAYA KRISHNA" age="28" degree="B.TECH" />
//         <ClassExample name="DURGA BHAVANI" age="23" degree="DEGREE" />
//       </div>
//       <StateExample />
//       <Input />
//     </div>
//   );
// }

// export default App;
