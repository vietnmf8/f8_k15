function App() {
    return (
        <div className="flex justify-center items-center h-screen ">
            <div className=" flex gap-5 items-center w-sm bg-white px-7 py-4 rounded-2xl shadow-2xl border border-black/10 ">
                <img
                    className="h-20"
                    src="https://avatar.iran.liara.run/public"
                />
                <div className="">
                    <div className="text-lg font-semibold mb-0.5 font-lato max-sm:hidden">ChitChat</div>
                    <div className="text-black/50 mb-2">Product Engineer</div>
                    <button className="text-purple-600 border-purple-100 border py-1 px-4 rounded-2xl hover:text-white hover:bg-purple-600 font-semibold">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
