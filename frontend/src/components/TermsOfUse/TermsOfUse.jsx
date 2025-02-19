import React, { useEffect } from "react";
import "./TermsOfUse.css";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="terms-of-use-container">
      <div className="terms-of-use">
        <h1>О сайте </h1>
        <p>
          <em>Последнее обновление: 10.02.2025</em>
        </p>

        <section>
          <h2>1. Введение</h2>
          <p>
            Данный сайт создан для предоставления исчерпывающей информации о
            профессиональной деятельности доктора, его опыте и квалификации, а
            также о спектре оказываемых медицинских услуг. Сайт предназначен для
            того, чтобы пациенты могли получить актуальные сведения, ознакомиться
            с методами лечения и записаться на приём в удобное для них время.
          </p>
        </section>

        <section>
          <h2>2. Медицинские услуги</h2>
          <p>
            На сайте представлена подробная информация о всех медицинских услугах,
            которые оказывает доктор. В каждом разделе содержится описание
            диагностических методов, лечебных процедур, консультаций и
            рекомендаций по профилактике заболеваний. Благодаря этому пациенты
            могут сделать осознанный выбор и заранее ознакомиться с предлагаемыми
            методами лечения.
          </p>
        </section>

        <section>
          <h2>3. Онлайн-запись и консультации</h2>
          <p>
            Сайт оснащён удобной системой онлайн-записи, позволяющей быстро и без
            лишних затрат выбрать удобное время для визита. Дополнительно, сервис
            предоставляет возможность предварительной консультации, что помогает
            уточнить все организационные вопросы перед посещением клиники.
          </p>
        </section>

        <section>
          <h2>4. Блог и информационный раздел</h2>
          <p>
            В блоге регулярно публикуются статьи, новости и рекомендации, связанные
            с современными методами диагностики и лечения, а также практические
            советы по здоровому образу жизни. Этот раздел помогает пациентам быть
            в курсе последних медицинских исследований и нововведений в области
            здравоохранения.
          </p>
        </section>

        <section>
          <h2>5. Контактная информация</h2>
          <p>
            Для удобства посетителей на сайте размещены все необходимые контактные
            данные: адрес клиники, телефон, электронная почта и форма обратной
            связи. Это позволяет пациентам оперативно связаться с доктором для
            получения консультации или уточнения деталей приёма.
          </p>
        </section>

        <section>
          <h2>6. Безопасность и конфиденциальность</h2>
          <p>
            Сайт соответствует современным требованиям по безопасности информации.
            Все персональные данные пациентов надежно защищены и обрабатываются в
            строгом соответствии с законодательством, что гарантирует
            конфиденциальность и сохранность передаваемых сведений.
          </p>
        </section>

        <section>
          <h2>7. Заключение</h2>
          <p>
            Сайт доктора является надёжным инструментом для получения качественной
            медицинской помощи. Он объединяет в себе актуальную информацию о
            медицинских услугах, удобный сервис онлайн-записи и полезный
            информационный контент, что позволяет пациентам быстро и комфортно
            получить необходимую поддержку и консультации.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfUse;
