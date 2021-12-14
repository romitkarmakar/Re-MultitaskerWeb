
export default function Howitworks () {
    const mystyle={width: "60px",
        height: "60px",
        top: "-30px",
        borderWidth: "4px !important",
         backgroundColor: "#8EC63E"}
    
    return(
        <>
        <div class="container my-5">
    <section id="steps">
        <div class="text-center mb-5">
        <div className="center-heading">
                            <h2>How It <em>Works?</em></h2>
                            <p>Suspendisse vitae laoreet mauris. Fusce a nisi dapibus, euismod purus non, convallis odio.
                                Donec vitae magna ornare, pellentesque ex vitae, aliquet urna.</p>
                        </div>        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="bg-light position-relative px-3 my-5">
                    <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white" style={mystyle}>
                        1
                    </div>
                    <div class="px-3 text-center pb-3">
                        <h4>Headline</h4>
                        <p class="font-weight-light my-3">Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet
                            deleniti et fugit iusto nesciunt.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="bg-light position-relative px-3 my-5">
                    <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                        style={mystyle} >
                        2
                    </div>
                    <div class="px-3 text-center pb-3">
                        <h4>Headline</h4>
                        <p class="font-weight-light my-3">Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet
                            deleniti et fugit iusto nesciunt.</p>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="bg-light position-relative px-3 my-5">
                    <div class="font-weight-bold circle text-white rounded-circle d-flex align-items-center justify-content-center mx-auto position-relative border border-white"
                       style={mystyle}> 3
                    </div>
                    <div class="px-3 text-center pb-3">
                        <h4>Headline</h4>
                        <p class="font-weight-light my-3">Lorem ipsum dolor sit consectetur adipisicing elit. Alias amet
                            deleniti et fugit iusto nesciunt.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
        </>
    )
    
}
