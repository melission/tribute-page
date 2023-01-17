// import logo from './logo.svg';
import './App.css';
import spock from "./spock.jpg"

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
      <div className="App">
          <head>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta charSet={"utf-8"} />
              <title>Spock tribute page</title>
          </head>
        <header className="App-header" id="title">15 Times when Spock saved the Galaxy.</header>
          <div id="img-div">
              <img id="image" src={spock} alt='a picture of Spock'/>
              <p id="img-caption">
                An image of Spock looking at someone on the right side.
              </p>
          </div>
        <section id="tribute-info">
            <p id='intro'>
                Not many people know this, but there is a brief list of what he achieved during his long and
                profound life.
            </p>
            <ul id="tribute-list">
                <li className="tribute-list_element">
                    He stole the Infinity Gauntlet hence prevented the use of it.
                </li>
                <li className="tribute-list_element">
                    2
                </li>
                <li className="tribute-list_element">
                    3
                </li>
                <li className="tribute-list_element">
                    4
                </li>
                <li className="tribute-lis_element">

                </li>
                <li className="tribute-lis_element">

                </li>
                <li className="tribute-lis_element">

                </li>
                <li className="tribute-lis_element">

                </li>
            </ul>
            <a id="tribute-link" href="" target="_blank">See more here (the link is empty)</a>

            </section>
      </div>
  );
}

export default App;
