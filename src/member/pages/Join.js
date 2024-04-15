import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import JoinForm from "../components/JoinForm";
import { OutletBox } from "../components/LayoutBox";

const Join = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("회원가입")}</title>
      </Helmet>
      <OutletBox>
        <h1>{t("회원가입")}</h1>
        <JoinForm />
      </OutletBox>
    </>
  );
};

export default React.memo(Join);
