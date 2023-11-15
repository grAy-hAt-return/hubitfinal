import React from 'react'
import Layout from '../../HOC/Layout/Layout'
import PratnerTop from '../../components/PageComponent/BecomePartner/Partner/PratnerTop'
import Partners from '../../components/PageComponent/BecomePartner/Partner/Partners'
import PartnerLog from '../../components/PageComponent/BecomePartner/Singn & Login/PartnerLog'
import PartnerSingin from '../../components/PageComponent/BecomePartner/Singn & Login/PartnerSingin'

function index() {
  return (
    <>
        <Layout>
            {/* <PratnerTop/> */}
            {/* <Partners/> */}
            {/* <PartnerLog/> */}
            <PartnerSingin/>
        </Layout>
    </>
  )
}

export default index