import "./App.css";
import Description from "./Description";
import Image from "./Image";
import Name from "./Name";
import Price from "./Price";
import product from "./product";

function App() {
  const firstName = "Tlili Zohra";
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          <Image image={product.image} />
        </div>
      </div>
      <p className="greeting">
        {firstName ? `Hello, ${firstName}` : "Hello, there!"}
      </p>
      {firstName && (
        <img
          className="profile-image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgCVkSqyY_J8UE__kICij6G8W0do4hg4qw7w&s"
          alt="Hello image"
        />
      )}
    </>
  );
}

export default App;
