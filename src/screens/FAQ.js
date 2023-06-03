import React, { useState } from 'react';


const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      question: 'Why am I not receiving order confirmation emails?',
      answer:
        "There could be a few reasons why you are not receiving order confirmation emails. First, check your spam or junk mail folder to see if the emails are being filtered there. If not, it's possible that the emails are being blocked by your email provider. You may need to add the sender's email address to your safe sender list or whitelist. Another possibility is that there was a typo in the email address you provided at checkout. If none of these solutions work, contact customer support for assistance."
    },
    {
      question: 'How do I track my order?',
      answer:
        "To track your order, log in to your account on the e-commerce website and navigate to your order history. There should be a tracking number associated with your order that you can use to track its progress on the carrier's website. If you did not create an account or did not receive a tracking number, contact customer support for assistance."
    },
    {
      question: 'Why is my payment not going through?',
      answer:
        'There are several reasons why your payment may not be going through. First, make sure that the payment information you provided is correct and that the card has not expired. If everything appears to be correct, try using a different payment method or contacting your bank to ensure that there are no issues on their end. If the problem persists, contact customer support for assistance.',
    },
    {
      question: 'What is the return policy?',
      answer:
        'The return policy will vary depending on the e-commerce website. Typically, there is a certain window of time during which you can return an item for a refund or exchange. Make sure to read the return policy carefully before making a purchase. If you have any questions about the return policy, contact customer support for assistance.',
    },
  ];
  

  const toggleAnswer = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className="faq" >
     <h2>Frequently Asked Questions</h2>
      <ul>
        {faqData.map((faq, index) => (
          <li key={index}>
            <div className="question" onClick={() => toggleAnswer(index)}>
              {faq.question}
              {activeQuestion === index ? (
                <i className="fa fa-chevron-up"></i>
              ) : (
                <i className="fa fa-chevron-down"></i>
              )}
            </div>
            {activeQuestion === index && <div className="answer">{faq.answer}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
