function About() {
  return (
    <>
      <div className="flex w-10/12">
        <img className="w-4/12 mr-10 rounded-2xl shadow-md" src="/images/about/me.jpeg" alt="" />
        <div className="text-xl">
          <h2 className="text-2xl">About Me</h2>
          <p>Hello!</p>
          <p>My name is Luna Jiang, an illustrator and designer who wants to work for video games. This goal is the driving force of my creation. My work is influenced by a lot of games, with strong colors and rich details.</p>
          <p>I love telling stories in my works, and exploring the relationship between characters and backgrounds keeps me entertained.</p>
          <button className="bg-black border-none text-white flex items-center justify-center pt-3 cursor-pointer px-3">RESUME</button>
        </div>
      </div>
    </>
  );
}

export default About;
