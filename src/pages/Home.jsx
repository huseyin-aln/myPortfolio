const Home = () => {
  return (
    <div className="home-container d-flex justify-content-center align-items-center m-auto">
      <div className="bg-image"></div>
      <div className="home d-flex justify-content-center align-items-center flex-column">
        <div className="container m-auto col-9 home-text">
          <h2 className=" fullName">Hüseyin Arslan</h2>
          <h2 className=" frondEnd">I'm a Front-End Developer</h2>
          <h5 className="desc">
            I’m a Frond-End Developer specializing in building exceptional
            digital experiences. Currently, I’m focused on building responsive
            web applications.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
