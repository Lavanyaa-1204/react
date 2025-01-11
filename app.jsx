import Header from "./components/header"
import Main from "./components/entry"
import Data from "./data"
export default function FName(){
    const Dataentry =Data.map((x)=> { 
        return (
        <Main {...x}/>
        )
    })
    return (
        <>
        <Header />
        {Dataentry}
        </>

    )
}
