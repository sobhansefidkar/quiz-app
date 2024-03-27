import React, { useContext, useState } from "react";
import Data from "./data";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const getQuestions = () =>{
        const data = localStorage.getItem("questions")
        if(data){
            return JSON.parse(data)
        }else{
            return []
        }
    }

    const [number , setNumber] = useState(1)
    const [type , setType] = useState("ورزشی")
    const [questions , setQuestions] = useState(getQuestions)
    const [index , setIndex] = useState(0)
    const [correctAnswers , setCorrectAnswers] = useState(0)

    const setup = () => {
        const typeOfQuestions = Data.filter(item => item.type == type)
        typeOfQuestions.splice(number)   
        setQuestions(typeOfQuestions)
    }
    localStorage.setItem("questions" , JSON.stringify(questions))

    const check = () => {
        setCorrectAnswers(correctAnswers + 1)
        setIndex(index + 1)
    }
    const increase = () => {
        setIndex(index + 1)
    }
    const again = () => {
        localStorage.clear()
        setIndex(0)
        setCorrectAnswers(0)
    }
    return <AppContext.Provider value={{
        setup,
        setNumber,
        setType,
        number,
        index,
        setIndex,
        questions,
        check,
        increase,
        correctAnswers,
        again,
        type,
    }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }