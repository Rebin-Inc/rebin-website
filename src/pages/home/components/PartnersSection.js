import React from "react";
import startItKBC from "../../../assets/images/start-it-kbc.svg";
import unizo from "../../../assets/images/unizo.svg";
import VLAIO from "../../../assets/images/VLAIO.svg";
import voka from "../../../assets/images/voka.svg";

const PartnersSection = () => {
  return (
    <section className="bg-rebin-grey text-center py-8 space-y-6 px-36">
      <p className=" text-slate-500">Trusted by the following partners</p>
      <div className="grid grid-cols-4 divide-x divide-solid place-content-stretch">
        <div className="flex justify-center space-x-3">
          <img src={startItKBC} alt="Logo Start It KBC" className="my-auto" />
          <p className="my-auto font-medium text-lg">Start it KBC</p>
        </div>
        <div className="flex justify-center space-x-3">
          <img src={unizo} alt="partner" className="my-auto" />
          <p className="my-auto font-medium text-lg">Unizo</p>
        </div>
        <div className="flex justify-center space-x-3">
          <img src={VLAIO} alt="Logo VLAIO" className="my-auto" />
          <p className="my-auto font-medium text-lg">Vlaio</p>
        </div>
        <div className="flex justify-center space-x-3">
          <img src={voka} alt="Logo Voka" className="my-auto" />
          <p className="my-auto font-medium text-lg">Voka</p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
