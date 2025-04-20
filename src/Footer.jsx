import "./Footer.css";

function Footer() {
  const company = [
    "Innovations",
    "Business Services",
    "Financial services",
    "Lejhro Recruiter",
    "About",
    "Blogs",
  ];

  const programs = ["Lejhro Bootcamp"];

  const support = ["Contact", "Terms of Use", "Privacy Statement"];

  const connectwithus = ["Facebook", "Youtube", "LinkedIn"];

  return (
    <>
      <div className="Footer-header"></div>
      <div className="Footer-body">
        <div className="Footer-body-container">
          <div className="Footer-section">
            <h3>Company</h3>
            <ul>
              {company.map((comp) => (
                <li>{comp}</li>
              ))}
            </ul>
          </div>
          <div className="Footer-section">
            <h3>Programs</h3>
            <ul>
              {programs.map((comp) => (
                <li>{comp}</li>
              ))}
            </ul>
          </div>
          <div className="Footer-section">
            <h3>Support</h3>
            <ul>
              {support.map((comp) => (
                <li>{comp}</li>
              ))}
            </ul>
          </div>
          <div className="Footer-section">
            <h3>Support</h3>
            <ul>
              {connectwithus.map((comp) => (
                <li>{comp}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
