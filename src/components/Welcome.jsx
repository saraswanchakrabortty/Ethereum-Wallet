import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";

import "../styles/Welcome.scss";

import { TransactionContext } from "../context/TransactionContext";
import { Loader } from ".";
import Underline from '../components/Underline';
import Card from "./card";


const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;

    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction();
  };

  return (
    <section className="hero">
      <div className="heroContainer">
        <div className="leftFlexBox">
          <h1>
            Send <span className="highlight">Crypto</span> <br /> across the <span className="highlight">world</span>
          </h1>
          <p>
            Venture into the realm of crypto with EtherForge. Assuring the fastest global transfers of Ethereum, we make your crypto journey seamless.
          </p>
          {!currentAccount && (
            <button className="glassBtn" type="button" onClick={connectWallet}>
              <AiFillPlayCircle className="text-white mr-2" />
              <p>Connect Wallet</p>
            </button>
          )}
        </div>

        <div className="rightFlexBox">
          <Card currentAccount={currentAccount}/>
          <div className="end glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={handleChange}
              min="1"
            />

            <Underline/>

            <button type="button"  className="solid" onClick={handleSubmit}>
              {" "}
              Send now{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
