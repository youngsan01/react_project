import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>사이트 제목 변경 테스트!</title>
      </Helmet>
      <dic>{t('아이디')}</dic>
      <div>{t('약관에_동의')}</div>
      <div>{t('없는_문구')}</div>
      <button type="bytton" onClick={() => i18n.changeLanguage('ko')}>
        한국어
      </button>
      <button type="bytton" onClick={() => i18n.changeLanguage('en')}>
        Englisg
      </button>
    </>
  );
};

export default App;
