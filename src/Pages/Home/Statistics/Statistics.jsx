
import { data } from 'autoprefixer';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

   

const Statistics = () => {

const donation = JSON.parse(localStorage.getItem('social-donate'));
console.log(donation)
  

    let myDonation = 0;
    let main = 0;
    if(donation){
        for(let item of donation){
            myDonation = myDonation + item.donatePrice;
        }
        main = 735 - myDonation;
    }

    const data = [
        { name: 'Total Donation', value: main },
        { name: 'My Donation', value: myDonation },
     
      ];
      
      const COLORS = ['#FF444A', '#00C49F'];
      
      const RADIAN = Math.PI / 180;
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
      
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
      };
    return (
        <div className='flex justify-center items-center'>
             <PieChart width={800} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip></Tooltip>
          <Legend></Legend>
        </PieChart>
         </div>
    );
};

export default Statistics;