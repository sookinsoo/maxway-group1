import React from 'react';
import Bg from "./BizHaqimizda_img/bizhaqimizdaBg.webp"
import Footer from '../Menyu/Footer';
const AboutUs = () => {
  return (
    <div className="w-[1440px] mx-auto my-0">
      <div className="w-[88%] mx-auto my-0">
      <h1 className = "text-4xl font-bold py-6 text-black">Kompaniya haqida</h1>
      <img src={Bg} alt="bg" className = "rounded-[10px]  w-[100%] h-[300px]" />
      <p className="text-[17px] font-normal py-9 text-[#252C32]" >Birinchi Max Way muassasasi 2005 yilda ochildi. Dastlabki bosqichda eng yuqori o'rinlarda burgerlar,<br /> donarlar va lavashlar edi. 
        Bugungi kunda u Toshkent shahrida 20 ta filialiga ega taniqli va jadal <br /> rivojlanayotgan brenddir. Eng ko'p sotilgan taomlar - 
        burgerlar, longerlar, sendvichlar, lavashlar va donar <br /> kaboblar. <br />
        Max Way mashhur bo'lgan taom - bu klab sendvichi. Tovuq shnitsel maxsus retsept bo'yicha marinadlanadi <br /> va ajoyib ta'mga ega bo'ladi.
        Aynan shuning uchun ko'plab mehmonlar menyudagi shu elementni afzal <br /> ko'radi. <br />
        Max Way faqat halol mahsulotlardan foydalanadi. Asosiy menyuga qo'shimcha ravishda kam yog'li souslar <br /> qatorini ham taklif etadi. Tarmoq
        oshpazlari foydalanayotgan mahsulotlar sifatiga alohida e’tibor qaratadi. <br /> Max Way'da mahsulotlar juda yangi va ISO standartlariga muvofiq 
        saqlanadi. Taomlar nafaqat mazali, balki <br /> oson hazm bo'ladigan va tez ovqatlanish uchun ham, to'liq ovqatlanish uchun ham mos keladi. 
        Max Way <br /> filiallarining har qandayida osoyishta va qulay muhit hukm suradi va tarmoqning do'stona jamoasi <br /> uzilishlarsiz va muammosiz ishlaydi.
        Kun davomida siz tarmoq restoranlarida turli xil mehmonlarni <br /> uchratishingiz mumkin: maktab o'quvchilari, talabalar va ishdan keyin to'yimli
        ovqatlanishni xohlaydigan <br /> biznesmenlar. <br />
        Max Way - bu bolali ota-onalar ham tez-tez tashrif buyuradigan joy va muassasa oilaviy tez xizmat <br /> ko'rsatish restoraniga aylandi.  Har kimga 
        individual yondashuv, xilma-xil va mazali menyu, malakali va ayni <br /> paytda qulay tartib, shuningdek, Max Way'dagi ideal tozalik - bular mehmonlarni
        restoranga qayta-qayta <br /> kelishga undaydigan asosiy belgilardir. Natijada, katta Max Way oilasining muvofiqlashtirilgan ishi 2021 <br /> yilda nufuzli 'Yil 
        brendi' mukofotiga sazovor bo'ldi. <br />
        Tarmoqda yetkazib berish guruhi mavjud. Telefon orqali yoki Telegram boti orqali buyurtma berishingiz <br /> mumkin. Maksimal yetkazib berish muddati - 45 daqiqa.
        Barcha filiallar qulay joylarda joylashgan. Max Way <br /> shuningdek, turli xil aksiyalar, bonuslar va chegirmalarni o'tkazadi va menyuni muntazam ravishda yangilab <br />
        boradi. O'rtacha hisob 30 dan 60 ming so'mgacha o'zgarib turadi. To'lov mijoz uchun qulay bo'lgan har <br /> qanday usulda amalga oshirilishi mumkin.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutUs;
