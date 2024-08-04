export default function Home() {
  return (
    <main>
      <div className="h-[40rem] w-full  bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200  text-center font-sans font-bold">
            Ask anything?
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to Startup, we provide you with all  the
            neccessary information needed to take your aptech career to the next level.
          </p>
          <input
            type="text"
            placeholder="ask a question"
            className="p-3 text-white rounded-lg border border-neutral-800  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
        </div>
      </div>
      <div>


        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis reiciendis illo repellat obcaecati sunt ab voluptatibus ea facere enim! Asperiores, possimus? Asperiores dignissimos optio laborum sit sapiente incidunt at.</p>
      </div>
    </main>
  );
}
