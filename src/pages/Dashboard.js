import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  let { isLoading } = useContext(GithubContext);
  // console.log(isLoading);
  if (isLoading) {
    return (
      <main>
        <Navbar></Navbar>
        <Search />
        <img src={loadingImage} alt="loadingImage" className="loading-img" />
      </main>
    );
  }
  return (
    <main>
      <Navbar></Navbar>
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
