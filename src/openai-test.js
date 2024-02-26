
const OpenAI = require("openai");

const openai = new OpenAI();

const fetchData = 
async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Say hello world in ten different languages." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
};

return (
    <div>
        <h1>Hello World around the World</h1>
        <button onClick={fetchData}>Generate languages</button>
        {}
    </div>
)

main();
