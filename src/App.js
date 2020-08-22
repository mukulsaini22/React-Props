import React from "react";
import "./styles.css";
import { fakeapidata } from "./fakeapidata";
import { WishListStyle } from "./styles.js";

function WishList({ data }) {
  const { Description, link } = data;

  return (
    <div>
      <h3 style={WishListStyle}>
        {Description}
        <a href={link}> Buy </a>
      </h3>
    </div>
  );
}

function Processitem(itemdetails) {
  return <WishList data={itemdetails} key={itemdetails.key} />;
}
function WishItem({ item }) {
  return item.map(Processitem);
}

export default function App() {
  const data = fakeapidata();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <WishItem item={data.Wishlist} />
    </div>
  );
}
