function About() {
  return (
    <>
      <div className="flex w-10/12">
        <img className="w-4/12 mr-10 rounded-2xl shadow-md" src="/images/about/me.jpeg" alt="" />
        <div className="text-xl">
          <h2 className="text-2xl">About Me</h2>
          <p>Hi there!</p>
          <p>I’m a Visual Development Artist and Background Painter. I’m currently studying Illustration Entertainment Arts at ArtCenter College of Design in Pasadena, CA. Previously, I studied Graphic Design at Cal Poly Pomona.</p>
          <p>Drawing has been the love of my life since I can remember, and diving into the world of animation has only strengthened my bond! With everything I paint, I make sure to integrate my passion for storytelling along with my love for design.</p>
          <p>When I’m not drawing, you can find me cuddling my dog Sugar or devouring boba by the liters.</p>
          <button className="bg-black border-none text-white flex items-center justify-center pt-3 cursor-pointer px-3">RESUME</button>
        </div>
      </div>
    </>
  );
}

export default About;
