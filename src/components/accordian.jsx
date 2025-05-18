import { useState } from 'react';

const AccordionItem = ({ index, title, content, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <div className="border border-darkblue rounded-xl mb-2 overflow-hidden shadow-sm ">
      <button
        className={`w-full flex justify-between items-center px-6 py-3 text-left ${isOpen ? 'bg-white text-textgray' : 'bg-darkblue text-white hover:bg-skyblue'}  `}
        onClick={() => setOpenIndex(isOpen ? null : index)}
      >
        <span className={`text-[20px] font-medium ${isOpen ? 'text-darkblue' : ' text-white'}`}>{title}</span>
        <span className={`text-lg  rounded-full w-6 h-6 flex items-center justify-center ${isOpen ? 'text-white bg-darkblue' : ' text-darkblue bg-white'}`}>{isOpen ? 'x' : '+'}</span>
      </button>
      <div
        className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-40 pb-4' : 'max-h-0'
        }`}
      >
        <p className="text-[#666666] text-base leading-6">{content}</p>
      </div>
    </div>
  );
};

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0); // First item open by default

  const items = [
    { title: 'How does decentralized lending work?', content: 'Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit. Norem ipsum dolor sit amet, consectetur adipiscing elit. ' },
    { title: 'What assets can I use as collateral? ', content: 'Content for accordion item 2.' },
    { title: 'What happens if my LTV exceeds the liquidity threshold?', content: 'Content for accordion item 3.' },
    { title: 'Is KYC mandatory?', content: 'Content for accordion item 4.' },
    { title: 'Are my funds secure? ', content: 'Content for accordion item 5.' },
  ];

  return (
    <div className="w-10/12 mx-auto mt-10 flex flex-wrap gap-x-10 gap-y-5">
    {items.map((item, index) => (
      <div key={index} className="w-full md:w-[calc(50%-20px)]">
        <AccordionItem
          index={index}
          title={item.title}
          content={item.content}
          openIndex={openIndex}
          setOpenIndex={setOpenIndex}
        />
      </div>
    ))}
  </div>
  );
}
