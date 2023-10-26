import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "../assets/tiyatro.png";
import img2 from "../assets/sergi.jpg";
import img3 from "../assets/konser.jpeg";

class About extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <Card
              imgsrc={img1}
              title="Tiyatro"
              text="Tiyatro, özvarlığımızı farketmemize yarayan şeylerin, mutlulukların,  nefretlerimizin, üstünlüklerimizin ve zaaflarımızın büyülü aynasıdır. "
            ></Card>
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img2}
              title="Sergi"
              text="İBB’nin özel desteğiyle İstanbullularla buluşan Refik Anadol’un “Makine Hatıraları: Uzay” sergisi, YouTube’da tüm Türkiye ile buluşuyor. "
            ></Card>
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img3}
              title="Konser"
              text="Konser bir dinleyici topluluğu önünde bir şarkıcı ya da müzik grubunun; müzisyenlerin seyirci önünde müzikal anlamda gösterdikleri canlı performansıdır. 
            "
            ></Card>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
