const PesonalDetails=()=>{

    const formik=useFormik();
    useEffect(()=>{
        if(!formik.erres){
            props.onSucce(formik.values)
        }else{

            props.onErr(formik.errors)
        }

    },[formik]) 
    return <>
    
    </>
}


Stepper=()=>{
    currRecord={}
   curStep=0
   allowNext=false;

   onSucccess(values)=>{
    currRecord.PesonalDetails=values;
    allowNext=true;
   }

   onerror=()=>{
    allowNext=false;
   }

   handleNextClick=()=>{

   }


   return<>

    <PesonalDetails onSucccess={onSucccess} onErr={onErr}/>

   </>



}