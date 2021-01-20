const HomePage = (props) => {
    return (
    <div className="header">
    <h1>Home</h1>
    <div className="breadcrumb">
    <Link to="/"> Home </Link>
    </div>
    <div className="page">
   <h1>Welcome to  webApplication</h1>
    <p>This React application allows a user to add a set of
   books to a collection of books. It connects to the Google Books API
   and...</p>
    </div>
    </div>
    )
   }