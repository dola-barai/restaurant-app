import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Aos from 'aos';
import useMenu from '../hooks/useMenu';

const MenuItems = () => {
    const catagories = ['Indian', 'North Indian', 'South Indian', 'Italian']
    const { menu } = useParams();
    const initialIndex = catagories.indexOf(menu);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menuitems] = useMenu();

    const indian = menuitems.filter(items => items.menu === 'Indian')
    const northIndian = menuitems.filter(items => items.menu === 'North Indian')
    const southIndian = menuitems.filter(items => items.menu === 'South Indian')
    const italian = menuitems.filter(items => items.menu === 'Italian')

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <div className='bg-opacity-50 py-5 '  style={{ backgroundImage: `url('https://img.freepik.com/free-photo/ingredients-pasta-black_23-2147772033.jpg?w=740&t=st=1693848389~exp=1693848989~hmac=78ff64f591d72f8e92305e4fdcf8f83628aab000d00593dbe85b29c9e4f367ea')`, backgroundSize: 'cover' }}>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className="md:flex justify-center rounded-lg gap-10 my-1 px-2 mx-10 py-1" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/abstract-blue-light-pipe-speed-zoom-black-background-technology_1142-9980.jpg?w=740&t=st=1693847847~exp=1693848447~hmac=95be5265ba97172e4020a91cd43a0ddf2327555100f93fa116d2973fa934ef45')`, backgroundSize: 'cover' }}>
                        <Tab className="text-[#F1ECE1] hover:text-gray-700 tab w-full py-2 text-semibold rounded-none text-xl text-center"><button>Indian Cuisine</button></Tab>
                        <Tab className="text-[#F1ECE1] hover:text-gray-700 tab w-full py-2 text-semibold rounded-none text-xl text-center"><button>North Indian Cuisine</button></Tab>
                        <Tab className="text-[#F1ECE1] hover:text-gray-700 tab w-full py-2 text-semibold rounded-none text-xl text-center"><button>South Indian Cuisine</button></Tab>
                        <Tab className="text-[#F1ECE1] hover:text-gray-700 tab w-full py-2 text-semibold rounded-none text-xl text-center"><button>Italian Cuisine</button></Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10" data-aos="zoom-out-right">
                            {
                                indian.map(items =>
                                    <div key={items.id} className="flex space-x-2 text-white bg-black bg-opacity-40 p-2 rounded-md">
                                        <img
                                            style={{ borderRadius: '0 200px 200px 200px' }}
                                            className="w-[90px] h-[90px]"
                                            src={items.image}
                                            alt='food'
                                        />
                                        <div>
                                            <h3 className="uppercase">{items.item} ---------</h3>
                                            <p>{items.recipe}</p>

                                        </div>
                                        <p className="text-white">₹{items.price}</p>

                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10 text-white " data-aos="zoom-in-down">
                            {
                                northIndian.map(items =>
                                    <div key={items.id} className="flex space-x-2 bg-black bg-opacity-40 p-2 rounded-md">
                                        <img
                                            style={{ borderRadius: '0 200px 200px 200px' }}
                                            className="w-[90px] h-[90px]"
                                            src={items.image}
                                            alt='food'
                                        />
                                        <div>
                                            <h3 className="uppercase">{items.item} ---------</h3>
                                            <p>{items.recipe}</p>

                                        </div>
                                        <p className="text-white">₹{items.price}</p>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10 text-white" data-aos="zoom-in-down">
                            {
                                southIndian.map(items =>
                                    <div key={items.id} className="flex space-x-2 bg-black bg-opacity-40 p-2 rounded-md">
                                        <img
                                            style={{ borderRadius: '0 200px 200px 200px' }}
                                            className="w-[90px] h-[90px]"
                                            src={items.image}
                                            alt='food'
                                        />
                                        <div>
                                            <h3 className="uppercase">{items.item} ---------</h3>
                                            <p>{items.recipe}</p>

                                        </div>
                                        <p className="text-white">₹{items.price}</p>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-10 mx-10 text-white" data-aos="zoom-out-left">
                            {
                                italian.map(items =>
                                    <div key={items.id} className="flex space-x-2 bg-black bg-opacity-40 p-2 rounded-md">
                                        <img
                                            style={{ borderRadius: '0 200px 200px 200px' }}
                                            className="w-[90px] h-[90px]"
                                            src={items.image}
                                            alt='food'
                                        />
                                        <div>
                                            <h3 className="uppercase">{items.item} ---------</h3>
                                            <p>{items.recipe}</p>

                                        </div>
                                        <p className="text-white">₹{items.price}</p>
                                    </div>
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MenuItems;