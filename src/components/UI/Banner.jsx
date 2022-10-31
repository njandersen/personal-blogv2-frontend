function Banner() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row ">
      <img
        src={"/src/assets/Me-n-Fox2.jpg"}
        alt="Profile Image"
        className="relative mx-auto rounded-full w-80 h-80 mt-20 transition-all duration-300 cursor-pointer"
      />
      <p>Software Engineer, General Nerd.</p>
      <h1 className="text-3xl p-4">Jordy's Blog</h1>
    </div>
  );
}

export default Banner;
