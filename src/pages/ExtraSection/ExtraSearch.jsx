import React from "react";
import {featureOptions} from "../../constant";

const ExtraSection = () => {
    return (
        <div className="py-4 mt-20">
            <div className="text-center">
                <h3 className="uppercase text-gray-500">What We Serve</h3>
                <h2 className="text-gray-800 text-2xl font-bold md:text-3xl lg:text-4xl mt-1">
                    Your Favourite Food <br />
                    Delivery Partner
                </h2>
            </div>

            <div
                className="mt-8 gap-6"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, auto))",
                }}
            >
                {featureOptions.map((feature) => (
                    <div
                        key={feature.id}
                        className="flex flex-col items-center text-center"
                    >
                        <img
                            className="w-[100px] h-[100px] object-contain"
                            src={feature.image}
                            alt={feature.name}
                        />
                        <h3 className="text-gray-800 text-xl font-bold">{feature.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExtraSection;