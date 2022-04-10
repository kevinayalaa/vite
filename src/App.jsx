 import {useState, useEffect} from 'react';
import * as API from './services/Launches';
import logo from './assets/logo.png';
import { Heading, Image} from '@chakra-ui/react';
import { Launchitem } from './components/Launchitem';

export function App() {
const [launches, setLaunches]  = useState([]);

useEffect (() => {
  API.getAllLaunches().then(setLaunches);
}, []) 


  return (
    <>
    <Image m={4} src={logo}/>
    <Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
          <section>
        {launches.map(launch => (
          <Launchitem  key={launch.flight_number}{...launch}/>
        ))}
      </section>
      </>
    )
}


  