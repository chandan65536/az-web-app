import { useEffect } from "react";
import { GameEngine } from "./game/GameEngine";
import Stats from 'three/examples/jsm/libs/stats.module.js';

function CampfirePage() {
    return (<div>
        <Nav/>
        <MainContent />
        <NextLevelModalTemplate/>
        <HelpModalTemplate />
    </div>
    );
}

function mainGameLoop(){
    let canvasEl = document.querySelector(".webgl") as HTMLCanvasElement;
  let helpModal = document.getElementById("gameHelpModal");
  let levelCompleteModal = document.getElementById("gameLevelCompleteModal");
  let levelNavEl = document.getElementById("game-state--level-nav");

  if(canvasEl == null || helpModal == null || levelCompleteModal == null || levelNavEl == null) {
    alert("Can not initialize");
    console.log("ERROR: elements not defined in base page");
    return;
  }

  let mainGame = new GameEngine(canvasEl, helpModal, levelCompleteModal, levelNavEl);
  mainGame.setupScene();

  let stats = new Stats();
  let showFps = false;
  
  if(showFps){ 
    stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
    stats.dom.style.top = canvasEl.offsetTop + "px";
    document.body.appendChild( stats.dom );
  }

  let animate = function () {
    if(showFps) stats.begin();

    mainGame.animate();

    if(showFps) stats.end();

    requestAnimationFrame(animate);
  };

  animate();
}

function MainContent(){

    useEffect(() => {
        
        mainGameLoop();

      }, []);

    return (<div id="mainContent">
        <canvas className="webgl"></canvas>
      </div>
    );
}

function Nav() {
    return (<nav className="navbar navbar-expand navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="../">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#self"><span>&#128293;</span> Campfire</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-success" 
                  data-bs-toggle="modal" data-bs-target="#gameHelpModal">Help</button>
              </li>
              <li className="nav-item dropdown" id="game-state--level-nav">
                
              </li>
            </ul>
          </div>
        </div>
      </nav>);
}

function HelpModalTemplate() {
    return (<div className="modal fade" id="gameHelpModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Welcome</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary game-action--button" data-action="close" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
}

function NextLevelModalTemplate() {
    return (<div className="modal fade" id="gameLevelCompleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Level Completed</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
  
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary game-action--button" data-action="main-menu" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary game-action--button" data-action="next-level" data-bs-dismiss="modal">Next Level</button>
            </div>
          </div>
        </div>
      </div>);
}

export default CampfirePage;