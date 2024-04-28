import React, { useContext } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import "../styles/Welcome.scss";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import Underline from '../components/Underline';


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
            Send Crypto <br /> across the world
          </h1>
          <p>
            Explore the crypto world. Buy and sell cryptocurrencies easily on
            EtherForge.
          </p>
          {!currentAccount && (
            <button className="glassBtn" type="button" onClick={connectWallet}>
              <AiFillPlayCircle className="text-white mr-2" />
              <p>Connect Wallet</p>
            </button>
          )}

          {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div> */}
        </div>

        <div className="rightFlexBox">
          <div className="start">
            <div>
              <div className="iconContainer">
                <div className="iconDiv">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div className="addressContainer">
                <p>{shortenAddress(currentAccount)}</p>
                <p>Ethereum</p>
              </div>
            </div>
          </div>
          <div className="end">
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
            />

            <Underline/>

            <button type="button" onClick={handleSubmit}>
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
