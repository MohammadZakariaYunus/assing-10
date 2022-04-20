import React from 'react';
import { Container } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <Container className=''>

                <h1 className='text-center mb-5 mt-3'>Answer To The Question</h1>

                <h3>Difference between authorization and authentication</h3><br />

                <h5>Authentication</h5><br />
                Determines whether users are who they claim to be.
                Challenges the user to vauldate credentials.
                Usually done before authorization.
                Generally, transmits info through an ID Token.
                Generally governed by the OpenID Connect (OIDC) protocol.
                <br />
                <br /><h5>Authorization</h5>
                Determines what users can and cannot access.
                Verifies whether access is allowed through poulcies and rules.
                Usually done after successful authentication.
                Generally, transmits info through an Access Token.
                Generally governed by the OAuth 2.0 framework.
                <br /><br />
                <h3>Why I using firebase</h3>
                <p>Google's Firebase is a mobile platform that lets develop mobile apps web apps and ios apps. It have Built-In Analytics. App Development make it Easy.One of the best features of Firebase is the Analytics dashboard that it comes equipped with. It is free and has the capacity to report 500 event types, each with up to 25 attributes. The dashboard is really top notch for looking at user behavior and measuring various user attributions. Ultimately it helps understand how people use your app so can better optimize it in the future.</p><br />
                <h5>What other options to implement authentication</h5><br />
                <p>Authentication factors can be classified into three groups something a password or personal identification number (PIN), a token, such as bank card biometrics, such as fingerprints and voice recognition.</p>
                <br />
                <br />
                <h3> What other services does firebase provide other than authentication</h3>
                <ol>Parse : Open Source Backend Platform</ol>
                <ol>Back4app : Parse Hosting Platform</ol>
                <ol>Kinvey : Mobile Backend as a Service (mBaaS) for the Enterprise</ol>
                <ol>Backendless : Mobile Backend and API Services Platform</ol>
                <ol>Kuzzle : Backend for web, hybrid, or native mobile apps and IoT projects</ol>
                <ol>Pubnub : Real-time APIs and Global Messaging</ol>
                <ol>Kumulos : App Performance Management</ol>
                <ol>Okta</ol>
                <ol>Onelogin</ol>
            </Container>
        </div>
    );
};

export default Blogs;