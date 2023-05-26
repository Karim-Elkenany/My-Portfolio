import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import VisibilityIcon from "@material-ui/icons/VisibilityOutlined";

import img1 from "../../assets/project1/pre1.jpg";
import img2 from "../../assets/project1/pre2.jpg";
import img3 from "../../assets/project1/pre3.jpg";
import img4 from "../../assets/project1/pre4.jpg";
import file1 from "../../assets/project1/Project-11.dwg";
import file2 from "../../assets/project1/Project-11-Tendering.xlsx";

import img5 from "../../assets/project2/pre1.jpg";
import img6 from "../../assets/project2/pre2.jpg";
import img7 from "../../assets/project2/pre3.jpg";
import file3 from "../../assets/project2/EL.dwg";
import file4 from "../../assets/project2/EP.dwg";
import file5 from "../../assets/project2/SLD.dwg";
import file6 from "../../assets/project2/Panel-Schedule.xlsx";
import file7 from "../../assets/project2/V.D-S.C.xlsx";

import "./Personal.css";

const Personal = () => {
  return (
    <div className="projectsContainer">
      <div className="project1">
        <div className="projectInfo">
          <h3 className="h3">Hospital basement floor</h3>
          <p className="timeline-text">
          - Electrical Design ( Lighting-Power-Fire Alarm-Data&Telephone-CCTV)
          <br />- Shop Drawing <br />- Tendering
          </p>
          <div className="downloads">
            <a href={file1} download="Project-11.dwg">
              <span type="button" className="btn btn--outline">
                Hospital Basement Floor.dwg
              </span>
            </a>

            <a href={file2} download="Project-11-Tendering.xlsx">
              <span type="button" className="btn btn--outline">
                Basement Floor-Tendering.xlsx
              </span>
            </a>
          </div>
        </div>
        <div className="gallery">
          <LightGallery elementClassNames="gallery-container">
            <a href={img1} className="box">
              <img src={img1} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>

            <a href={img2} className="box">
              <img src={img2} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>

            <a href={img3} className="box">
              <img src={img3} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>

            <a href={img4} className="box">
              <img src={img4} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>
          </LightGallery>
        </div>
      </div>

      <div className="project2">
        <div className="projectInfo">
          <h3 className="h3">Administrative Building</h3>
          <p className="timeline-text">
            Electrical Design (Lighting-Power)
            Calculations (Panel Schedule-V.D & S.C)
            Single Line Diagram
          </p>
          <div className="downloads">
            <a href={file3} download="EL.dwg">
              <span type="button" className="btn btn--outline">
                EL.dwg
              </span>
            </a>

            <a href={file4} download="EP.dwg">
              <span type="button" className="btn btn--outline">
                EP.dwg
              </span>
            </a>

            <a href={file5} download="SLD.dwg">
              <span type="button" className="btn btn--outline">
                SLD.dwg
              </span>
            </a>

            <a href={file6} download="Panel-Schedule.xlsx">
              <span type="button" className="btn btn--outline">
                Panel-Schedule.xlsx
              </span>
            </a>

            <a href={file7} download="V.D-S.C.xlsx">
              <span type="button" className="btn btn--outline">
                V.D-S.C.xlsx
              </span>
            </a>
          </div>
        </div>
        <div className="gallery">
          <LightGallery elementClassNames="gallery-container">
            <a href={img5} className="box">
              <img src={img5} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>

            <a href={img6} className="box">
              <img src={img6} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>

            <a href={img7} className="box">
              <img src={img7} alt="preview" />
              <div className="icon">
                <VisibilityIcon className="i" />
              </div>
            </a>
          </LightGallery>
        </div>
      </div>
    </div>
  );
};

export default Personal;
