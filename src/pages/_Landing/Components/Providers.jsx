import { Alert, Autocomplete, Box, Button, Input, InputAdornment, Rating, Snackbar, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import URL from "url/apiURL";
import { useFetch, useFetchFunction } from "hooks/useFetch";
import { useEffect, useRef, useState } from "react";
import './index.scss'
import { getCities, getStates } from "utils/customFunctions";
import Card1 from '../../../../src/assets/landingPage/Providers/Card1.png'
import Card2 from '../../../../src/assets/landingPage/Providers/Card2.png'
import Card3 from '../../../../src/assets/landingPage/Providers/Card3.png'
import Card4 from '../../../../src/assets/landingPage/Providers/Card4.png'
import Card5 from '../../../../src/assets/landingPage/Providers/Card5.png'
import Card6 from '../../../../src/assets/landingPage/Providers/Card6.png'
import Card7 from '../../../../src/assets/landingPage/Providers/Card7.png'
import Card8 from '../../../../src/assets/landingPage/Providers/Card8.png'
import Card9 from '../../../../src/assets/landingPage/Providers/Card9.png'
import AVAH from '../../../../src/assets/landingPage/Providers/AVAH Providers.png'
import GetStarted from '../../../../src/assets/landingPage/AboutUs/getStarted.png'
import { Link } from "react-router-dom";


const {searchServiceProvidersHomepage} = URL.CUSTOMER.LANDINGPAGE
const {getAllCitiesPerState} = URL.LOGIN_REGISTER

const Providers = ()=>{

    // http://localhost:3008/api/serviceprovider/searchServiceProvidersHomepage?city=Yellapur&state=Karnataka
    
    const [state,setState] =useState({business_name:'',state:'',city:'',snackbarMessage:'',errorMessage:'Search to find providers'})
    const {data:cityData} = useFetch(getAllCitiesPerState)
    const [citiesAndState, setCitiesAndState] = useState({ state: [], cities: [] })
    const cardImages = [Card1, Card2, Card3, Card4, Card5, Card6, Card7, Card8, Card9];
    const {fetchData} = useFetchFunction()
    const [expand, setExpand] = useState(false);
    const [maxHeight, setMaxHeight] = useState('800px');
    const [height,setHeight] = useState({maxHeight:'none',fullHeight:'0',expandButton:false})
    const cardsRef = useRef(null);
    const [result,setResult] = useState([
    ])
    console.log(height)
    const onSelect = (e)=>{
        setState((prev)=>({...prev,state:e.target.textContent,city:''}))
        let citiesList = getCities(e.target.textContent, cityData?.result)

        setCitiesAndState((prev) => ({ ...prev, cities: citiesList }))

    }



    const onSubmit = async()=>{
        if(!state?.business_name && !state?.state && !state?.city){
            setState((prev)=>({...prev,stateError:true,cityError:true,business_nameError:true,snackbarMessage:'Need to type atleast service providers or add both city and state'}))
            setTimeout(()=>{setState((prev)=>({...prev,snackbarMessage:''}))},2000)

            return
        }
        if((state?.state && !state?.city) || (state?.city && !state?.state)){
            setState((prev)=>({...prev,stateError:true,cityError:true,business_nameError:true,snackbarMessage:'Need to select both city and state'}))
            setTimeout(()=>{setState((prev)=>({...prev,snackbarMessage:''}))},2000)
            return
        }

        let {data}=await fetchData({url:`${searchServiceProvidersHomepage}?city=${state?.city}&state=${state?.state}&business_name=${state?.business_name}`,method:'get'})
        console.log('ln 79 ',data.data)
        if(data?.data?.length){
            setResult(data?.data)
            setState((prev)=>({...prev,errorMessage:''}))
        }
        else{
            setResult([])
            setState((prev)=>({...prev,errorMessage:'Service providers not found'}))
        }
    }
    
    useEffect(() => {
        if (cardsRef.current) {
          const fullHeight = cardsRef.current.scrollHeight;
            if(fullHeight > 1600){
                setHeight((prev)=>({...prev,fullHeight:fullHeight,maxHeight:1600,expandButton:true}))
            }
            else{
                setHeight((prev)=>({...prev,fullHeight:fullHeight,maxHeight:1600,expandButton:false}))
            }

        }
      }, [result]); 
    
    // Toggle expand/collapse
    const toggleExpand = () => {
        setHeight((prev)=>({...prev,maxHeight:'none',expandButton:false}))

    // if (expand) {
    //     const fullHeight = cardsRef.current.scrollHeight;
    //     setMaxHeight(`800px`);
    //     setHeight((prev)=>({...prev,maxHeight:'none'}))
    // } 
    // else {
    //     setHeight((prev)=>({...prev,maxHeight:'none'}))
    //     setMaxHeight('none'); // Expand fully
    // }
    };

    useEffect(() => {
        if (cityData?.result?.length) {
            let listOfStates = getStates(cityData?.result)
            setCitiesAndState({ state: listOfStates })
        }
    }, [cityData])
    return(
        <Box className='providers'>
            <Box className='providers__image'>
                <img src={AVAH}/>
                <Box className='providers__image__overlay'></Box>
                <Box className='providers__image__text'> <span className="red">AVAH </span>PROVIDERS</Box>
                <Box className='providers__image__underline'></Box>
            </Box>
            <Box className='providers__search'>
                <TextField sx={{minWidth:250}} color="reddy" value={state?.business_name} 
                onChange={e=>setState((prev)=>({...prev,business_name:e.target.value}))}
                placeholder="Search Service Providers"
                InputProps={{startAdornment:(
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )}}
                />
                <Autocomplete 
                    color="options" 
                    options={citiesAndState?.state || []}  
                    value={state?.state}
                    disablePortal 
                    sx={{minWidth:250}}
                    onChange={onSelect}
                    isOptionEqualToValue={(option, value) => option.value === value.value}                    
                    renderInput={(params) => 
                        <TextField color="reddy" {...params} placeholder="State" 
                        InputProps={{
                            ...params.InputProps
                            ,startAdornment:(
                            <InputAdornment position="start">
                                <LocationOnIcon />
                            </InputAdornment>
                        )}}
                        />}
                />
                <Autocomplete 
                    sx={{minWidth:250}} 
                    disablePortal 
                    value={state?.city}
                    color="reddy" 
                    options={citiesAndState?.cities || []}   
                    onChange={(e)=>setState((prev)=>({...prev,city:e.target.textContent}))}

                    renderInput={(params) => 
                    <TextField color="reddy" {...params} placeholder="City"
                    InputProps={{...params.InputProps,startAdornment:(
                        <InputAdornment position="start">
                            <LocationOnIcon />
                        </InputAdornment>
                    )}}
                    />}/>
                <Button className="buttony" onClick={onSubmit} sx={{textTransform:'none',minWidth:'100px',fontSize:'16px',maxHeight:'56px'}} color="reddy" variant="contained">Search</Button>
            </Box>
            <Box className={`providers__cards`} ref={cardsRef} sx={{
                maxHeight: height?.fullHeight>height?.maxHeight? '1600px' : 'none',
                overflowY: 'hidden',
                transition: 'max-height 0.3s ease',
            }}>
                <Box className='providers__cards__title' sx={{marginBottom:result?.length?'50px':'0'}}>Our <span className="redText">Service Providers</span></Box>
                <Box className={`providers__cards__card `} key={result}>
                {
                    result?.map((obj, ind) => {
                        const imageIndex = ind % cardImages.length; // Cycle through cardImages
                        return (
                            <Box className='cardContainer' key={ind}>
                                <Box>
                                    <img src={cardImages[imageIndex]} alt={obj?.name} />
                                </Box>
                                <Box className='redText'>{obj?.business_name}</Box>
                                <Box className='desc'>{obj?.email}</Box>
                                <Box className='desc'>{obj?.mobile_number}</Box>
                                <Box className='desc'>{obj?.address}</Box>
                                <Box className='location'>{obj?.state} {obj?.city}</Box>
                                <Box className='underline'></Box>
                                <Box>
                                    <Rating
                                        sx={{ marginBottom: 5 }}
                                        name="simple-controlled"
                                        value={obj?.average_rating}
                                        disabled
                                    />
                                </Box>
                            </Box>
                        );
                    })
                }
                </Box>
            </Box>
            {state?.errorMessage && <Box className='providers__errorMessage'><Box>{state?.errorMessage}</Box></Box>}
            {height?.expandButton?<Box className='providers__button'><Button focusRipple={false} color="whiteBackground" variant="text" onClick={toggleExpand}>{'View More > > '}</Button></Box>:<></>}
            <Box className='providers__join'>
                <Box className='howWeDo__join__image'>
                        <img src={GetStarted}/>
                        <Box className='howWeDo__join__image__title1'>Drive Worry-Free </Box>
                        <Box className='howWeDo__join__image__title2'>The Right Service, The Right Provider, The Right Way!</Box>
                        <Box className='howWeDo__join__image__underline'></Box>
                        <Box className='howWeDo__join__image__text'>Whether you're a car owner looking for hassle-free servicing or a service provider
                        wanting to expand your business, AVAH is the platform for you!</Box>
                        <Box className='howWeDo__join__image__button'><Link to='/login'><button>Get Registered Now</button></Link></Box>

                 </Box>
            </Box>
            <Snackbar anchorOrigin={{vertical:"top",horizontal:'center'}} open={state?.snackbarMessage}><Alert severity="error">{state?.snackbarMessage}</Alert></Snackbar>
        </Box>
    )
}

export default Providers