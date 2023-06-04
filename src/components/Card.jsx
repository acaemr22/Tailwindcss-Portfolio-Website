import React from "react";

const Card = ({image}) => {
  return (
    <div className="text-center shadow-2xl p-5 sm:p-10 rounded-xl my-10 flex flex-col items-center md:min-w-[45rem] xl:min-w-[70rem]">
      <img src={image} width={100} height={100} />
      <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white">Beautiful Designs</h3>
      <p className="max-w-lg py-2 dark:text-gray-200">
        Lorem ipsum dolor sit amet con sectetur adipisicing elit. Molestiae!
      </p>
      <h4 className="py-4 text-teal-300 font-semibold">Design Tools I Use</h4>
      <p className="text-gray-400 py-1">Photoshop</p>
      <p className="text-gray-400 py-1">Figma</p>
      <p className="text-gray-400 py-1">Illustrator</p>
    </div>
  );
};

export default Card;
