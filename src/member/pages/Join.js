import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import JoinContainer from "../containers/JoinContainer";
import { OutletBox } from "../components/LayoutBox";
import { MainTitle } from "../components/TitleBox";

const Join = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("회원가입")}</title>
      </Helmet>
      <OutletBox>
        <MainTitle>{t("회원가입")}</MainTitle>
        <JoinContainer />
      </OutletBox>
    </>
  );
};

export default React.memo(Join);
