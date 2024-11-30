import axios from "axios";
import { useEffect, useState } from "react";


function App() {
  // const [color, setColor] = useState('red');
  // const [height, setHeight] = useState('500px');
  const [datas, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    iAmLoading();
  }, [])


  const iAmLoading = async () => {
    let result = await axios.get('https://66fcc56ec3a184a84d17ecf3.mockapi.io/vendors-near-me'); //promise (res, reject)
    setData(result.data);
    setLoading(false)
  }


  //map and forEach....

  //async / await

  // function squareOfNumber(fn, b) {
  //   return fn(b); //callback function
  // }

  // function squareANo(number) {
  //   console.log(number * number)
  //   return number * number;
  // }

  // function cubeNumber(number){
  //   console.log(number * number * number);

  // }

  // squareOfNumber(cubeNumber, 3)

  // squareOfNumber(squareANo, 4)

  // // useEffect()

  // var a = [1, 2, 3]

  // a.forEach((e, index) => {
  //   if (e == 2) { 
  //     a[index] = 4
  //   }
  // })

  // console.log(a)



  console.log(datas)

  return (
    <div>
      {
      isLoading ?  <p>Loading......</p> :  datas.map((e) => {
          return <div>
            <img src={e.logo} height={"100px"} width={"100px"} />
            <p>{e.phone}</p>
            <p>{e.company}</p>
            <p>{e.distanceAwayFromUser}</p>
          </div>
        })
      }
    </div>
  );
}

export default App;
