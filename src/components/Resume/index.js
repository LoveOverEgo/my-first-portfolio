import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Pdf from '../../assets/images/MichaelArvelo_Resume.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offset) {
      setPageNumber(prevPageNumber => prevPageNumber + offset);
    }
  
    function previousPage() {
      changePage(-1);
    }
  
    function nextPage() {
      changePage(1);
    }
    return(
        <section className="resume">   
            <div className='container'>
                <a className="card" href={Pdf} target="_blank" rel='noreferrer'>
                    <h3 className="title">Download resume </h3> 
                </a>

                <Document file={Pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                </Document>
    
                <div>
                    <p>
                      Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                    </p>
                    <div className="button-wrapper">
                        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                            Previous 
                        </button>

                        <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                           Next
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Resume;