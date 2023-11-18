import Form from './Components/Form/Form'
import Card from './Components/Card/Card'
import Options from './Components/Options/Options'
import './App.scss'
import { useState } from 'react'


function App() {
    const [exportData, setExportData] = useState({
        name: "React",
        color: "cyan",
        number: "01",
        description: "React is a very popular JavaScript framework used to build modern web UI.",
        speed: "9.0",
        popularity: "9.0",
        source: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
    });

    const changeData = (data:any) => {
        setExportData(data);
    }

    return (
        <>
            <span className="wip">WORK IN PROGRESS</span>

            <Form onChange={changeData}></Form>
            <Card
                data={exportData}
            ></Card>
            <Options></Options>
        </>

    )
}

export default App
