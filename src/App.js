import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./components/Header/Header";
import ProductsComponent from "./components/Products/ProductsComponent";

function App() {
    return (
        <>
            <div className='bgContainer'>
                <div className="mainContainer">
                    <Header/>
                </div>

            </div>
            <div className='mainContainer'>
                <ProductsComponent/>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5,1fr)',
                    justifyItems: 'center',
                    borderTop: '1px solid black',
                    borderRight: '1px solid black',
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 15px',
                        textAlign: "center",
                        width: '100%',
                        borderLeft: '1px solid black',
                        borderBottom: '1px solid black',
                    }}>
                        <img src="https://pbs.twimg.com/media/DiHYZjOVAAA95Yc.jpg"
                             alt=""
                             width={75}
                             height={75}/>
                        <span style={{
                            paddingBottom: '10px',
                            maxWidth: '75px',
                            marginTop: '20px'

                        }}>Old Skool Shoes</span>
                        <span style={{
                            marginTop: '10px'
                        }}> $59.99</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 15px',
                        textAlign: "center",
                        width: '100%',
                        borderLeft: '1px solid black',
                        borderBottom: '1px solid black',
                    }}>
                        <img src="https://pbs.twimg.com/media/DiHYZjOVAAA95Yc.jpg"
                             alt=""
                             width={75}
                             height={75}/>
                        <span style={{
                            paddingBottom: '10px',
                            maxWidth: '75px',
                            marginTop: '20px'

                        }}>Old Skool Shoes</span>
                        <span style={{
                            marginTop: '10px'
                        }}> $59.99</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 15px',
                        textAlign: "center",
                        width: '100%',
                        borderLeft: '1px solid black',
                        borderBottom: '1px solid black',
                    }}>
                        <img src="https://pbs.twimg.com/media/DiHYZjOVAAA95Yc.jpg"
                             alt=""
                             width={75}
                             height={75}/>
                        <span style={{
                            paddingBottom: '10px',
                            maxWidth: '75px',
                            marginTop: '20px'

                        }}>Old Skool Shoes</span>
                        <span style={{
                            marginTop: '10px'
                        }}> $59.99</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 15px',
                        textAlign: "center",
                        width: '100%',
                        borderLeft: '1px solid black',
                        borderBottom: '1px solid black',
                    }}>
                        <img src="https://pbs.twimg.com/media/DiHYZjOVAAA95Yc.jpg"
                             alt=""
                             width={75}
                             height={75}/>
                        <span style={{
                            paddingBottom: '10px',
                            maxWidth: '75px',
                            marginTop: '20px'

                        }}>Old Skool Shoes</span>
                        <span style={{
                            marginTop: '10px'
                        }}> $59.99</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '50px 15px',
                        textAlign: "center",
                        width: '100%',
                        borderLeft: '1px solid black',
                        borderBottom: '1px solid black',
                    }}>
                        <img src="https://pbs.twimg.com/media/DiHYZjOVAAA95Yc.jpg"
                             alt=""
                             width={75}
                             height={75}/>
                        <span style={{
                            paddingBottom: '10px',
                            maxWidth: '75px',
                            marginTop: '20px'

                        }}>Old Skool Shoes</span>
                        <span style={{
                            marginTop: '10px'
                        }}> $59.99</span>
                    </div>
                </div>

            </div>
        </>

    );
}

export default App;


