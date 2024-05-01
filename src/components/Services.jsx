import React from "react";
import '../styles/Services.scss'
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="serviceCard glassmorphism">
    <div className="iconContainer">{icon}</div>
    <div className="card">
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  </div>
);

const Services = () => (
  <section className="services">
    <div className="flexbox">
      <div className="left">
        <h1>
          <span className="highlight">Services</span> that we
          <br />
          continue to <span className="highlight">improve</span>
        </h1>
        <p>
        Experience swift, secure, and user-friendly Ethereum transfers with us. 
        Your go-to choice for global crypto transactions.
        </p>
      </div>

      <div className="right">
        <ServiceCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="Security is guranteed. We always maintain privacy and maintain the quality of our products"
        />
      </div>
    </div>
  </section>
);

export default Services;
