
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';


const Category = () => {
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res => res.json())
        .then(data => {
            setItem(data)
            console.log(data)
        })
    },[])

    const handleCar = () =>{
        const car = item.filter(ct => ct.sub_cagegory == 'car');
        setCategory(car)
    }
    const handleTruckBus = () =>{
        const car = item.filter(ct => ct.sub_cagegory == 'truckBus');
        setCategory(car)
    }
    const handlePolice = () =>{
        const car = item.filter(ct => ct.sub_cagegory == 'police');
        setCategory(car)
    }


    return (
        <Tabs>
    <TabList >
      <div className='grid md:grid-cols-2 lg:grid-cols-3'>
      <Tab>
      <div onClick={handleCar} className="card w-80 glass">
  <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIL0q6cbFbzAup55a865tiEtU-00CM79jhhhnox6Bje7ilnCsfMc212QV1I0WW5XybzOY&usqp=CAU" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Sports Car / Normal Car</h2>
  </div>
</div>
      </Tab>
      <Tab>
        <div onClick={handleTruckBus} className="card w-80 glass">
  <figure><img className='w-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlAThtSwWNeFrwC-uglSrkt0ckKyV7QmtUjE-x08EYqyECi9Fsj3XddHW86BbsABhWdM&usqp=CAU" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Bus / Truck</h2>
  </div>
  </div>
      </Tab>
      <Tab>
        <div onClick={handlePolice} className="card w-80 glass">
  <figure><img src="https://media.gettyimages.com/id/521200846/photo/british-police-car-model-in-scale.jpg?s=612x612&w=0&k=20&c=mTcb0DwEOrLpLobtjKfF-eusy3X08XnsxPapjZ8s6B0=" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Police Car</h2>
  </div>
  </div>
      </Tab>
      </div>
      <br /><br />
    </TabList>
<br /><br />
    <TabPanel>
    <div className='grid sm:grid-cols-2'>
        {
            category.map(ct => <CategoryCard key={ct._id} toy={ct}></CategoryCard>)
        }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid sm:grid-cols-2'>
        {
            category.map(ct => <CategoryCard key={ct._id} toy={ct}></CategoryCard>)
        }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid sm:grid-cols-2'>
        {
            category.map(ct => <CategoryCard key={ct._id} toy={ct}></CategoryCard>)
        }
    </div>
    </TabPanel>
  </Tabs>
    );
};

export default Category;