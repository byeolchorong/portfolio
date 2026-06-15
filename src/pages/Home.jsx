import profile from "../assets/images/profile.png";

function Home() {
  return (
    <main>
      <section id="hero" className="container hero-section">
        <div className="hero-content">
          <h6>PORTFOLIO</h6>
          <h5>Park A Young / Backend Developer</h5>
          <h1>
            데이터 흐름을 설계하고 <br />
            구조적인 해결책을 <br />
            만드는 개발자
          </h1>
          <p>
            문제의 원인을 분석하고, 지속 가능한 해결책과 더 나은 구조를
            고민합니다.
          </p>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <img src={profile} alt="Park A Young" />
          </div>
        </div>
      </section>
    </main>
  );
}
export default Home;
