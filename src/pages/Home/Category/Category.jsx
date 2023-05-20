
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';


const Category = () => {
    const [item, setItem] = useState([]);
    const [category, setCategory] = useState([])

    useEffect(()=>{
        fetch('https://assignment-eleven-server-three.vercel.app/toys')
        .then(res => res.json())
        .then(data => {
            setItem(data)
            // console.log(data)
        })
    },[])

    const handleCar = () =>{
        const car = item.filter(ct => ct.sub_cagegory == 'car');
        setCategory(car)
    }
    const handleTruckBus = () =>{
        const car = item.filter(ct => ct.sub_cagegory == 'truck');
        setCategory(car)
    }
    const handlePolice = () =>{
        const car = item.filter(ct => ct.sub_cagegory == 'police');
        setCategory(car)
    }


    return (
        <Tabs>
    <TabList >
      <div className='font-bold bg-slate-100 rounded'>
      <Tab>
      <div onClick={handleCar} className="">
  Sports Car
</div>
      </Tab>
      <Tab>
        <div onClick={handleTruckBus} className="">
  Truck
  </div>
      </Tab>
      <Tab>
        <div onClick={handlePolice} className="">
        Police Car
  </div>
      </Tab>
      </div>
      <br />
    </TabList>
<br /><br />
    <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {
            category.map(ct => <CategoryCard key={ct._id} toy={ct}></CategoryCard>)
        }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {
            category.map(ct => <CategoryCard key={ct._id} toy={ct}></CategoryCard>)
        }
    </div>
    </TabPanel>
    <TabPanel>
    <div className='grid md:grid-cols-2 lg:grid-cols-3'>
        {
            category.map(ct => <CategoryCard key={ct._id} toy={ct}></CategoryCard>)
        }
    </div>
    </TabPanel>
  </Tabs>
    );
};

export default Category;