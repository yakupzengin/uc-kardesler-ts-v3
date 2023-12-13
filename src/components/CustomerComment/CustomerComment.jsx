import React, { useState } from 'react';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaThumbsUp } from 'react-icons/fa';
import "./CustomerComment.css";

const CustomerComment = () => {
  const testimonials = [
    {
      text: "Kombimizin düzenli bakımını yaptırdık ve şimdi daha verimli çalışıyor. Teşekkürler Üç Kardeşler Teknik Servis.",
      customerName: "Mehmet U.",
      location: "Özlüce",
      like: 10
    },
    {
      text: "Üç Kardeşler Teknik Servis'e ulaştık ve kombimizin tamirini hızlı bir şekilde gerçekleştirdiler. Memnun kaldık.",
      customerName: "Ahmet K.",
      location: "Nilüfer",
      like: 11
    },
    {
      text: "Kombi bakımı için tercihimiz her zaman Üç Kardeşler Teknik Servis. Kaliteli hizmetleri için teşekkür ederiz.",
      customerName: "Zeynep A.",
      location: "Osmangazi",
      like: 15
    },
    {
      text: "Klima arızası nedeniyle servis çağırdık ve sorunumuzu kısa sürede çözdüler. Teknik ekibe teşekkürler.",
      customerName: "Ramazan Y.",
      location: "Beşevler",
      like: 8
    },
    {
      text: "Beyaz eşyalarımız arızalandığından dolayı iletişim kurduk ve gerçekten profesyonel bir servis deneyimi yaşadık.",
      customerName: "Ece T.",
      location: "Özlüce",
      like: 10
    },
    {
      text: "Eşyalarımızı onarırken oldukça nazik davrandılar. Üç Kardeşler Teknik Servis'e teşekkür ederim.",
      customerName: "Erdi B.",
      location: "Beşevler",
      like: 9
    },
    {
      text: "Bulaşık makinesinden gelen sesi çözmeyi başardılar ve temiz işçilik yaptılar. Kesinlikle tavsiye ederim.",
      customerName: "Ayşe Y.",
      location: "Yıldırım",
      like: 11
    },
    {
      text: "Çamaşır makinesindeki performans sorununu giderdiler. Profesyonel ve hızlı bir hizmet aldık. Teşekkürler!",
      customerName: "Ali R.",
      location: "Nilüfer",
      like: 14
    },
    {
      text: "Üç Kardeşler Teknik Servis, arızalı buzdolabımızı kısa sürede tamir etti. Memnuniyetle tavsiye ederim.",
      customerName: "Sevim D.",
      location: "Osmangazi",
      like: 13
    },
    {
      text: "Evimizin kombisi için yaptıkları bakımdan çok memnun kaldık. İşlerini gerçekten iyi yapıyorlar.",
      customerName: "Fatma S.",
      location: "Gürsu",
      like: 15
    }
  ];
  

  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="customer-comment">
      <h2 className="comment-heading">Müşterilerimizin Yorumları</h2>
      <div className="comment-grid">
        <div className="comment-box">
          <div className="quote-row">
            <FaQuoteLeft className="quote-icon" />
            <p className="comment-text">{testimonials[current].text}</p>
            <FaQuoteRight className="quote-icon" />
          </div>
          <h5 className="customer-name">{testimonials[current].customerName}</h5>
          <h5 className="location">{testimonials[current].location}</h5>
          <div className="star-row">
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
            <FaStar className="star-icon" />
          </div>
          <div className="like-row">
            <FaThumbsUp className="like-icon" />
            <p className="like-count">{testimonials[current].like} Beğeni</p>
          </div>
          <div className="buttons">
            <button onClick={handlePrev}>Önceki</button>
            <button onClick={handleNext}>Sonraki</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerComment;
