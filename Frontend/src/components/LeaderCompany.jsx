import React from "react";
import leader1 from "../assets/images/leader1.webp";
import leader2 from "../assets/images/leader2.webp";
import leader3 from "../assets/images/leader3.webp";
import leader4 from "../assets/images/leader4.webp";

const LeaderCompany = () => {
  return (
    <div>
      <section className="container mx-auto border-t-[2px] mt-12 ">
        <h1 className="py-6 flex justify-center">
          The Leader Board Of Our Company
        </h1>
        <div className="flex gap-8 items-center justify-center">
          <div>
            <img src={leader1} alt="Leader_Of_Company" />
            <h2>Nimrod Barshad</h2>
            <p>Founder/CEO</p>
          </div>
          <div>
            <img src={leader2} alt="Leader_Of_Company" />
            <h2>Claude K. Amadeo</h2>
            <p>Sales Director</p>
          </div>
          <div>
            <img src={leader3} alt="Leader_Of_Company" />
            <h2>Linda M. Dugan</h2>
            <p>Manager</p>
          </div>
          <div>
            <img src={leader4} alt="Leader_Of_Company" />
            <h2>Mark Pocket</h2>
            <p>Product Manager</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeaderCompany;
