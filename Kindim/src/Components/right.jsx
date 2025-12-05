function Right() {
    return (
        <div className="flex-1">
            <h1 className="text-4xl font-bold mb-6 text-center">
                Set New Password
            </h1>

            <div className="flex flex-col items-center gap-4">

                <input
                    type="number"
                    placeholder="OTP"
                    className="w-[85%] py-3 px-4 rounded-xl bg-[#f2f2f2] border border-gray-300"
                />

                <input
                    type="password"
                    placeholder="New Password"
                    className="w-[85%] py-3 px-4 rounded-xl bg-[#f2f2f2] border border-gray-300"
                />

                <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-[85%] py-3 px-4 rounded-xl bg-[#f2f2f2] border border-gray-300"
                />

                <button className="w-[85%] py-3 bg-blue-600 text-white text-lg rounded-xl font-semibold hover:bg-blue-700">
                    Set
                </button>

            </div>
        </div>
    );
}

export default Right;
