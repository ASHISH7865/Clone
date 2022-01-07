import React from "react";
import Row from "../../Components/Row/Row";
import HomePageNavbar from "../../Components/Navbar/HomePageNavbar";
import Banner from "../../Components/Banner/Banner";
import Requests from "../../api/request";
import "./Mainpage.css";

function Mainpage(props) {
  return (
    <div style={{ background: "black" }}>
      <HomePageNavbar />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={Requests.fetchTrending}
        isLargeRow
      />
      <Row title="Trending Now " fetchUrl={Requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={Requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={Requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={Requests.fetchDocumentries} />
    </div>
  );
}

export default Mainpage;
