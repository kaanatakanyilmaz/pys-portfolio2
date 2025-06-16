function AboutUs() {
  return (
    <div id="aboutus">
      <div className="my-40 flex min-h-[500px] lg:min-h-[400px] xl:min-h-[500px] 2xl:min-h-[700px] px-4 sm:px-8 md:px-16 items-center justify-center transition-all duration-500 ">
        <div>
          <h1 className="text-[30px] md:text-[40px] font-bold text-[#d89c24] mb-5  text-center xl:text-start ">
            Hakkımda
          </h1>
          <div className="flex bg-[#1b1b1b] rounded-2xl shadow-lg px-5 py-5">
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="flex flex-col justify-center items-center flex-1 max-w-[1250px] px-4 ">
                <p className=" font-medium text-sm md:text-base lg:text-lg text-[#fff3da] mt-5 leading-7 p-4 sm:p-6 ">
                  2002 yılında Mersin'de doğdum. 2025 yılında Düzce Üniversitesi
                  Psikoloji Bölümü’nden mezun oldum. Üniversite yıllarımda Düzce
                  Üniversitesi Psikoloji Topluluğu’nu kurarak üç yıl boyunca
                  başkanlık yaptım ve il müdürlüğü ile üniversite iş birliğinde
                  çeşitli projeler gerçekleştirdim. Sosyal ve akademik
                  faaliyetler düzenleyerek psikoloji alanında farkındalık
                  yaratmaya katkıda bulundum. Lisans sürecimde umutsuzluk,
                  mutsuzluk ve depresyon üzerine yoğunlaşarak bu alanlarda
                  araştırmalar yaptım. Formea Yaşam Merkezi’nde stajımı
                  tamamladım. Hâlen akademik yazılar yazmaya devam etmekte,
                  dergi ve makalelere katkı sağlamaktayım. Ayrıca çeşitli
                  söyleşilere katılarak psikoloji alanındaki bilgi ve
                  deneyimlerimi paylaşmaktayım. Çevrimiçi ve yüzyüze terapilerle
                  hizmet vermekteyim. Psikolog Mustafa Kocadağ, Bilişsel
                  Davranışçı Terapi (BDT), Kabul ve Kararlılık Terapisi (ACT) ve
                  Cinsel Terapi alanlarında uzmanlaşmış; yetişkin, çocuk ve
                  ergenlere bilimsel temelli psikolojik destek sunmaktadır.
                  Bireylerin duygu ve düşüncelerini sağlıklı şekilde
                  yönetmelerine yardımcı olmak, psikolojik iyi oluşlarını
                  güçlendirmek ve yaşam kalitelerini artırmalarına rehberlik
                  etmektir. Güvenilir, etik ve etkili bir terapi süreciyle
                  yüzyüze ve online şekilde danışanların kendilerini
                  keşfetmelerine destek olmayı hedeflemektedir.
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <img
                  src="images/mustafa-2.jpg"
                  alt=""
                  className="w-full max-w-[300px] aspect-[3/4] object-cover rounded-3xl p-4 "
                />
                <a href="#contact">
                  <button className="bg-[#313131] text-xl sm:text-2xl p-3 sm:px-6 lg:px-8 mt-4 mb-4 border border-[#9b701a] rounded-3xl hover:bg-[#464646]">
                    İletişim
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutUs;
