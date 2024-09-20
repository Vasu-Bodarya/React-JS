import Data from "./Data";

function App() {

  const data = [
    {
      id: 1,
      name: 'kishan',
      email: 'john@example.com',
      password: 'kishan@123',
      course: ["html", "css", "bootstrap", "js"],
      city: "surat"
    },
    {
      id: 2,
      name: 'jay',
      email: 'jay@example.com',
      password: 'jay@123',
      course: ["html", "css", "bootstrap", "nodejs"],
      city: "mumbai"
    },
    {
      id: 3,
      name: 'ajay',
      email: 'ajay@example.com',
      password: 'ajay@123',
      course: ["html", "css", "bootstrap", "react"],
      city: "delhi"
    },
    {
      id: 4,
      name: 'nisha',
      email: 'nisha@example.com',
      password: 'nisha@123',
      course: ["html", "css", "bootstrap", "angular"],
      city: "banglore"
    }
  ];

  return (
    <div>
      <Data
        dt={data}
      />
    </div>
  )
}

export default App
