
import React from 'react';
import { FcCallback } from "react-icons/fc";
import "./NavigateServices.css";
import kombi1 from "../../images/kombi.jpeg"
import kombi2 from "../../images/kombi-3.jpeg"
import kombi3 from "../../images/kombi-2.jpeg"
import kombi4 from "../../images/kombi-4.jpeg"
import kombi5 from "../../images/kombi-5.jpeg"
import kombiDetail from "../../images/kombi-detail.jpeg"
import kombiInside from "../../images/kombi-inside.jpeg"
import petekBakim from "../../images/petek-bakım.jpeg"
import petekBakim2 from "../../images/petek-bakım-2.jpeg"
import camasırMakinesi from "../../images/camasırMakinesi.jpeg"
import camasırMakinesi2 from "../../images/camasırMakinesi2.jpeg"
import camasırMakinesi3 from "../../images/camasırMakinesi3.jpeg"
import buzdolabiTamir from "../../images/buzdolabiTamir.jpg"
import bulasikMakinesi from "../../images/bulasikMakinesi.jpg"

const NavigateServices = () => {
  const services = [
    {
      image: kombi1,
      title: "Kombi Tamir",
    },
    {
      image: kombi2,
      title: "Kombi Bakım",
    },
    {
      image: petekBakim2,
      title: "Petek Temizleme",
    },
    {
      image: bulasikMakinesi,
      title: "Bulaşık Makine Tamir",
    },
    {
      image: buzdolabiTamir,
      title: "Buzdolabı Tamir",
    },
    {
      image: camasırMakinesi3,
      title: "Çamaşır Makine Tamir",
    }
  ];

  return (
    <div className="services">
      <h2 className="services-heading">Hizmetlerimiz</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-box">
            <img src={service.image} className="service-image" alt="" />
            <p className="service-title">{service.title}</p>
            <div className="callback-row">
              <FcCallback className="callback-icon" />
              <a className="callback-link" href="tel: 0534 299 59 00 ">
                Yetkili Servis ile iletişime geç | <span className='font-bold'> 0534 299 59 00</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigateServices;