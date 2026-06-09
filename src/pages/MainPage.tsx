export default function MainPage(){
    return(
        <div className="min-h-screen bg-[#080808] flex items-center justify-center p-10">

            <div className="max-w-6xl w-full 
                            grid grid-cols-2 
                            border border-zinc-500 
                            rounded-tl-4xl overflow-hidden">
                                
                
                <div className="bg-[#090909] p-16 flex flex-col justify-center">

                    <h1 className="text-4xl font-bold leading-tight">
                        Watch Free
                        <br/>
                        <span className="text-red-700">
                            Anime
                        </span>
                        {" "}Online
                    </h1>
                    

                    <div className="mt-10 flex border border-zinc-700 rounded-lg overflow-hidden">

                        <input
                            className="flex-1 p-4 outline-none"
                            placeholder="Search anime..."
                        />

                        <button className="bg-red-700 px-10 font-bold">
                            Filter
                        </button>

                    </div>

                    <a href="http://localhost:5173/anime">                    
                    <button className="mt-10 bg-red-700 w-fit px-10 py-3 font-bold" >
                        Search
                    </button>
                    </a>


                </div>

                
                <div className="bg-[#151515] p-16 flex flex-col">


                    <h2 className="border-l-4 border-red-500 pl-5
                                   text-2xl font-bold tracking-widest">

                        ANIXO: BEST FREE ANIME STREAMING

                    </h2>


                    <p className="mt-8 text-zinc-400 leading-8">

                        Anime transcends mere animation; it serves as a portal
                        to captivating worlds brimming with emotion,
                        creativity, and storytelling.

                    </p>


                    <p className="mt-6 text-zinc-400 leading-8">

                        However, not all platforms deliver an exceptional
                        experience.

                    </p>



                    <div className="mt-auto border-t border-zinc-800 pt-8
                                    flex justify-between">


                        <div>
                            <h3 className="text-2xl font-bold">
                                80k+
                            </h3>
                            <p className="text-zinc-500">
                                EPISODES
                            </p>
                        </div>


                        <div>
                            <h3 className="text-2xl font-bold">
                                Ad-Free
                            </h3>
                            <p className="text-zinc-500">
                                STREAMING
                            </p>
                        </div>


                        <div className="flex gap-5 items-center">

                            <span>ABOUT</span>
                            <span>CONNECT</span>

                        </div>


                    </div>


                </div>

            </div>

        </div>
    )
}