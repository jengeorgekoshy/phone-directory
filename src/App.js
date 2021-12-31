import Header from './Header';
import './App.css';
import Button from './Button';

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

  const clickHandler = (msg) => {
    alert(msg);
  };

  return (
    <div>
      <Header heading="Phone directory" />
      <div className="container">
        <Button name="ADD" backColor="rgb(38, 226, 38)" color="#fff" />
        <div className="content">
          <p className="name heading">Name</p>
          <p className="phone heading">Phone</p>
        </div>

        {subscribers.map((sub) => {
          return (
            <div className="content">
              <p className="name ">{sub.name}</p>
              <p className="phone ">{sub.phone}</p>
              <Button
                className="delete"
                onClick={clickHandler.bind(this, 'Delete handler clicked')}
                name="DELETE"
                backColor="rgb(223, 18, 11)"
                color="#fff"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
