import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setfemaledata, setmaleData, setUserData } from '../../Redux/Actions/useDataAction';
import { DotEffect } from '../../useeffect';
import './user.css'

function User() {
  const [Data, setdata] = useState([]);
  const dispatch = useDispatch();
  const [radioState, setRadioState] = useState('all')
  const UserDataStore = useSelector((state) => state.AllUserData);
  const { allUserData, allMaleData, allFemaleData } = UserDataStore;

  DotEffect("user")

  const getUserData = async () => {
    const respones = await fetch("https://randomuser.me/api/?results=20");
    const data = await respones.json()
    setdata(data.results)
    dispatch(setUserData(data.results))
  }

  useEffect(() => {
    getUserData()
  }, []);

  const maleData = Data.filter((e) => {
    return (e.gender === "male")
  })

  const femaleData = Data.filter((e) => {
    return (e.gender === "female")
  })

  // console.log(maleData);

  const handleRadioChange = (event) => {
    setRadioState(event.target.value);
    switch (event.target.value) {
      case "all":
        console.log("All")
        dispatch(setUserData(Data));
        break;
      case "male":
        console.log("Male");
        dispatch(setmaleData(maleData));
        break;
      case "female":
        console.log("Female");
        dispatch(setfemaledata(femaleData));
        break;
      default:
        break;
    }
  }


  const AllUserData =
    allUserData.map((e) => {
      return (
        <>
          <div className="card">
            <div className=" urD"><img src={e.picture.medium} alt="" /></div>
            <div className=" urD">{e.name.title} {e.name.first} {e.name.last}</div>
            <div className=" urD">{e.email}</div>
            <div className=" urD">{e.gender}</div>
          </div>
        </>
      )
    })
  const AllMaleCard =
    allMaleData.map((e) => {
      return (
        <>
          <div className="card">
            <div className=" urD"><img src={e.picture.medium} alt="" /></div>
            <div className=" urD">{e.name.title} {e.name.first} {e.name.last}</div>
            <div className=" urD">{e.email}</div>
            <div className=" urD">{e.gender}</div>
          </div>
        </>
      )
    })
  const AllFemaleCard =
    allFemaleData.map((e) => {
      return (
        <>
          <div className="card">
            <div className=" urD"><img src={e.picture.medium} alt="" /></div>
            <div className=" urD">{e.name.title} {e.name.first} {e.name.last}</div>
            <div className=" urD">{e.email}</div>
            <div className=" urD">{e.gender}</div>
          </div>
        </>
      )
    })

  return (
    <div className="user">
      <div className="top-user">
        <h2 className='h2-user'>User Details</h2>
        <p className='p-user'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vitae voluptates cum ducimus assumenda quis ratione debitis optio ea unde molestias aspernatur, ullam velit suscipit obcaecati esse. Nihil qui laborum delectus laboriosam magnam obcaecati quos pariatur modi, tenetur voluptas. Architecto repellat vitae placeat esse, voluptatum omnis culpa quos voluptatibus magnam.</p>
        <form className='form-user'>
          <label htmlFor=""><input className='input-user' type="radio" name="gender" id="" onChange={handleRadioChange} checked={radioState === 'all'} value="all" /> All</label>
          <label htmlFor=""><input className='input-user' type="radio" name="gender" id="" onChange={handleRadioChange} checked={radioState === 'male'} value="male" /> Male</label>
          <label htmlFor=""><input className='input-user' type="radio" name="gender" id="" onChange={handleRadioChange} checked={radioState === 'female'} value="female" /> Female</label>
        </form>
        <div className="user-card-container">
          <div className="user-top-titles">
            <div className="topTitle">IMAGE</div>
            <div className="topTitle">NAME</div>
            <div className="topTitle">EMAIL</div>
            <div className="topTitle">GENDER</div>
          </div>
          {(radioState === "all") ? (<>{AllUserData}</>) : (radioState === "male") ? (<>{AllMaleCard}</>) : (radioState === "female") ? (<>{AllFemaleCard}</>) : (<><h1>No Data</h1></>)}
        </div>
      </div>
    </div>
  )
}

export default User