import React from 'react';

export default function About(props) {
    return (
        <>
            <div className={`container mt-4 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'} rounded p-4`} data-bs-theme={props.mode}>
                <h2 className='my-4 text-center'>About Us</h2>
                <div className="accordion" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                What is our Text Analyzer?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div className="accordion-body">
                                Our Text Analyzer is a powerful tool built using React and Bootstrap. It helps you manipulate and analyze text in various ways, such as converting text to uppercase or lowercase, counting paragraphs, sentences, words, characters, spaces, and punctuations. Additionally, it provides an average reading time and a preview of the submitted text.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                How does it work?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div className="accordion-body">
                                Simply input your text into the analyzer, and it will process the text to provide detailed statistics and transformations. The user-friendly interface ensures that you can easily navigate and utilize all the features.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-3">
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                What features does it offer?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionPanelsStayOpenExample">
                            <div className="accordion-body">
                                <ul className="list-unstyled">
                                    <li><strong>Text Transformation:</strong> Convert text to uppercase or lowercase.</li>
                                    <li><strong>Text Statistics:</strong> Count paragraphs, sentences, words, characters, spaces, and punctuations.</li>
                                    <li><strong>Reading Metrics:</strong> Calculate average reading time.</li>
                                    <li><strong>Text Preview:</strong> View a preview of the submitted text.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
