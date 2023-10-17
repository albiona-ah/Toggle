import { useState } from "react";


import "./Tab.css";

function App() {
  const [selected, setSelected] = useState(null)
  const toggle = (i) => {
    if (selected ===i) {
      return setSelected(null)
    }
    setSelected(i)

  }
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className={selected === i? 'content show' : 'content'}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "Why park a domain name in Parkname?",
    answer:
"Parkname is the leading industry standard for domain name parking and monetizaion services. We offer a wide variety of services to help you achieve success."  },
 
];

export default App;
