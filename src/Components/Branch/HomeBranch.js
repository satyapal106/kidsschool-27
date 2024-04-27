import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BassURl } from '../Api';
import { Base64 } from 'js-base64';

const HomeBranch = () => {
  return (
    <>

        {
            datas == branchurl?.id ? (
            <>
                {
                    isMobile ? (<>

                        <Menu />

                    </>)

                        :


                        (<>

                            <Navbar login={params} />
                            <Footer />
                        </>
                        )
                }
            </>) : "not"
        }
    </>
  )
}

export default HomeBranch;