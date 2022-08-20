import React from "react";
import MIssionVision from "../../components/PageComponent/AboutPage/MissionVision/MIssionVision";
import WhatClientsSays from "../../components/PageComponent/AboutPage/What ClientsSays/WhatClientsSays";
import WhatWeProvide from "../../components/PageComponent/AboutPage/whatWeProvideSection/WhatWeProvide";
import WhoWeAre from "../../components/PageComponent/AboutPage/WhoWeAre/WhoWeAre";
import Layout from "../../HOC/Layout/Layout";

function Aboutus() {
  return (
    <div>
      <Layout>
        <div>
          {/* <div className={styles.container}> */}
          <WhoWeAre />
          <MIssionVision />
          <WhatWeProvide />
          {/* <WhatClientsSays /> */}
          {/* </div> */}
        </div>
      </Layout>
    </div>
  );
}

export default Aboutus;
