import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OpenAI from "openai";
import ChatCompletion from "openai";

import './App.css'

const App = () =>{
  //Make the connection to OpenAI API, and give api key, allow it to display on browser
  const openai = new OpenAI({ apiKey:'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',dangerouslyAllowBrowser: true});

  //Make useState hook to set the response received by AI on the screen
  const [response, setResponse] = useState("");

  //Get the message from open ai
  const getData = async () =>{
  
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "Say hello world in ten different languages." }],
      model: "gpt-3.5-turbo",
    });
  
    //check if the message is null, else setResponse to message    
    const message = completion.choices[0].message.content?.toString();
    
    if(message) {
    setResponse(message);
    }else{
      const message  = "No responsse, please try again later";
      setResponse(message);
    }
   
    
  };
  
  
return (
  <div>
      <h1>Hello World around the World</h1>
      {/* create a button that will call the OPEN AI API when clicked */}
      <button onClick={getData}>Generate languages</button>
        
        {/* If a response is generated and not null, display it */}
      {response && (
      <div>
        <h2>API response</h2>
        <pre>{response}</pre>
        </div>
        )}
  </div>
);
};

export default App
