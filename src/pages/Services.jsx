import React from 'react'
import PagesHead from '../components/PagesHead/PagesHead'
import "../pagesStyles/services.css"
import kombi1 from "../images/kombi.jpeg"
import kombi2 from "../images/kombi-3.jpeg"
import kombi3 from "../images/kombi-2.jpeg"
import kombi4 from "../images/kombi-4.jpeg"
import kombi5 from "../images/kombi-5.jpeg"
import kombiDetail from "../images/kombi-detail.jpeg"
import kombiInside from "../images/kombi-inside.jpeg"
import petekBakim from "../images/petek-bakım.jpeg"
import petekBakim2 from "../images/petek-bakım-2.jpeg"
import camasırMakinesi from "../images/camasırMakinesi.jpeg"
import camasırMakinesi2 from "../images/camasırMakinesi2.jpeg"
import camasırMakinesi3 from "../images/camasırMakinesi3.jpeg"
import buzdolabiTamir from "../images/buzdolabiTamir.jpg"
import bulasikMakinesi from "../images/bulasikMakinesi.jpg"
import klima from "../images/klima.jpg"

const Services = () => {
  const services = [
    {
        image: camasırMakinesi,
        title: "Beyaz Eşya Tamiri",
        content : "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Beyaz Eşya Tamiri hizmeti vermekteyiz."
    },
    {
        image: buzdolabiTamir,
        title : "Buzdolabı Tamiri",
        content: "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Buzdolabı Tamiri hizmeti vermekteyiz.",
    },
    {
        image: bulasikMakinesi,
        title: "Bulaşık Makinesi Tamiri",
        content: "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Bulaşık Makinesi Tamiri hizmeti vermekteyiz."
        
    },
    {
        image: camasırMakinesi2,
        title: "Çamaşır Makinesi Tamiri",
        content : "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Çamaşır Makinesi Tamiri hizmeti vermekteyiz."
    },
    {
        image: klima,
        title: "Klima Tamiri",
        content : "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Çamaşır Makinesi Tamiri hizmeti vermekteyiz."

      },
      {
        image: camasırMakinesi3,
        title: "Küçük Ev Aleti Tamiri",
        content : "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Çamaşır Makinesi Tamiri hizmeti vermekteyiz."
      },
      {
        image: kombi5,
        title: "Kombi Tamiri",
        content : "Eylül Soğutma olarak profesyonel ekip arkadaşlarımıza Çamaşır Makinesi Tamiri hizmeti vermekteyiz."
      },

];

return (
  <div>
    <PagesHead title={"Hizmetler"} />
    <div className='services-container'>
      {services.map((service, index) => (
        <div key={index} className='service-card'>
          <div className="service-card-inner">
            <div className="flex justify-center mb-2">
              <img src={service.image} alt="" />
            </div>
            <div className="service-card-title">
              <h1>{service.title}</h1>
            </div>
            <div className="service-card-content">
              <p>{service.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Services;