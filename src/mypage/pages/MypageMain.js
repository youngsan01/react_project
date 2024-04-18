import React from "react";
import MemberOnly from "../../commons/components/auth/MemberOnly";

const mypageMain = () => {
  return (
    <MemberOnly>
      <h1>마이페이지</h1>;
    </MemberOnly>
  );
};

export default React.memo(mypageMain);
