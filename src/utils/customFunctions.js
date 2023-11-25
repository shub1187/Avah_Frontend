import axios from "axios";
import { useFetchFunction } from "hooks/useFetch";
import URL from "url/apiURL";


const logout = ()=>{
    localStorage.clear();
    window.history.replaceState(null, "", "/login")
    window.location.reload();
}

/**
 * @param {Function} - check if in createTextfield if any of required fields are empty
 * @description - eg: formData.email = "" => this indicates falsey value,if i use ! then the output is true
 * - so if anyone of the obj is returning as true as in there is a empty string then function output will be true
 * - else it will be false
 */
const requiredTextfield = (fields,formData) => {
    return fields.filter(field => field.required).some(field => !formData[field.name]) ;
}

const getBrandData = (data)=>{
    return data
            .flatMap(obj => Object.keys(obj))
            .map(label => ({ label, value: label }));
}

const getModelData = (wholeData,brandDataArray,brandName)=>{
    let modelArray; 
    brandDataArray?.map((brand)=>{
      if(brand.label ===brandName){
        modelArray = wholeData
          .flatMap(obj => obj[brand.label] ?? [])
          .map(car=>({label:car,value:car}))
        return modelArray
      }
    })
    return modelArray
  }

const getStates = (apiData) =>{
    return apiData?.map((brand)=>{
        const brandName = Object.keys(brand)[0]; // Get the brand name  
        return {
        label: brandName,
        value: brandName
        };
    })
}
const getCities = (formDataState,apiData)=>{
    let citiesList = []
    apiData?.map((city)=>{
        const State = Object.keys(city)[0];
        if(State===formDataState){
        city[State].map(city=>{
            citiesList.push({label:city,value:city}) 
        })
        }
    })
    console.log(citiesList)
    return citiesList
}
export {
    logout , requiredTextfield, getBrandData, getModelData, getStates, getCities
}