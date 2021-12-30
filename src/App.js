import Header from './Header';
import './App.css';

function App() {
  const subscribers = [
    {
      id: 1,
      name: 'Jen',
      phone: 9188763054,
    },
    {
      id: 2,
      name: 'Tiger',
      phone: 88776231561,
    },
  ];

  return (
    <div>
      <Header heading="Phone directory" />
      <div className="container">
        <button className="add">ADD</button>
        <div className="content">
          <p className="name heading">Name</p>
          <p className="phone heading">Phone</p>
        </div>

        {subscribers.map((sub) => {
          return (
            <div className="content">
              <p className="name ">{sub.name}</p>
              <p className="phone ">{sub.phone}</p>
              <button className="delete">DELETE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
