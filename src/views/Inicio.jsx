import React from 'react'

function Inicio() {
    return (
        <div>
            <Navbar />
            <BotonSubir />
            <div className="row m-5 p-3"></div>
            <Parrafoimg titulo={"BIENVENIDO"} imagen={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYM5xdFNn6V2kdSmD1_dk6Kv2AOAVG49LeXVV6AiXtM2K0ehYmSgPBntCl75m17GX8KsS0sm41WMM5N4gU9NJ30Na-069StK_4=w958-h918-rw-v1"} />
            <div className="row m-5 p-3"></div>
            <Carrusel />
            <div id="cuadriculaImagenes" className="row text-center mt-5">
                <div className="col-4">
                    <ImgHov nombre={"Zorro Culpeo"} imagenAnimales={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihYZuIK6NXi4MLf53jr5fCRNxWVo_FErnC-ibFCVLmpa-3ix8bvdSAlp2H7fK_54DxGiMW0t418GHSCYkHJ3-0zbG_LCp9ljy0s=w1920-h919-rw-v1"} />
                </div>
                <div className="col-4">
                    <ImgHov nombre={"Picaflor de Arica"} imagenAnimales={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihaMFwHB6oHolbnHQh_CkPmvcMbExYTCx69DwCmKSfK--fiT0xsGK72FrN7rzZDDWKEAcf8_RDYwN5zVBE2jODZCnLNMCPeQoe8=w1920-h919"} />
                </div>
                <div className="col-4">
                    <ImgHov nombre={"Chungungo"} imagenAnimales={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihY6DnrWC3JpclWYPAvvZbvCn6_03xeCFha-Z887bE21IO69l_d8HQLvpSVq1hsQVq2GXhrVzjFxc2G7yaLxrhAAGpm1Z_8q9pE=w1920-h919-rw-v1"} />
                </div>
            </div>
            <div className="row m-5"></div>
            <Parrafoimg titulo={"¿CÓMO FUNCIONA BIOMAP?"} imagen={"https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihb75EdVPBYCcRA-jpPjDIUEvRpHks-bL9wJl70KD6vWgdxjoFskuzG9uaAoyjEMDcXQCF5jQuBzDed42WGir57IVUw_mK595E8=w958-h918"} />
            <div className="row m-5"></div>
            <Footer />
        </div>
    )
}

export default Inicio