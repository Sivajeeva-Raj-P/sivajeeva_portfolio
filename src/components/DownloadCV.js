import React from "react";

// Secure deploy-only CV: the canonical CV file should live in public/CV.pdf
// Only changes to that file via repo commit + redeploy will update it.
function DownloadCV() {
  return (
    <div className="cv-wrapper">
      <a href="/Sivajeeva_CV_14022026.pdf" download className="link cv-btn">Download CV</a>
    </div>
  );
}

export default DownloadCV;
