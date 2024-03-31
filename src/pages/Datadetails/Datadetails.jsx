import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import img from '../../img/Asset 10.png';
import img1 from '../../img/Asset_11.png';
import img2 from '../../img/Asset_13.png';
import img3 from '../../img/Asset_14.png';
import img4 from '../../img/Asset_15.png';
import img5 from '../../img/Asset_9.png'
const carddata = [
  {
    id: 1,
    name: 'SHIB',
    price: "$0.00002642",
    transactions: '1.56%',
    imgdata: `${img1}`,
    imgId: `${img}`,
  },

  {
    id: 2,
    name: 'LTC',
    price: "$106.42",
    transactions: '1.56%',
    imgdata: `${img2}`,
    imgId: `${img}`,
  },

  {
    id: 3,
    name: 'XRP',
    price: "$0.8235",
    transactions: '1.56%',
    imgdata: `${img3}`,
    imgId: `${img}`,
  },
  {
    id: 4,
    name: 'TRX',
    price: "$1.01",
    transactions: '1.56%',
    imgdata: `${img4}`,
    imgId: `${img}`,
  },
  {
    id: 5,
    name: 'SUSHI',
    price: "$2.642",
    transactions: '1.56%',
    imgdata: `${img5}`,
    imgId: `${img}`,
  },
  
];

export default function Datadetails() {
  return (
   <div className='datadetails'>
 {carddata.map(cd =><Card sx={{ minWidth: 275 }} key={cd.id}>
      <CardContent>
       <div className='card1'>
       <img src={cd.imgdata}/>
       <div>
       <Typography sx={{ fontSize: 15 }} color="text.secondary" >
         {cd.name}
        </Typography>
      
        <Typography sx={{ mb: 1.5,fontSize: 20,fontWeight:800 }} color="black">
          {cd.price}
        </Typography>
       </div>
       </div>
       <div className='card2'>
        <img src={cd.imgId} />
        <Typography variant="body2" color="green" sx={{ ml: 1}}>
          {cd.transactions}
          
        </Typography>
       </div>
      </CardContent>
    </Card>)}
   </div>
  );
}