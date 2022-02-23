import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { MdSystemUpdate } from 'react-icons/md';
import '../css/PieChart.css'

function Piechart({nutrientsData}) {
    const {fats, carbs, protein} = nutrientsData;
    return (
        <div className="piechart-container">
            <Doughnut 
                height={600}
                width={600}
                data={{
                    labels: ['Fats', 'Carbs', 'Protein'],
                    datasets: [
                        {
                            label: 'Nutrition Chart',
                            data:[fats,carbs,protein],
                            backgroundColor:['rgb(255, 130, 130)','rgb(125, 186, 255)','rgb(178, 255, 178)'],
                            borderColor: ['red', 'blue', 'green'],
                            borderWidth:2,
                        }
                    ]
                }}
            />
        </div>
    )
}

export default Piechart
