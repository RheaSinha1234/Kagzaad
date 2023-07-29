import React, {useState, useEffect} from 'react'
import mygif from '../images/giphy.gif'

const Home = () => {

    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHomePage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });

            const data = await res.json();
            // console.log(data);
            setUserName(data.name);
            setShow(true);

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        userHomePage();
    }, []);
    return (
        <>
            <div className="home-page">
                <div className="home-div">
                    <p className="pt-5">WELCOME</p>
                    <h1>{userName}</h1>
                    <image src={mygif} />
                    <h1>Kagzaad</h1>
                    <h2> { show ? 'Happy, to see you back' :  'Here to secure your Documents!' }</h2>
                </div>
            </div>

        </>
    )
}

export default Home
