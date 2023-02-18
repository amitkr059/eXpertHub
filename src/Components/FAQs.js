import React from "react";
import './CSS/FAQs.css';

function FAQs(){

    return(
        <div className="FAQs-page">
        <h1 className="FAQs-h1">FAQs</h1>
        <section className="FAQs-sec">
            <div className="FAQs-contanier">
                <div className="FAQs-accordian">
                    <div className="FAQs-accordion-item" id="question1">
                        <a className="FAQs-accordion-link" href="#question1">
                            What is ExpertHub for ?
                            
                            <ion-icon className="ii2" name="add-outline"></ion-icon>
                            <ion-icon className="ii" name="remove-outline"></ion-icon>
                        
                        </a>
                        <div className="FAQs-answer">
                            <p>
                              Our app is mainly focused on teenagers.There is still generation gap among teenagers due to which they don’t open up among their elders.During teenage we go through alot of things and We need someone who can help or guide us without judging us and we can approach them without any hesitation.Our app gives an open platform to them to guide them.

                            </p>
                        </div>
                    </div>
    
                    <div className="FAQs-accordion-item" id="question2">
                        <a className="FAQs-accordion-link" href="#question2">
                            What does ExpertHub offer ? 
                            <ion-icon className="ii2" name="add-outline"></ion-icon>
                            <ion-icon className="ii" name="remove-outline"></ion-icon>
                        </a>
                        <div className="FAQs-answer">
                            <p>
                            Our web app gives in hand solution.It reduces communication gap among teenagers.They are being heard without any sort of judgement	Best advice and councelling is being  provided.Privacy of users is our topmost priority.Best Counsellor is provided according to their domains.
                            </p>
                        </div>
                    </div>
    
                    <div className="FAQs-accordion-item" id="question3">
                        <a className="FAQs-accordion-link" href="#question3">
                            Do You respect our privacy? 
                            <ion-icon className="ii2" name="add-outline"></ion-icon>
                            <ion-icon className="ii" name="remove-outline"></ion-icon>
                        </a>
                        <div className="FAQs-answer">
                            <p>
                            Privacy of users is our topmost priority.Your privacy is totally secured with us.Do come forward and avail our services.

                            </p>
                        </div>
                    </div>
    
                    <div className="FAQs-accordion-item" id="question4">
                        <a className="FAQs-accordion-link" href="#question4">
                            Do you have offline center ?
                            <ion-icon className="ii2" name="add-outline"></ion-icon>
                            <ion-icon className="ii" name="remove-outline"></ion-icon>
                        </a>
                        <div className="FAQs-answer">
                            <p>
                                Unfortunatally we are not offering our services.We are working on it,we will inform you about it in coming days.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
    </div>
    );
    
}
export default FAQs;