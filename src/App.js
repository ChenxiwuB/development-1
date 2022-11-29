import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

//load data
const productList = [
    {
        "count":0,      
        "_id":1,
        "title":"UIUXlemon High-Rise Pant",
        "image":"images/1.png",
        "description": "Green Jasper Legging.",
        "price": 118,
        "length": "25",
        "size":"Medium"
        
    },
    {
        "count":0,      
        "_id":2,
        "title":"UIUXlemon High-Rise Crop",
        "image":"images/2.png",
        "description": "Powder Blue Legging.",
        "price": 98,
        "length": "23",
        "size":"Medium"
    },
    {
        "count":0,
        "_id":3,
        "title":"UIUXlemon High-Rise Crop with Pockets",
        "image":"images/3.png",
        "description": "Pink Peony Legging.",
        "price": 118,
        "length": "23",
        "size":"Large"
    },
    {   
        "count":0,
        "_id":4,
        "title":"UIUXlemon High-Rise Tight",
        "image":"images/4.png",
        "description": "Blue Chill Legging.",
        "price": 88,
        "length": "25",
        "size":"Large"
    },
    {  
        "count":0,      
        "_id":5,
        "title":"UIUXlemon Contour Fit High-Waist Crop",
        "image":"images/5.png",
        "description": "Misty Glade Legging.",
        "price": 59,
        "length": "23",
        "size":"Small"
    },
    {
        "count":0,
        "_id":6,
        "title":"UIUXlemon High-Rise Short with Pockets",
        "image":"images/6.png",
        "description": "True Navy Short.",
        "price": 74,
        "length": "6",
        "size":"Medium"
    },
    {
        "count":0,      
        "_id":7,
        "title":"UIUXlemon High-Rise Short with Pockets",
        "image":"images/7.png",
        "description": "Poolside Short.",
        "price": 54,
        "length": "6",
        "size":"Large"
    },
    {
        "count":0,      
        "_id":8,
        "title":"UIUXlemon High-Rise Short with Pockets",
        "image":"images/8.png",
        "description": "Chambray Short.",
        "price": 29,
        "length": "6",
        "size":"Small"
    },
    {
        "count":0,
        "_id":9,
        "title":"UIUXlemon High-Rise Pant with Pockets",
        "image":"images/9.png",
        "description": "Graphite Grey Legging.",
        "price": 128,
        "length": "25",
        "size":"Small"
    },
    {
        "count":0,      
        "_id":10,
        "title":"UIUXlemon High-Rise Tight",
        "image":"images/10.png",
        "description": "Wisteria Purple Legging.",
        "price": 59,
        "length": "25",
        "size":"Medium"
    },
    {
        "count":0,      
        "_id":11,
        "title":"UIUXlemon High-Rise Pant Shine",
        "image":"images/11.png",
        "description": "Radiate Foil Print French Press Legging.",
        "price": 49,
        "length": "25",
        "size":"Small"
    },
    {
        "count":0,      
        "_id":12,
        "title":"UIUXlemon High-Rise Crop",
        "image":"images/12.png",
        "description": "Java Legging.",
        "price": 88,
        "length": "23",
        "size":"Large"
    }
    ]

  const [products, setProducts] = useState([]);
  const [size, setSize] = useState("All");
  const [length, setLength] = useState("All");
  const [sortby, setSortby] = useState();
  const [totalPrice, setTotalPrice] = useState(0);
  const [cart, setCart] = useState([]);

  //for image path
  productList.forEach((item) => {
    item.image = process.env.PUBLIC_URL + "/" + item.image;
    });



  const Products = (para) =>  {
    var props = para.data

    return (
      <div className='flex'>
        <Card style={{ width: '20rem', height: '38rem'}}>
        <Card.Body>
          <Card.Img variant="top" style={{width:'12rem', height: '20rem'}}  src={props.image}/> 
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
              <p>{props.size}</p>
              <p>length: {props.length}''</p>
              <h5>Price: ${props.price}</h5>
              <p>{props.description}</p>
          </Card.Text>
          <Button onClick={()=>addToCart(props)} variant="outline-primary">Add to cart</Button>
        </Card.Body>
        </Card>
      </div>
      
    );
   }

  
  //2 filters 
  const onselectFilterBySize = (event) => {
    setSize(event.target.value);
  }

  const onselectFilterByLength = (event) => {
    setLength(event.target.value);
  }

  const matchesSize = (props) => {
    if (size === "All") {
      return 1
    } else if (size === props.size) {
      return 1
    } else {
      return 0
    }
   }

   const matchesLength = (props) => {
    if (length === "All") {
      return 1
    } else if (length === props.length) {
      return 1
    } else {
      return 0
    }
   }

   const Filter = (props) => {
    if (props.finalItems.length > 0) {
      return (
        <div className='d-flex flex-wrap'>
          {props.finalItems.map((item, index) => (
            <Products key={index} count={item.count} data={item}/>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <p>No items Found</p>
        </div>
      )
    }
   }

   const FilterNav = () => {
    return (
      <div>
        <h3>Filters: </h3>
        <h3>Size:</h3>
        <div className='form-check'>
          <input type="checkbox" name="sizeFilter" value="All" checked={size==="All"} onChange={onselectFilterBySize}/>
          <label><h5>All</h5></label>
        </div>

        <div className='form-check'>
          <input type="checkbox" name="sizeFilter" value="Small" checked={size==="Small"} onChange={onselectFilterBySize}/>
          <label><h5>Small</h5></label>
        </div>

        <div className='form-check'>
          <input type="checkbox" name="sizeFilter" id="flexCheckChecked" value="Medium" checked={size==="Medium"} onChange={onselectFilterBySize}/>
          <label><h5>Medium</h5></label>
        </div>

        <div className='form-check'>
          <input type="checkbox" name="sizeFilter" id="flexCheckChecked" value="Large" checked={size==="Large"}onChange={onselectFilterBySize}/>
          <label><h5>Large</h5></label>
        </div>

        <h3>Length:</h3>
        <div className='form-check'>
          <input type="checkbox" name="lengthFilter" id="flexCheckChecked" value="All" checked={length==="All"} onChange={onselectFilterByLength}/>
          <label><h5>All</h5></label>
        </div>

        <div className='form-check'>
          <input type="checkbox" name="lengthFilter" id="flexCheckChecked" value="6" checked={length==="6"} onChange={onselectFilterByLength}/>
          <label><h5>6"</h5></label>
        </div>

        <div className='form-check'>
          <input type="checkbox" name="lengthFilter" id="flexCheckChecked" value="23" checked={length==="23"} onChange={onselectFilterByLength}/>
          <label><h5>23"</h5></label>
        </div>

        <div className='form-check'>
          <input type="checkbox" name="lengthFilter" 
          value="25" checked={length==="25"} onChange={onselectFilterByLength}/>
          <label><h5>25"</h5></label>
        </div>
      </div>
    )
  }
  
   const selectSortType = (event) => {
    setSortby(event.target.value);
  }

  //1 sorting
   const sortProducts = (a,b) => {
    if (sortby === "price") {
      return a.price - b.price
    } else if (sortby === "_id") {
      return a._id - b._id
    }
   }

  const SortNav = () => {
    return (
      <div>
        <h3>Sort by Price:</h3>
          <div className='form-check'>
          <input type="checkbox" name="sortby" value="_id" id="flexCheckChecked" checked={sortby === "_id"} onChange={selectSortType}/>
          <label><h5>Reset Sorting</h5></label>
          </div>

          <div className='form-check'>
          <input type="checkbox" name="sortby" value="price" id="flexCheckChecked" checked={sortby === "price"} onChange={selectSortType}/>
          <label for="price"><h5>Lowest to Highest</h5></label>
          </div>
      </div>
      
    )
  }

  //cart
  const addToCart = (props) => {
    if (products.indexOf(props.title) === -1) {
        var carts = [...cart, props]
        setCart(carts)
        var prod = [...products, props.title, props.count + 1]
        setProducts(prod)
    } else {
        var titles = products.indexOf(props.title) + 1
        products[titles] += 1
    }
       setTotalPrice(totalPrice + props.price)
       }

  const Cart = () => {
    if (cart.length > 0) {
      return (
        <div className='py-auto'>
          <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Text>
              {cart.map((item, index) => (
                <div className='p-3'> <CartItem key={index} count={item.count} title={item.title} price={item.price}/>
                </div>
              ))}
              <h3>Total Price: ${totalPrice}</h3>
            </Card.Text>
          </Card.Body>
          </Card>
        </div>
       
      );
    } else {
      return (
        <div className='py-4'>
          <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Shopping Cart</Card.Title>
            <Card.Text>
              <p> ...</p>
              <hr/>
              <h3> Total : ${totalPrice}</h3>
            </Card.Text>
          </Card.Body>
          </Card>
        </div>
      );
    }
   
   }
 
   const add = (event) => {
    products[products.indexOf(event.target.value) + 1] += 1
    cart.forEach((product) => {
      if (product.title  === event.target.value) {
        setTotalPrice(totalPrice + product.price)
      }
    })
   }
 
   const remove = (event) => {
    if (products[products.indexOf(event.target.value) + 1] > 0) {
      products[products.indexOf(event.target.value) + 1] -= 1
      cart.forEach((product) => {
        if (product.title === event.target.value) {
          setTotalPrice(totalPrice - product.price)
        }
      })
    }
    if (products[products.indexOf(event.target.value) + 1] === 0) {

      const newCart = cart.filter((product) => product.title !== event.target.value)
      setCart(newCart)
      const newProducts = products.filter((product) => product !== event.target.value)
      setProducts(newProducts)
    }
   }
 
   const CartItem = (props) => {
    var title = props.title
    var num = products[products.indexOf(props.title) + 1]
    var price = props.price
    return (
      <div className='d-flex align-items-center'>
        <Button variant="outline-primary" value={title} onClick={remove}>-</Button>
        <div>
          <h6>You addded {num} of {title}, ${price} for each</h6>
          </div>
        <div>
          <Button variant="outline-primary" value={title} onClick={add}>+</Button>
        </div>
      </div>
    )
   }
 
  return (
    <div className="App">
      <h1>Black Friday Sale!</h1>
      <div className='d-flex'>
        <div>
          <FilterNav/>
          <SortNav/>
          <Cart/>
        </div>
        <Filter finalItems={productList.filter(matchesSize).filter(matchesLength).sort(sortProducts)}/>
      </div>
     
     
     
    </div>
  );

}

export default App;

