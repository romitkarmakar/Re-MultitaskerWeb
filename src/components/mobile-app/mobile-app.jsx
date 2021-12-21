import React from 'react'

export default function MobileApp () {
    return (
        <>
            <section className="section" id="promotion">
                <div className="container">
                    <div className="row">
                        <div className="center-heading">
                            <h2>On the <em>Move?</em></h2>
                            <h3 class="text-center">Application Coming Soon</h3>
                        </div>
                        <div className="right-text offset-lg-1 col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                            <p>
                                Work with the pro, talented people at the most affordable price to get the most out of your time and cost using mobile apps.
                                <br />
                                Download the Multitasker App and get the tasks you need completed with just a tap of the button. You can also browse available tasks and earn money wherever you go!
                            </p>
                            <br />
                            <img src="https://www.google.com/intl/en/cast/about/static/images/download-badges/android-download.png" class="mb-2" width="200" />
                            <img src="https://playdigious.com/wp-content/uploads/2021/06/App-Store-Download.png" width="200" />
                        </div>
                        <div className="left-image col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix-big"
                            data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">


                            <iframe src="https://embed.lottiefiles.com/animation/88958" height="600"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}