import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const QuotingPart = (props) => {
  return (
    <div className='container-quoting p-11 border-4 border-sky-950'>
        <div className="sentence flex items-center justify-center">
        <FaQuoteLeft className="text-xl text-sky-950 mr-3" />
            <h2 className='flex items-center justify-center font-semibold text-gray-900 text-2xl font-mono	'>{props.sentence}</h2>
        <FaQuoteRight className="text-xl text-sky-950 ml-3" />
        </div>
        <div className="sub-sentence p-5 mt-5">
            <h5 className='flex items-center justify-center text-md '>{props.subSentence}</h5>
        </div>
    </div>
  )
}

export default QuotingPart