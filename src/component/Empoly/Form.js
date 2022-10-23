import React, { useState } from 'react'
import Card from '../UI/Card';
import useForm from '../hooks/use-form';
import classes from './Form.module.css' ;

const Form = () => {

  const {
  inputName:name,
  touchedInputName:touchedName,
  changeInputHandler:changeNameHandler,
  blurInputHandler:blurNameHandler,
  } = useForm( (e) => e.trim() !=='' )
  const nameIsValid = name.trim() !== '';
  const nameInValid = !nameIsValid && touchedName;
   
  const {
    inputName:date,
    touchedInputName:touchedDate,
    changeInputHandler:changeDateHandler,
    blurInputHandler:blurDateHandler,
    // reset:resetDate
    } = useForm( (e) => e.trim() !=='' )
    const dateIsValid = date.trim() !== '';
    const dateInValid = !dateIsValid && touchedDate;

    const {
      inputName:ID,
      touchedInputName:touchedId,
      changeInputHandler:changeIDHandler,
      blurInputHandler:blurIdHandler
      } = useForm( (e) => e.trim() !=='' )
      const idIsValid = ID.trim().length === 14;
      const idInValid = !idIsValid && touchedId;

     const {
        inputName:residence,
        touchedInputName:touchedResidence,
        changeInputHandler:changeResidenceHandler,
        blurInputHandler:blurResidenceHandler
        } = useForm( (e) => e.trim() !=='' )
     const residenceIsValid = residence.trim() !== '';
     const residenceInValid = !residenceIsValid && touchedResidence;

  const {
     inputName:Jop,
     touchedInputName:touchedJop,
     changeInputHandler:changeJopHandler,
     blurInputHandler:blurJopHandler
     } = useForm( (e) => e.trim() !=='' )
     const jopIsValid = Jop.trim() !== '';
     const jopInValid = !jopIsValid && touchedJop;

     const {
      inputName:degree,
      touchedInputName:touchedDegree,
      changeInputHandler:changeDegreeHandler,
      blurInputHandler:blurDegreeHandler
      } = useForm( (e) => e.trim() !=='' )
      const degreeIsValid = degree.trim() !== '';
      const degreeInValid = !degreeIsValid && touchedDegree;

     const {
        inputName:graduation,
        touchedInputName:touchedGraduation,
        changeInputHandler:changeGraduationHandler,
        blurInputHandler:blurGraduationHandler
        } = useForm( (e) => e.trim() !=='' )
       const graduationIsValid = graduation.trim() !== '';
       const graduationInValid = !graduationIsValid && touchedGraduation;

    const {
      inputName:recruitment,
      touchedInputName:touchedRecruitment,
      changeInputHandler:changeRecruitmentHandler,
      blurInputHandler:blurRecruitmentHandler
      } = useForm( (e) => e.trim() !=='' )
      const recruitmentIsValid = recruitment.trim() !== '';
      const recruitmentInValid = !recruitmentIsValid && touchedRecruitment;

      const {
        inputName:certificate,
        touchedInputName:touchedCertificate,
        changeInputHandler:changeCertificateHandler,
        blurInputHandler:blurCertificateHandler
        } = useForm( (e) => e.trim() !=='' )

      const {
        inputName:tel,
        touchedInputName:touchedTel,
        changeInputHandler:changeTelHandler,
        blurInputHandler:blurTelHandler
        } = useForm( (e) => e.trim() !=='' )
        const telIsValid = tel.trim().length === 11;
        const telInValid = !telIsValid && touchedTel;

    

       
 const sendForm = async (data) => {

  const response = await fetch('https://empoly-form-default-rtdb.firebaseio.com/empoly.json',{
    method:'POST',
    headers :{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data)
  })

  const date =  await response.data()
 }
            
    const vailditForm = nameIsValid && dateIsValid && idIsValid && residenceIsValid && jopIsValid && recruitmentIsValid && graduationIsValid &&
    telIsValid && degreeIsValid;

     let formIsValid = false;
     if ( vailditForm ) formIsValid = true;

    const submitHandler = (e) => {
     e.preventDefault(); 
     const data = {name, date, ID, residence, Jop, degree, graduation,    recruitment, tel, certificate}
     // send data to firebase
     sendForm(data)
    
  }

  return (
    <Card className={classes.form}>
      <h3>Job Application</h3>
      <form onSubmit={submitHandler}>

        <div className={ !nameInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>Name</label>
          <input 
           type='text' 
           onChange={changeNameHandler}
           onBlur={blurNameHandler} />
          {nameInValid && <p className={classes.text_error}>
          Name Not Valid</p>}
        </div>

        <div className={ !dateInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>data birthday</label>
          <input 
          type='date'
          onChange={changeDateHandler}
          onBlur={blurDateHandler}
          />
         {dateInValid && <p className={classes.text_error}>date not available</p>}
        </div>

        <div className={ !idInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>ID</label>
          <input 
          type='number'
          onChange={changeIDHandler}
          onBlur={blurIdHandler}
          />
          {idInValid && <p className={classes.text_error}>
          ID Must Equal 14 character</p>}
        </div>

        <div className={!residenceInValid ? classes.controls:
        `${classes.controls} ${classes.inValid}`}>
          <label>loaction</label>
          <input 
           type='text'
           onChange={changeResidenceHandler}
           onBlur={blurResidenceHandler}/>

          {residenceInValid && <p className={classes.text_error}>
          Please enter the location with your </p>}
        </div>

        <div className={ !jopInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>Jop</label>
          <input 
           type='text'
           onChange={changeJopHandler}
           onBlur={blurJopHandler}/>

          {jopInValid && <p className={classes.text_error}>
          please enter jop name</p>}
        </div>

        <div className={ !degreeInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>Last degree</label>
          <input 
           type='text'
           onChange={changeDegreeHandler}
           onBlur={blurDegreeHandler}/>

          {degreeInValid && <p className={classes.text_error}>
          please enter last degree</p>}
        </div>

        <div className={ !graduationInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>Graduation Year</label>
          <input 
            type='date'
            onChange={changeGraduationHandler}
            onBlur={blurGraduationHandler} />

          {graduationInValid && <p className={classes.text_error}>
           Please enter Graduation Year</p>}
        </div>

        <div className={ !recruitmentInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>Position Of Recruitment</label>
          <input 
           type='text'
           onChange={changeRecruitmentHandler}
           onBlur={blurRecruitmentHandler} />
        {recruitmentInValid && <p className={classes.text_error}>
         enter status of recruitment</p>}
        </div>

        <div className={classes.controls}>
          <label>Experience certificate <span>(optional)</span></label>
          <input 
           type='file'
           onChange={changeCertificateHandler}
           onBlur={blurCertificateHandler} />
        </div>
        <div className={!telInValid ? classes.controls:
        `${classes.controls} ${classes.inValid} `}>
          <label>Tel</label>
          <input 
           type='tel'
           onChange={changeTelHandler}
           onBlur={blurTelHandler}/>
         {telInValid && <p className={classes.text_error}>
         Please enter number phone correct</p>}
        </div>

        <div className={classes.actions}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </Card>
  )
}

export default Form
