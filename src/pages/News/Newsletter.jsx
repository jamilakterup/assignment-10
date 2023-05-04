import React, {useState} from "react";

const Newsletter = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="bg-gray-100 mt-32 py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl mb-4 text-gray-900">
                    Subscribe to our Newsletter
                </h2>
                <p className="mb-8 text-gray-800 font-medium">
                    Stay up to date with our latest news and recipes by subscribing to our
                    newsletter!
                </p>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col lg:flex-row justify-center items-center gap-3"
                >
                    <input
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full lg:w-auto px-4 py-2 border rounded focus:outline-none focus:border-gray-500"
                    />
                    <button
                        type="submit"
                        className="w-full lg:w-auto px-4 py-2 bg-gray-500 rounded text-[#f9f9f9] hover:bg-gray-600 transition-all"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;