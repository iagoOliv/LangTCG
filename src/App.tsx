import Form from './Components/Form/Form'
import Card from './Components/Card/Card'
import Options from './Components/Options/Options'
import './App.scss'


function App() {
    return (
        <>
            <span className="wip">WORK IN PROGRESS</span>

            <Form></Form>
            <Card
                language="React"
                color="slate"
                number="01"
                description="React é uma framework de JavaScript usado na criação de Interfaces para a Web."
                speed="8.0"
                popularity="9.0"
                source="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            ></Card>
            <Options></Options>
        </>

    )
}

export default App
