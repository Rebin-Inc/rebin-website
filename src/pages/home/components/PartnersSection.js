import React from "react";
import startItKBC from "../../../assets/images/start-it-kbc.svg";
import unizo from "../../../assets/images/unizo.svg";
import VLAIO from "../../../assets/images/VLAIO.svg";
import voka from "../../../assets/images/voka.svg";

const PartnersSection = () => {
  return (
    <section className="bg-rebin-grey text-center py-6 space-y-6">
      <p>Trusted by the following partners</p>
      <div className="grid grid-cols-4 divide-x divide-solid place-content-stretch">
        <div className="grid grid-cols-2 place-items-center">
          <img src={startItKBC} alt="partner" />
          <span>Start it KBC</span>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <img src={unizo} alt="partner" />
          <p>Unizo</p>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <img src={VLAIO} alt="partner" />
          <p>Vlaio</p>
        </div>
        <div className="grid grid-cols-2 place-items-center">
          <img src={voka} alt="partner" />
          <p>Voka</p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
