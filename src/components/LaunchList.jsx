import  { useEffect , useState } from 'react';
import { Heading, Image} from '@chakra-ui/react';
import * as API from '../services/Launches';
import { Launchitem } from '../components/Launchitem';


export function LaunchList() {
    const [launches, setLaunches]  = useState([]);

    useEffect (() => {
        API.getAllLaunches().then(setLaunches).catch (console.log);
      }, []) 
      
      
    return(   
         <>

<Heading as="h1" size="lg" m={4}>SpaceX Launches</Heading>
 {launches.length === 0 ? ( 
 <div>loading...</div>)
  :
(
<section>
{launches.map(launch => (
<Launchitem  key={launch.flight_number}{...launch}/>
))}
</section>)}
       </>
)
}