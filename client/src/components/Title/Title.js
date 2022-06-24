import React, { Fragment } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Title = ({ title }) => {
    return (
        <Fragment>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>
        </Fragment>
    )
}

export default Title
