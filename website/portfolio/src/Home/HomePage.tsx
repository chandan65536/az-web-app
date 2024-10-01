import { Link } from "react-router-dom";

function HomePage(){
    return (
    <main>
        <section className="py-3 text-center container">
        <div className="row py-lg-3">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome</h1>
            <p className="lead text-body-secondary">
              Brainwaves and Blueprints - Where Ideas Come to Play
            </p>
          </div>
        </div>
      </section>
      <div className="album py-3 bg-body-tertiary">
      <div className="container">
  
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="card shadow-sm">
              <img className="card-img-top" src="/assets/images/intro.png" alt="Campfire Puzzle" />
              <div className="card-body">
                <p className="card-text">
                  <h5>Campfire</h5>
                  <div>
                    Use diamonds to guide light from a lit campfire.
                  </div>
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="btn-group">
                    <Link to='./campfire' className='btn btn-sm btn-outline-primary'>Play</Link>
                    <a className="btn btn-sm btn-outline-secondary" href="https://github.com/chandan65536/az-web-app/tree/main/website/portfolio/src/Campfire" target="_blank" rel="noreferrer">Source</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </main>   
    );
}

export default HomePage;